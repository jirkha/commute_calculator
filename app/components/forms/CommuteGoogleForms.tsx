"use client";
import React, { useContext } from "react";
import InputGoogle from "./InputGoogle";
import { CounterContext } from "../contexts/CounterContext";


function CommuteGoogleForms({ name }: { [key: string]: string }) {
  const { formData, setFormData } = useContext(CounterContext);
 
  const counterType = name === "current" ? "current" : "planned";

  const setInput = (increment: number) => {
    const counter = formData[counterType].points.counter + increment;
    if (increment !== -1) {
      setFormData({
      ...formData,
      [counterType]: {
        ...formData[counterType],
        points: {
          ...formData[counterType].points,
          counter: counter,
        },
      },
    });
    } else {
      const updatedOther = { ...formData[counterType].points.other };
      delete updatedOther[counter];
      setFormData({
        ...formData,
        [counterType]: {
          ...formData[counterType],
          points: {
            ...formData[counterType].points,
            counter: counter,
            other: updatedOther,
          },
        },
      });
    }

    
  };

  const inputs = [];
  for (let i = 0; i < formData[counterType].points.counter; i++) {
    inputs.push(
      <InputGoogle
        key={i}
        id={i}
        name={`${counterType}.points.other`}
        kind={counterType}
        point="other"
        label={`Bod na cestě ${i + 1}`}
        className="flex flex-col items-center bg-black w-full"
        classNameInputDiv="flex flex-col w-full"
        classNameInput="bg-calcl w-full rounded-xl text-center font-bold p-2 mb-2 shadow-xl w-full h-14"
        type="text"
        placeholder=""
        required
      />
    );
  }

  return (
    <>
      <InputGoogle
        id={100}
        name={`current.points.residence`}
        kind="current"
        point="residence"
        label="KDE BYDLÍM TEĎ"
        className="flex flex-col items-center bg-black w-full"
        classNameInputDiv="flex flex-col w-full"
        classNameInput="bg-calcl w-full rounded-xl text-center font-bold p-2 mb-2 shadow-xl w-full h-14"
        type="text"
        placeholder=""
        required
      />
      <InputGoogle
        id={100}
        name={`planned.points.residence`}
        kind="planned"
        point="residence"
        label="KAM SE CHCI STĚHOVAT"
        className="flex flex-col items-center bg-black w-full"
        classNameInputDiv="flex flex-col w-full"
        classNameInput="bg-calcl w-full rounded-xl text-center font-bold p-2 mb-2 shadow-xl w-full h-14"
        type="text"
        placeholder=""
        required
      />
      {inputs}
      <InputGoogle
        id={101}
        name={`${counterType}.points.workplace`}
        kind={counterType}
        point="workplace"
        label="KDE PRACUJI"
        className="flex flex-col items-center bg-black w-full"
        classNameInputDiv="flex flex-col w-full"
        classNameInput="bg-calcl w-full rounded-xl text-center font-bold p-2 mb-2 shadow-xl w-full h-14"
        type="text"
        placeholder=""
        required
      />

      {/* <button
        type="button"
        className="px-3 py-2 my-2 rounded shadow-xl bg-slate-100 disabled:bg-slate-300 disabled:text-slate-400 border-2 border-black"
        onClick={() => setInput(-1)}
        disabled={formData[counterType].points.counter < 1 ? true : false}
      >
        Odebrat bod
      </button>
      <button
        type="button"
        className="px-3 py-2 my-2 rounded shadow-xl bg-slate-100 border-2 border-black"
        onClick={() => setInput(1)}
      >
        Přidat další bod
      </button> */}
      {/* {inputsGoogle.map(({ ...inputsGoogle }) => (
        <div key={inputsGoogle.id} className="">
          <InputGoogle {...inputsGoogle} setValue={setValue} />
        </div>
      ))} */}
    </>
  );
}

export default CommuteGoogleForms;
