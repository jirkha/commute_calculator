/* global google */ 
"use client";
import React, { useState } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import { SiGooglestreetview } from "react-icons/si";

interface Props {
  children: React.ReactNode;
}


const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const GoogleMapsLoader: React.FC<Props> = ({ children }) => {
  const [libraries]:any = useState(["places"]);
  
  if (googleMapsApiKey === undefined) {
        return (
          <div className="flex flex-col justify-center place-items-center bg-black mt-12">
            <h1 className="text-calcd text-4xl">
              Omlouváme se, ale vyskytla se chyba na straně Google Maps API
            </h1>
            <SiGooglestreetview color="#EB5671" size={70} />
          </div>
        );
  }

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey,
    libraries,
  });

  if (loadError) {
    return (
      <div className="flex flex-col justify-center place-items-center bg-black mt-12">
        <h1 className="text-calcd text-4xl">
          Omlouváme se, ale vyskytla se chyba na straně Google Maps API
        </h1>
        <SiGooglestreetview color="#EB5671" size={70} />
      </div>
    );
  }

  return isLoaded ? (
    <>{children}</>
  ) : (
    <div className="flex flex-col justify-center place-items-center bg-black mt-12">
      <h1 className="text-calcl text-4xl">
        Chvilku strpení prosím, načítá se prostředí Google API ...
      </h1>
      <SiGooglestreetview color="#4DCBF3" size={70} />
    </div>
  );
};

export default GoogleMapsLoader;
