"use client";
import React, { useContext, useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import Input from "./Input";
import { CounterContext } from "../contexts/CounterContext";
import Select from "./Select";

export interface InputGoogleProps {
  id: number;
  name: string;
  kind: string;
  point: string;
  className: string;
  classNameInputDiv: string;
  classNameInput: string;
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
  value?: string | undefined;
}

export default function InputGoogle(props: InputGoogleProps) {
  const [inputValue, setInputValue] = useState<
    google.maps.places.PlaceResult | string
  >("");
  const [autocomplete, setAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);
  const { formData, setFormData } = useContext(CounterContext);
  const kind = props.kind === "current" ? "current" : "planned";
  const point = props.point;
  const className = props.className;

  const handleAutocompleteLoad = (
    autocomplete: google.maps.places.Autocomplete
  ) => {
    setAutocomplete(autocomplete);
  };

  const handlePlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      const inputValue = place.formatted_address;
      setInputValue(inputValue || "");

      const updatedFormData = {
        ...formData,
        [kind]: {
          ...formData[kind],
          points: {
            ...formData[kind].points,
            ...(props.point !== "other"
              ? { [props.point]: place }
              : {
                  other: {
                    ...formData[kind].points.other,
                    [props.id]: place,
                  },
                }),
          },
        },
        general: {
          ...formData.general,
          actual_point: place.geometry?.location,
        },
      };

      // Pokud je workplace, nastav i do planned
      if (props.kind === "current" && props.point === "workplace") {
        updatedFormData.planned.points.workplace = place;
      }

      setFormData(updatedFormData);
    }

  };

  const handleInputClick = () => {
    if (autocomplete !== null) {
      setInputValue("");
      setFormData({
        ...formData,
        [kind]: {
          ...formData[kind],
          points: {
            ...formData[kind].points,
            [point]: "",
          },
        },
      });
      autocomplete.setTypes(["geocode"]);
    }
  };

  const options = {
    types: ["geocode"],
    componentRestrictions: { country: "cz" },
  };

  return (
    <div className={className}>
      <div className={props.classNameInputDiv}>
        <Autocomplete
          onLoad={(autocomplete) => handleAutocompleteLoad(autocomplete)} // onLoad událost, která se spustí po načtení komponenty Autocomplete
          onPlaceChanged={handlePlaceChanged} // onPlaceChanged událost, která se spustí po výběru místa v Autocomplete
          options={options}
        >
          <Input
            name={props.name}
            classNameInput={props.classNameInput}
            label={props.label}
            type={props.type}
            placeholder={props.placeholder}
            required={props.required}
            value={
              inputValue !== ""
                ? inputValue.toString()
                : (point === "residence" || point === "workplace") &&
                  (typeof formData[kind]?.points[point] !== "string" &&
                  formData[kind]?.points[point]?.formatted_address !== undefined
                    ? formData[kind]?.points[
                        point
                      ]?.formatted_address.toString()
                    : "")
            }
            onChange={(e) => setInputValue(e.target.value)}
            onClick={handleInputClick}
          />
          {/* Propojení vstupu uživatele s hodnotou v stavové proměnné */}
        </Autocomplete>
      </div>

      {props.point !== "workplace" && props.id !== 200 && props.id !== 201 && (
        <Select {...props} />
      )}
    </div>
  );
}
