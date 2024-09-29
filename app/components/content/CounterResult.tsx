import React, { useContext, useState } from "react";
import { CounterContext } from "../contexts/CounterContext";

function CounterResult() {
  const { formData, setFormData } = useContext(CounterContext);
  //console.log("formData", formData);
  return (
    <div className=" border-yellow-100 p-2 rounded-xl border-4">
      <h1 className="text-xl text-yellow-100 underline underline-offset-2">
        Současný stav
      </h1>
      {formData.current.points.residence !== "" ? (
        <li className="text-sm text-yellow-100">
          Bydliště: {formData.current.points.residence?.formatted_address}
        </li>
      ) : (
        <p className="text-sm text-yellow-100">
          Nejprve zadejte požadované údaje
        </p>
      )}
      {formData.current.points.workplace !== "" && (
        <li className="text-sm text-yellow-100">
          Pracoviště: {formData.current.points.workplace?.formatted_address}
        </li>
      )}
      {formData.current.connections.total_time !== "" && (
        <li className="text-sm text-yellow-100">
          Doba jízdy: {formData.current.connections.total_time} hod.
        </li>
      )}

      <h1 className="text-xl text-yellow-100 underline underline-offset-2 pt-4">
        Plánovaný stav
      </h1>
      {formData.planned.points.residence !== "" ? (
        <li className="text-sm text-yellow-100">
          Bydliště: {formData.planned.points.residence?.formatted_address}
        </li>
      ) : (
        <p className="text-sm text-yellow-100">
          Nejprve zadejte požadované údaje
        </p>
      )}
      {formData.planned.points.workplace !== "" && (
        <li className="text-sm text-yellow-100">
          Pracoviště: {formData.planned.points.workplace?.formatted_address}
        </li>
      )}
      {formData.planned.connections.total_time !== "" && (
        <li className="text-sm text-yellow-100">
          Doba jízdy: {formData.planned.connections.total_time} hod.
        </li>
      )}
    </div>
  );}

export default CounterResult;
