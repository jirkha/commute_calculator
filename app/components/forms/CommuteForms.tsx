"use client";
import React, { useState } from "react";
import Input from "./Input";
import DataList from "./DataList";

function CommuteForms() {
  const inputs: {
    id: number;
    name: string;
    className: string;
    label?: string;
    type: string;
    //value: string;
    placeholder?: string;
    required?: boolean;
  }[] = [
    {
      id: 1,
      name: "start_work",
      className: "rounded p-2 mb-2 shadow-xl w-fit",
      label: "Začátek pracovní doby",
      type: "time",
      //value: "08:00",
    },
    {
      id: 2,
      name: "end_work",
      className: "rounded p-2 mb-2 shadow-xl w-fit",
      label: "Konec pracovní doby",
      type: "time",
      //placeholder: "hh:mm",
    },
    {
      id: 3,
      name: "sleep_time",
      className: "rounded p-2 mb-2 shadow-xl w-fit",
      label: "Čas večerky",
      type: "time",
    },
    {
      id: 4,
      name: "wakeup_time",
      className: "rounded p-2 mb-2 shadow-xl w-fit",
      label: "Čas buzení",
      type: "time",
    },
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
      <p className="">Doba ranní přípravy</p>
      <div className="flex justify-left gap-x-1">
        <Input
          className="rounded-l p-2 mb-2 shadow-xl w-16 placeholder:text-sm"
          type="number"
          //label="Doba ranního odvedení/odvozu dětí"
          placeholder="hh"
          name="morning_hours"
        />
        {/* <p className="">:</p> */}
        <Input
          className="rounded-r p-2 mb-2 shadow-xl w-16 placeholder:text-sm"
          type="number"
          placeholder="mm"
          name="morning_minutes"
        />
      </div>
      {/* <p className="">Doba ranního odvedení/odvozu dětí</p>
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
      </div> */}
    </>
  );
}

export default CommuteForms;
