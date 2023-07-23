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
    <div>
      <select
        name="transport"
        className="rounded p-2 mb-2 shadow-xl max-w-screen-sm"
        onChange={(e) => handleSelectChange(e.target.value)}
        ref={selectRef}
        defaultValue=""
        required
      >
        <option value="">Čím pojedu...</option>
        <option value="TRANSIT">Veřejná doprava</option>
        <option value="DRIVING">Automobil</option>
      </select>
    </div>
  );
}

export default Select;
