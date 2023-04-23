"use client";
import React, { useContext } from "react";
import InputGoogle from "./InputGoogle";
import { CounterContext } from "../contexts/CounterContext";
import  {GoogleConnections}  from "../utils/GoogleConnections";

function CommuteGoogleForms() {
  const { formData, setFormData } = useContext(CounterContext);
  const inputsGoogle: {
    id: number;
    name: string;
    label: string;
    type: string;
    placeholder: string;
  }[] = [
    {
      id: 100,
      name: "current_residence",
      label: "Současné bydliště",
      type: "text",
      placeholder: "",
    },
    {
      id: 101,
      name: "planned_residence",
      label: "Plánované bydliště",
      type: "text",
      placeholder: "",
    },
  ];

async function submitForm() {
  if (
    formData.current_residence !== "" &&
    formData.planned_residence !== "" &&
    formData.workplace !== ""
  ) {
    const connections = await GoogleConnections(formData);
    setFormData({
      ...formData,
      connections: connections
      // public_current_workplace: connections[0],
      // public_planned_workplace: connections[1],
      // car_current_workplace: connections[2],
      // car_planned_workplace: connections[3],
    });
    console.log("connections", connections);
    
  } else {
    console.log("nejsou vyplněna všechna pole!");
  };

};

  return (
    <>
      <InputGoogle
        id={100}
        name="current_residence"
        label="Současné bydliště"
        type="text"
        placeholder=""
      />
      <InputGoogle
        id={101}
        name="planned_residence"
        label="Plánované bydliště"
        type="text"
        placeholder=""
      />
      <InputGoogle
        id={102}
        name="workplace"
        label="Pracoviště"
        type="text"
        placeholder=""
      />

      {/* {inputsGoogle.map(({ ...inputsGoogle }) => (
        <div key={inputsGoogle.id} className="">
          <InputGoogle {...inputsGoogle} setValue={setValue} />
        </div>
      ))} */}
      <button
        type="button"
        className="p-2 rounded bg-slate-200 border-2 border-black"
        onClick={submitForm}
      >
        Spočítat délku cesty
      </button>
    </>
  );
}

export default CommuteGoogleForms;
