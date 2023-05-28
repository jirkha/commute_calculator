"use client";
import React, { useContext, useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import Input, { InputProps } from "./Input";
import { CounterContext } from "../contexts/CounterContext";
import Select from "./Select";

export interface InputGoogleProps {
  id: number;
  name: string;
  kind: string;
  point: string;
  className: string;
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
}

export default function InputGoogle(props: InputGoogleProps) {
  const [inputValue, setInputValue] = useState<
    google.maps.places.PlaceResult | string
  >("");
  const [autocomplete, setAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);
  const { formData, setFormData } = useContext(CounterContext);
  const kind = props.kind === "current" ? "current" : "planned";

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
      setFormData({
        ...formData,
        [kind]: {
          ...formData[kind],
          points: {
            ...formData[kind].points,
            ...(props.point !== "other"
              ? {
                  [props.point]: place,
                }
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
        }        
      });
    }
  };

  const handleInputClick = () => {
    if (autocomplete !== null) {
      autocomplete.setTypes(["geocode"]);
    }
  };
  const options = {
    types: ["geocode"],
    componentRestrictions: { country: "cz" },
  };

  return (
    <div className="">
      <Autocomplete
        onLoad={(autocomplete) => handleAutocompleteLoad(autocomplete)} // onLoad událost, která se spustí po načtení komponenty Autocomplete
        onPlaceChanged={handlePlaceChanged} // onPlaceChanged událost, která se spustí po výběru místa v Autocomplete
        options={options}
      >
        <Input
          {...props}
          value={inputValue.toString()}
          onChange={(e) => setInputValue(e.target.value)}
          onClick={handleInputClick}
        />
        {/* Propojení vstupu uživatele s hodnotou v stavové proměnné */}
      </Autocomplete>
      {props.point !== "workplace" && <Select {...props} />}
    </div>
  );
}
