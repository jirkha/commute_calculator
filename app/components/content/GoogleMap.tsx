"use client";
import React, { useContext } from "react";
import {
  GoogleMap as Map,
  MarkerF,
  //DirectionsRenderer,
} from "@react-google-maps/api";
import { CounterContext } from "../contexts/CounterContext";

function GoogleMap() {
  const { formData } = useContext(CounterContext);

  const containerStyle = {
    minWidth: "200px",
    width: "100%",
    height: "210px",
  };

const defaultCenter = { lat: 49.7435, lng: 15.338 };

  const center =
    formData.general.actual_point ||
    formData.current.points.residence?.geometry?.location ||
    defaultCenter;

  const currentResidence = formData.current.points.residence;
  const plannedResidence = formData.planned.points.residence;
  const workplace = formData.planned.points.workplace;
  const otherPoints = formData.current.points.other || {};

  return (
    <>
      <Map
        mapContainerStyle={containerStyle}
        center={center}
        zoom={center === defaultCenter ? 6 : 14}
      >
        {currentResidence?.geometry?.location && (
          <MarkerF
            position={currentResidence.geometry.location}
            label="📍"
            title="Current Residence"
          />
        )}
        {plannedResidence?.geometry?.location && (
          <MarkerF
            position={plannedResidence.geometry.location}
            label="🏠"
            title="Planned Residence"
          />
        )}

        {workplace?.geometry?.location && (
          <MarkerF
            position={workplace.geometry.location}
            label="🏢"
            title="Workplace"
          />
        )}

        {Object.entries(otherPoints).map(
          ([key, place]: [string, any]) =>
            place.geometry?.location && (
              <MarkerF
                key={key}
                position={place.geometry.location}
                label="📍"
                title={`Other point ${key}`}
              />
            )
        )}

        {/* Případné trasy */}
        {/* {Array.isArray(formData.current.connections.connections_list) &&
          formData.current.connections.connections_list.length > 0 &&
          formData.current.connections.connections_list.map((item: any) => (
            <DirectionsRenderer key={item.id} directions={item.response} />
          ))} */}
      </Map>
    </>
  );
}

export default GoogleMap;
