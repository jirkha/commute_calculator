"use client";
import React, { useState } from "react";
import Input from "./Input";
import InputGoogle from "./InputGoogle";

function CommuteForms() {
  // const inputs: {
  //   id: number;
  //   name: string;
  //   className: string;
  //   label?: string;
  //   type: string;
  //   //value: string;
  //   placeholder?: string;
  //   required?: boolean;
  // }[] = [
  //   {
  //     id: 1,
  //     name: "start_work",
  //     className: "rounded p-2 mb-2 shadow-xl w-fit",
  //     label: "Začátek pracovní doby",
  //     type: "time",
  //     //value: "08:00",
  //   },
  //   {
  //     id: 2,
  //     name: "end_work",
  //     className: "rounded p-2 mb-2 shadow-xl w-fit",
  //     label: "Konec pracovní doby",
  //     type: "time",
  //     //placeholder: "hh:mm",
  //   },
  //   {
  //     id: 3,
  //     name: "sleep_time",
  //     className: "rounded p-2 mb-2 shadow-xl w-fit",
  //     label: "Čas večerky",
  //     type: "time",
  //   },
  //   {
  //     id: 4,
  //     name: "wakeup_time",
  //     className: "rounded p-2 mb-2 shadow-xl w-fit",
  //     label: "Čas buzení",
  //     type: "time",
  //   },
  // ];

  const setValue = (e: any) => {
    //e.preventDefault();
    console.log("target", e);
    console.log("value", e.value);
  };

  // *** INPUTS GOOGLE *** //
  const className = "flex flex-col items-center bg-black w-full";
  const classNameInputDivGoogle = "flex flex-col w-full";
  const classNameInputGoogle =
    "bg-black hover:bg-slate-800 w-full rounded-xl border-4 border-calcl text-calcd text-center p-2 mb-2 shadow-xl w-full h-14";

  // *** INPUTS *** //
  const classNameInput =
    "bg-black hover:bg-slate-800 md:px-16 py-2 m-2 text-calcd max-h-fit z-0";

  const classNameInputDiv =
    "flex justify-center w-full rounded-xl border-4 border-calcl mb-2 h-14 shadow-xl h-20 sm:h-16 z-10";
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex flex-col w-full items-center pt-4">
          <InputGoogle
            id={100}
            name={`current.points.residence`}
            kind="current"
            point="residence"
            label="KDE BYDLÍM TEĎ"
            className={className}
            classNameInputDiv={classNameInputDivGoogle}
            classNameInput={classNameInputGoogle}
            type="text"
            placeholder=""
            required
          />
        </div>
        <div className="flex justify-center pt-4">
          <InputGoogle
            id={100}
            name={`planned.points.residence`}
            kind="planned"
            point="residence"
            label="KAM SE CHCI STĚHOVAT"
            className={className}
            classNameInputDiv={classNameInputDivGoogle}
            classNameInput={classNameInputGoogle}
            type="text"
            placeholder=""
            required
          />
        </div>
        <div className="flex justify-center pt-4">
          <InputGoogle
            id={101}
            name={`current.points.workplace`}
            kind="current"
            point="workplace"
            label="KDE PRACUJI"
            className={className}
            classNameInputDiv={classNameInputDivGoogle}
            classNameInput={classNameInputGoogle}
            type="text"
            placeholder=""
            required
          />
        </div>

        <div className={className}>
          <p className="text-2xl font-semibold text-calcd pt-4">
            ZAČÁTEK A KONEC PRÁCE
          </p>
          <div className={classNameInputDiv}>
            <Input
              classNameInput={classNameInput}
              type="time"
              placeholder="hh"
              name="start_work"
            />
            <Input
              classNameInput={classNameInput}
              type="time"
              placeholder="hh"
              name="end_work"
            />
          </div>
        </div>
        <div className={className}>
          <p className="text-2xl font-semibold text-calcd pt-4">
            ČAS VEČERKY A BUDÍČKU
          </p>
          <div className={classNameInputDiv}>
            <Input
              classNameInput={classNameInput}
              type="time"
              placeholder="hh"
              name="sleep_time"
            />
            <Input
              classNameInput={classNameInput}
              type="time"
              placeholder="hh"
              name="wakeup_time"
            />
          </div>
        </div>

        {/* {inputs.map(({ ...inputs }) => (
        <div key={inputs.id} className="">
          <Input {...inputs} />
        </div>
      ))} */}
        {/* <p className="text-white">Doba ranní přípravy</p>
      <div className="flex justify-left gap-x-1">
        <Input
          className="rounded-l p-2 mb-2 shadow-xl w-16 placeholder:text-sm"
          type="number"
          //label="Doba ranního odvedení/odvozu dětí"
          placeholder="hh"
          name="morning_hours"
        />
        <Input
          className="rounded-r p-2 mb-2 shadow-xl w-16 placeholder:text-sm"
          type="number"
          placeholder="mm"
          name="morning_minutes"
        />
      </div> */}
      </div>
    </>
  );
}

export default CommuteForms;
