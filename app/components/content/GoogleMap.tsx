"use client";
import React, { useContext, useState, useEffect } from "react";
import {
  GoogleMap as Map,
  MarkerF,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { CounterContext } from "../contexts/CounterContext";

function GoogleMap() {
  const { formData } = useContext(CounterContext);


  const containerStyle = {
    width: "400px",
    height: "300px",
    border: "1px solid black",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)",
  };

  return (
    <div>
      <Map
        mapContainerStyle={containerStyle}
        center={
          formData.general.actual_point || {
            lat: 50.0879,
            lng: 14.4205,
          }
        }
        zoom={15}
      >
        {formData.general.actual_point !== undefined && (
          <MarkerF position={formData.general.actual_point} />
        )}

        {formData.current.connections.connections_list.length > 0 &&
          formData.current.connections.connections_list.map((item: any) => {
            return (
              //console.log('item.response',item.id, item.response),
              <DirectionsRenderer
                key={item.id} // Přidejte unikátní klíč pro každý prvek
                directions={item.response}
                //onDirectionsChanged={handleFormSubmit}
              />
            );
          })}

        {/* <DirectionsRenderer
            directions={directions}
            options={{
              polylineOptions: {
                strokeColor: "red", // Změna barvy trasy na červenou
                strokeWeight: 4, // Nastavení tloušťky trasy
              },
            }}
          /> */}
      </Map>
    </div>
  );
}

export default GoogleMap;
