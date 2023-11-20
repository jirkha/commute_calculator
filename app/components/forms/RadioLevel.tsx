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
    "p-4 text-5xl font-bold text-center text-calcd hover:text-red-600 cursor-pointer";
  const not =
    "p-4 text-5xl font-bold text-center text-gray-600 hover:text-gray-500 cursor-pointer";

  return (
    <div>
      {/* <form>
        <fieldset className="p-2 rounded-md border-2 border-black bg-calcl roun">
          <legend className="mx-2 pt-6 text-xl font-bold">
            Způsob výpočtu volného času
          </legend>
          <div>
            <input
              type="radio"
              id="choice1"
              name="level"
              value="quick"
              onChange={(e) => handleSelectChange(e.target.value)}
              defaultChecked={formData.general.detail_level === "quick"}
            />
            <label htmlFor="choice1" className="mx-2 text-xl">
              Orientačně
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="choice2"
              name="level"
              value="detailed"
              onChange={(e) => handleSelectChange(e.target.value)}
              defaultChecked={formData.general.detail_level === "detailed"}
              disabled
            />
            <label htmlFor="choice2" className="mx-2 text-xl">
              Podrobně
            </label>
          </div>
        </fieldset>
      </form> */}
      <div className="flex flex-wrap px-1 lg:px-24 items-center justify-center">
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
    </div>
  );
}

export default RadioLevel;
