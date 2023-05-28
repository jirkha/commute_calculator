"use client";
import React, { useContext, useState } from "react";
import { CounterContext } from "../contexts/CounterContext";

function CounterResult() {
  const { formData, setFormData } = useContext(CounterContext);
  //console.log("formData", formData);
  return (
    <div>
      <h1 className="text-xl underline underline-offset-2">Současný stav</h1>
      {formData.current.points.residence !== "" ? (
        <li>
          Bydliště: {formData.current.points.residence?.formatted_address}
        </li>
      ) : (
        <p className="text-sm">Nejprve zadejte požadované údaje</p>
      )}
      {formData.current.points.workplace !== "" && (
        <li>
          Pracoviště: {formData.current.points.workplace?.formatted_address}
        </li>
      )}
      {formData.current.times.travel_time !== "" && (
        <li>Doba jízdy: {formData.current.times.travel_time} hod.</li>
      )}

      <h1 className="text-xl underline underline-offset-2 pt-4">Plánovaný stav</h1>
      {formData.planned.points.residence !== "" ? (
        <li>
          Bydliště: {formData.planned.points.residence?.formatted_address}
        </li>
      ) : (
        <p className="text-sm">Nejprve zadejte požadované údaje</p>
      )}
      {formData.planned.points.workplace !== "" && (
        <li>
          Pracoviště: {formData.planned.points.workplace?.formatted_address}
        </li>
      )}
      {formData.planned.times.travel_time !== "" && (
        <li>Doba jízdy: {formData.planned.times.travel_time} hod.</li>
      )}

      {/* {formData.connections.public_current_workplace && (
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
      )} */}
    </div>
  );}

export default CounterResult;
