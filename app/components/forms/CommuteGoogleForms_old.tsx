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
        className="rounded p-2 mb-2 shadow-xl max-w-screen-sm"
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
        name={`${counterType}.points.residence`}
        kind={counterType}
        point="residence"
        label={name === "current" ? "Současné bydliště" : "Plánované bydliště"}
        className="bg-black rounded-xl border-4 border-calcl text-calcl p-2 mb-2 shadow-xl max-w-screen-sm"
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
        label={
          name === "current" ? "Současné pracoviště" : "Plánované pracoviště"
        }
        className="bg-black rounded-xl border-4 border-calcl text-calcl p-2 mb-2 shadow-xl max-w-screen-sm"
        type="text"
        placeholder=""
        required
      />

      <button
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
      </button>
      {/* {inputsGoogle.map(({ ...inputsGoogle }) => (
        <div key={inputsGoogle.id} className="">
          <InputGoogle {...inputsGoogle} setValue={setValue} />
        </div>
      ))} */}
    </>
  );
}

export default CommuteGoogleForms;
