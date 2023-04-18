"use client";
import React, {useState} from "react";
import Input from "./Input";
import InputGoogle2 from "./InputGoogle2";
import InputGoogle from "./InputGoogle";

function CommuteForms() {

  const inputs: {
    id: number;
    name: string;
    label: string;
    type: string;
    setValue: any,
    placeholder: string;
  }[] = [
    {
      id: 1,
      name: "sleep_duration",
      label: "Délka spánku",
      type: "number",
      setValue: {},
      placeholder: "",
    },
  ];

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

  const setValue = (e: any) => {
    //e.preventDefault();
    console.log('target', e);
    console.log("value", e.value);

  }
  // let values, setValues = useState({})

  return (
    <>
      <form>
        {inputsGoogle.map(({ ...inputsGoogle }) => (
          <div key={inputsGoogle.id} className="">
            <InputGoogle {...inputsGoogle} setValue={setValue} />
          </div>
        ))}
        {inputs.map(({ ...inputs }) => (
          <div key={inputs.id} className="">
            <Input {...inputs} setValue={setValue} />
          </div>
        ))}
      </form>
    </>
  );
}

export default CommuteForms;
