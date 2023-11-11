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
    <select
      name="transport"
      className="text-center bg-black hover:bg-slate-800 w-full h-14 px-4 text-xl font-semibold rounded-xl border-4 border-calcl text-calcd mb-2"
      onChange={(e) => handleSelectChange(e.target.value)}
      ref={selectRef}
      defaultValue=""
      required
    >
      <option value="" className="">
        {kind === "current"
          ? "JAK JEZDÍM DO PRÁCE"
          : "JAK BUDU JEZDIT DO PRÁCE"}
      </option>
      <option value="TRANSIT">Veřejná doprava</option>
      <option value="DRIVING">Automobil</option>
    </select>
  );
}

export default Select;
