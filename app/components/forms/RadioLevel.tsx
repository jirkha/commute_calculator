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

  return (
    <div>
      <form>
        <fieldset className="border-2 border-black">
          <legend className="text-xl font-bold">
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
            <label htmlFor="choice1" className="text-xl">
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
            />
            <label htmlFor="choice2" className="text-xl">
              Podrobně
            </label>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default RadioLevel;
