import React, { useContext, useRef, useEffect } from "react";
import { CounterContext } from "../contexts/CounterContext";
import { InputGoogleProps } from "./InputGoogle";

function Select(props: InputGoogleProps) {
  const { formData, setFormData } = useContext(CounterContext);
  const kind = props.kind === "current" ? "current" : "planned";
  const selectRef = useRef<HTMLSelectElement>(null);

   const handleSelectChange = (value: string) => {
     const newModes = {
       ...(kind === "current" ? formData.current.connections.modes : {}),
       ...(kind === "planned" ? formData.planned.connections.modes : {}),
       ...(props.point !== "other"
         ? { [props.point]: value }
         : { [props.id]: value }),
     };

     setFormData((prevData) => ({
       ...prevData,
       [kind]: {
         ...prevData[kind],
         connections: {
           ...prevData[kind].connections,
           modes: newModes,
         },
       },
     }));
   };

   useEffect(() => {
     handleSelectChange("");
   }, []); 

  return (
    <div className="relative w-full">
      <select
        name="transport"
        className="text-center bg-calcl hover:bg-calcl/50 w-full h-14 px-4 text-xl font-bold rounded-xl border-4 border-black text-black mb-2 appearance-none pr-16" 
        onChange={(e) => handleSelectChange(e.target.value)}
        ref={selectRef}
        defaultValue=""
        required
      >
        <option value="">
          {kind === "current"
            ? "JAK JEZDÍM DO PRÁCE"
            : "JAK BUDU JEZDIT DO PRÁCE"}
        </option>
        <option value="TRANSIT">Veřejná doprava</option>
        <option value="DRIVING">Automobil</option>
      </select>
      {/* Ikona pro rozbalení */}
      <div className="absolute inset-y-0 right-2 flex items-center justify-center pointer-events-none">
        <svg
          className="w-16 h-16 text-black"
          fill="currentColor" // Změněno na 'currentColor' pro plné vybarvení
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            d="M7 10l5 5 5-5H7z" // Smazána stroke a strokeWidth, aby se použil pouze fill
          />
        </svg>
      </div>
    </div>
  );
}

export default Select;
