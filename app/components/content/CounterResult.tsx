"use client";
import React, { useContext, useState } from "react";
import { CounterContext } from "../contexts/CounterContext";
import { Autocomplete, useJsApiLoader } from "@react-google-maps/api";

function CounterResult() {
  const { formData, setFormData } = useContext(CounterContext);
  console.log("formData", formData);
  return (
    <div>
      {formData.current_residence !== "" && (
        <p>
          Současné bydliště: {formData.current_residence[0]?.formatted_address}
        </p>
      )}
      {formData.planned_residence !== "" && (
        <p>
          Plánované bydliště: {formData.planned_residence[0]?.formatted_address}
        </p>
      )}
      {formData.workplace !== "" && (
        <p>Pracoviště: {formData.workplace[0]?.formatted_address}</p>
      )}

      {formData.connections.public_current_workplace && (
        <>
          <h3>
            <strong>Doba jízd</strong>
          </h3>
          <p>
            VHD Nyní:{" "}
            {
              formData.connections.public_current_workplace.routes[0]?.legs[0]
                ?.duration?.text
            }
          </p>
        </>
      )}
      {formData.connections.public_planned_workplace && (
        <p>
          VHD Poté:{" "}
          {
            formData.connections.public_planned_workplace.routes[0]?.legs[0]
              ?.duration?.text
          }
        </p>
      )}
      {formData.connections.car_current_workplace && (
        <p>
          IAD Nyní:{" "}
          {
            formData.connections.car_current_workplace.routes[0]?.legs[0]
              ?.duration?.text
          }
        </p>
      )}
      {formData.connections.car_planned_workplace && (
        <p>
          IAD Poté:{" "}
          {
            formData.connections.car_planned_workplace.routes[0]?.legs[0]
              ?.duration?.text
          }
        </p>
      )}
    </div>
  );}

export default CounterResult;
