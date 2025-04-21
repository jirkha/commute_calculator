"use client";
import React, { useContext, useRef, useEffect } from "react";
import { CounterContext } from "../contexts/CounterContext";
import { FormData } from "../contexts/CounterContext";

function RadioLevel() {
  const { formData, setFormData } = useContext(CounterContext);

  const handleSelectChange = (value: string) => {
    setFormData((prevData: FormData) => ({
      ...prevData,
      general: {
        ...prevData.general,
        detail_level: value,
      },
    }));
  };

  const active =
    "p-1 md:p-4 text-2xl md:text-4xl font-bold text-center text-black hover:text-red-600 cursor-pointer";
  const not =
    "p-1 md:p-4 text-xl md:text-3xl font-bold text-center text-gray-500 hover:text-gray-400 cursor-pointer";

  return (
      <div className="flex flex-wrap w-full md:w-9/12 items-center justify-center  bg-slate-300 mb-1 md:mb-3 border-4 border-black rounded-3xl">
        <div></div>
        <div
          className={formData.general.detail_level === "quick" ? active : not}
          onClick={(e) => handleSelectChange("quick")}
        >
          <h2>ORIENTAČNÍ VÝPOČET</h2>
        </div>
        <div
          className={
            formData.general.detail_level === "detailed" ? active : not
          }
          onClick={(e) => handleSelectChange("detailed")}
        >
          <h2>PODROBNÝ VÝPOČET</h2>
        </div>
        <div></div>
      </div>
  );
}

export default RadioLevel;
