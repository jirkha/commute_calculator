import React, { useContext, useState } from "react";
import { CounterContext } from "../contexts/CounterContext";

function CounterResult() {
  const { formData, setFormData } = useContext(CounterContext);
  //console.log("formData", formData);
  return (
    <article className="grid gap-4 grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 rounded-md justify-center">
      <div className="bg-slate-100 border-black mt-4 p-4 rounded-xl border-4">
        <h1 className="text-2xl text-calcl font-bold">SOUČASNÝ STAV</h1>
        <ul className="grid grid-cols-4 gap-x-2">
          <li className="text-sm text-black font-bold">Bydliště</li>
          <li className="text-sm text-black col-span-3">
            {formData.current.points.residence !== ""
              ? formData.current.points.residence?.formatted_address
              : "Nejprve zadejte požadované údaje"}
          </li>

          {formData.current.points.workplace !== "" && (
            <>
              <li className="text-sm text-black font-bold">Pracoviště</li>
              <li className="text-sm text-black col-span-3">
                {formData.current.points.workplace?.formatted_address}
              </li>
            </>
          )}

          {formData.current.connections.total_time !== "" && (
            <>
              <li className="text-sm text-black font-bold">Doba jízdy</li>
              <li className="text-sm text-black col-span-3">
                {formData.current.connections.total_time} hod.
              </li>
            </>
          )}
        </ul>
      </div>

      <div className="bg-slate-100 border-black sm:mt-4 p-4 rounded-xl border-4">
        <h1 className="text-2xl text-calcl font-bold">PLÁNOVANÝ STAV</h1>
        <ul className="grid grid-cols-4 gap-x-2">
          <li className="text-sm text-black font-bold">Bydliště</li>
          <li className="text-sm text-black col-span-3">
            {formData.planned.points.residence !== ""
              ? formData.planned.points.residence?.formatted_address
              : "Nejprve zadejte požadované údaje"}
          </li>

          {formData.planned.points.workplace !== "" && (
            <>
              <li className="text-sm text-black font-bold">Pracoviště</li>
              <li className="text-sm text-black col-span-3">
                {formData.planned.points.workplace?.formatted_address}
              </li>
            </>
          )}

          {formData.planned.connections.total_time !== "" && (
            <>
              <li className="text-sm text-black font-bold">Doba jízdy</li>
              <li className="text-sm text-black col-span-3">
                {formData.planned.connections.total_time} hod.
              </li>
            </>
          )}
        </ul>
      </div>
    </article>
  );}

export default CounterResult;
