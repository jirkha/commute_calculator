"use client"
import React, { useContext } from "react";
import { GoogleMap as Map, MarkerF, DirectionsRenderer } from "@react-google-maps/api";
import { CounterContext } from "../contexts/CounterContext";

function GoogleMap() {
    const { formData } = useContext(CounterContext);
  const containerStyle = {
    width: "600px",
    height: "600px",
  };

  return (
    <div>
      <Map
        mapContainerStyle={containerStyle}
        center={formData.actual_point}
        zoom={15}
      >
        {formData.actual_point !== undefined && (
          <MarkerF position={formData.actual_point} />
        )}
        {formData.connections.car_current_workplace && (
          <DirectionsRenderer
            directions={formData.connections.car_current_workplace}
          />
        )}
      </Map>
    </div>
  );
}

export default GoogleMap;
