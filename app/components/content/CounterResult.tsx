import React, { useContext, useState } from "react";
import { CounterContext } from "../contexts/CounterContext";

function CounterResult() {
  const { formData, setFormData } = useContext(CounterContext);
  //console.log("formData", formData);
  return (
    <div className=" bg-slate-200 border-black mt-4 p-2 rounded-xl border-4">
      <h1 className="text-xl text-black underline underline-offset-2">
        Současný stav
      </h1>
      {formData.current.points.residence !== "" ? (
        <li className="text-sm text-black">
          Bydliště: {formData.current.points.residence?.formatted_address}
        </li>
      ) : (
        <p className="text-sm text-black">Nejprve zadejte požadované údaje</p>
      )}
      {formData.current.points.workplace !== "" && (
        <li className="text-sm text-black">
          Pracoviště: {formData.current.points.workplace?.formatted_address}
        </li>
      )}
      {formData.current.connections.total_time !== "" && (
        <li className="text-sm text-black">
          Doba jízdy: {formData.current.connections.total_time} hod.
        </li>
      )}

      <h1 className="text-xl text-black underline underline-offset-2 pt-4">
        Plánovaný stav
      </h1>
      {formData.planned.points.residence !== "" ? (
        <li className="text-sm text-black">
          Bydliště: {formData.planned.points.residence?.formatted_address}
        </li>
      ) : (
        <p className="text-sm text-black">Nejprve zadejte požadované údaje</p>
      )}
      {formData.planned.points.workplace !== "" && (
        <li className="text-sm text-black">
          Pracoviště: {formData.planned.points.workplace?.formatted_address}
        </li>
      )}
      {formData.planned.connections.total_time !== "" && (
        <li className="text-sm text-black">
          Doba jízdy: {formData.planned.connections.total_time} hod.
        </li>
      )}
    </div>
  );}

export default CounterResult;
