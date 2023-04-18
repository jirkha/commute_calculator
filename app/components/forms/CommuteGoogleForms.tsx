"use client";
import React, { useState } from "react";
import Input from "./Input";
import InputGoogle2 from "./InputGoogle2";
import InputGoogle from "./InputGoogle";

function CommuteGoogleForms() {
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

  // const setValue = (e: any) => {
  //   //e.preventDefault();
  //   console.log("target", e);
  //   console.log("value", e.value);
  // };
  // let values, setValues = useState({})

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
    </>
  );
}

export default CommuteGoogleForms;
