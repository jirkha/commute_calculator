"use client";
import React, {useContext, useState} from "react";
import { Autocomplete, useJsApiLoader } from "@react-google-maps/api";
import Input from "./Input";
import { CounterContext } from "../sections/CommuteCounter";

interface InputGoogleProps {
  id: number;
  name: string;
  label: string;
  type: string;
  placeholder: string;
}

export default function InputGoogle(props: InputGoogleProps) {
    
    //const libraries: UseLoadScriptOptions = ["places"];
    const [libraries]:any = useState(["places"]);
    const { isLoaded } = useJsApiLoader({
      //googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      id: "google-map-script",
      libraries,
    });

    const [inputValue, setInputValue] = useState("");
    const [autocomplete, setAutocomplete] = useState(null);
    const { formData, setFormData } = useContext(CounterContext);


      if (!isLoaded) {
        return <h3>Prostředí Google API se načítá</h3>;
      }

    // async function googlePlaces() {
    //   const googlePlace = new google.maps.DirectionsService()
    //   console.log("currentResidence", currentResidence);
    //   const results = await googlePlace.route({
    //     origin: currentResidence,
    //     destination: plannedResidence,
    //     travelMode: google.maps.TravelMode.TRANSIT
    // });
    //   console.log("results",results)
    // } 

  const handleAutocompleteLoad = (
    autocomplete: google.maps.places.Autocomplete
  ) => {
    setAutocomplete(autocomplete);
  };

    const handlePlaceChanged = () => {
      const place = autocomplete.getPlace(); // Získání informací o vybraném místě z Autocomplete
      const inputValue = place.formatted_address; // Získání hodnoty z Autocomplete
      setInputValue(inputValue); // Nastavení hodnoty do stavové proměnné

      console.log("place", place);
      console.log("inputValue", inputValue);
    };

  return (
    <div className="">
      {/* <Autocomplete
        onLoad={(autocomplete) => handleAutocompleteLoad(autocomplete)} // onLoad událost, která se spustí po načtení komponenty Autocomplete
        onPlaceChanged={handlePlaceChanged} // onPlaceChanged událost, která se spustí po výběru místa v Autocomplete
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // Propojení vstupu uživatele s hodnotou v stavové proměnné
        />
      </Autocomplete> */}

      <Autocomplete
        onLoad={(autocomplete) => handleAutocompleteLoad(autocomplete)} // onLoad událost, která se spustí po načtení komponenty Autocomplete
        onPlaceChanged={handlePlaceChanged} // onPlaceChanged událost, která se spustí po výběru místa v Autocomplete
      >
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          {...props}
        />
        {/* Propojení vstupu uživatele s hodnotou v stavové proměnné */}
      </Autocomplete>
    </div>
  );
}
