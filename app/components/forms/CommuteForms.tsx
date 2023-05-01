"use client";
import React, { useState } from "react";
import Input from "./Input";
import InputGoogle from "./InputGoogle";
import DataList from "./DataList";

function CommuteForms() {
  const inputs: {
    id: number;
    name: string;
    className: string;
    label?: string;
    type: string;
    //value: string;
    placeholder: string;
    required?: boolean;
  }[] = [
    {
      id: 1,
      name: "sleep_duration",
      className: "rounded p-2 mb-2 shadow-xl w-fit",
      label: "Délka spánku",
      type: "time",
      //value: "08:00",
      placeholder: "hh:mm",
    },
    // {
    //   id: 2,
    //   name: "morning_prep_hours",
    //   className: "rounded py-2 my-2 px-3 max-w-xs",
    //   label: "Délka ranní přípravy",
    //   type: "number",
    //   //value: "hh:mm",
    //   placeholder: "hh",
    // },
  ];

  const setValue = (e: any) => {
    //e.preventDefault();
    console.log("target", e);
    console.log("value", e.value);
  };
  // let values, setValues = useState({})

  return (
    <>
      {inputs.map(({ ...inputs }) => (
        <div key={inputs.id} className="">
          <Input {...inputs} />
        </div>
      ))}
      <p className="">Doba ranního odvedení/odvozu dětí</p>
      <div className="flex justify-left gap-x-1">
        <Input
          className="rounded-l p-2 mb-2 shadow-xl w-16 placeholder:text-sm"
          type="number"
          //label="Doba ranního odvedení/odvozu dětí"
          placeholder="hh"
          name="1"
        />
        {/* <p className="">:</p> */}
        <Input
          className="rounded-r p-2 mb-2 shadow-xl w-16 placeholder:text-sm"
          type="number"
          placeholder="mm"
          name="1"
        />
      </div>
      <p className="">Doba ranního odvedení/odvozu dětí</p>
      <div className="flex justify-left gap-x-1">
        <DataList
          className="rounded-l p-2 mb-2 shadow-xl w-16 md:w-20 placeholder:text-sm"
          type="number"
          //label="Doba ranního odvedení/odvozu dětí"
          placeholder="hh"
          name="1"
          list="duration1"
          start={4}
          stop={12}
          step={1}
        />
        {/* <p className="">:</p> */}
        <DataList
          className="rounded-r p-2 mb-2 shadow-xl w-16 md:w-20 placeholder:text-sm"
          type="number"
          placeholder="mm"
          name="2"
          list="duration2"
          start={0}
          stop={45}
          step={15}
        />
      </div>
    </>
  );
}

export default CommuteForms;
