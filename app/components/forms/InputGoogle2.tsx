"use client";
import React, {useState} from "react";
import { Autocomplete, useJsApiLoader } from "@react-google-maps/api";
import Input from "./Input";

interface InputGoogleProps {
  id: number;
  name: string;
  label: string;
  type: string;
  setValue: any;
  placeholder: string;
}

export default function InputGoogle2(props: InputGoogleProps) {
    const { setValue } = props;
    //const libraries: UseLoadScriptOptions = ["places"];
    const [libraries]:any = useState(["places"]);
    const { isLoaded } = useJsApiLoader({
      //googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      googleMapsApiKey: "AIzaSyASSSv1CppDp1Y5m2KGOTGjaqcOFv7C6SA",
      id: "google-map-script",
      libraries,
    });

      if (!isLoaded) {
        return <h3>Google API se nenačetl</h3>;
      }

    async function googlePlaces(params:any) {
      const googlePlace = new google.maps.DirectionsService()
      console.log("googlePlace", googlePlace);

    } 

  return (
    <div className="">
      <Autocomplete>
        <Input {...props} setValue={setValue} />
      </Autocomplete>
    </div>
  );
}
