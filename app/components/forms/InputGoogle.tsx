"use client";
import React, {useContext, useState} from "react";
import { Autocomplete } from "@react-google-maps/api";
import Input from "./Input";
import { CounterContext } from "../contexts/CounterContext";
import GoogleMapsLoader from "../utils/GoogleMapsLoader";

interface InputGoogleProps {
  id: number;
  name: string;
  label: string;
  type: string;
  placeholder: string;
}

export default function InputGoogle(props: InputGoogleProps) {

    const [inputValue, setInputValue] = useState("");
    const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);
    const { formData, setFormData } = useContext(CounterContext);

    const handleAutocompleteLoad = (
    autocomplete: google.maps.places.Autocomplete
  ) => {
    setAutocomplete(autocomplete);
  };

    const handlePlaceChanged = () => {
      const place = autocomplete.getPlace(); // Získání informací o vybraném místě z Autocomplete
      const inputValue = place; // Získání hodnoty z Autocomplete
      setInputValue(inputValue); // Nastavení hodnoty do stavové proměnné
      setFormData({
        ...formData,
        [props.name]: [inputValue],
      });
      console.log("place", place);
    };

      const options = {
        types: ["geocode"],
        componentRestrictions: { country: "cz" },
      };

  return (
    <div className="">
      <GoogleMapsLoader>
        <Autocomplete
        onLoad={(autocomplete) => handleAutocompleteLoad(autocomplete)} // onLoad událost, která se spustí po načtení komponenty Autocomplete
        onPlaceChanged={handlePlaceChanged} // onPlaceChanged událost, která se spustí po výběru místa v Autocomplete
        options={options}
      >
        <Input
          value={inputValue.formatted_address}
          onChange={(e) => setInputValue(e.target.value)}
          {...props}
        />
        {/* Propojení vstupu uživatele s hodnotou v stavové proměnné */}
      </Autocomplete>
      </GoogleMapsLoader>
      
    </div>
  );
}
