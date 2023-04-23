/* global google */ 
"use client";
import React, { useState } from "react";
import { useLoadScript } from "@react-google-maps/api";

interface Props {
  children: React.ReactNode;
}


const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const GoogleMapsLoader: React.FC<Props> = ({ children }) => {
  const [libraries]:any = useState(["places"]);
  
  if (googleMapsApiKey === undefined) {
    return <h3>Chyba při načítání Google Maps API</h3>;
  }

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey,
    libraries,
  });

  if (loadError) {
    return <h3>Chyba při načítání Google Maps API</h3>;
  }

  return isLoaded ? (
    <>{children}</>
  ) : (
    <h3>Prostředí Google API se načítá...</h3>
  );
};

export default GoogleMapsLoader;
