"use client";
import React, { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputGoogle from "./InputGoogle";
import { CounterContext } from "../contexts/CounterContext";
import  {GoogleConnections}  from "../utils/GoogleConnections";

function CommuteGoogleForms() {
  const { formData, setFormData } = useContext(CounterContext);
  const notify = () => toast.warning("Vyplňte prosím všechna pole");
  // const inputsGoogle: {
  //   id: number;
  //   name: string;
  //   label: string;
  //   type: string;
  //   placeholder: string;
  // }[] = [
  //   {
  //     id: 100,
  //     name: "current_residence",
  //     label: "Současné bydliště",
  //     type: "text",
  //     placeholder: "",
  //   },
  //   {
  //     id: 101,
  //     name: "planned_residence",
  //     label: "Plánované bydliště",
  //     type: "text",
  //     placeholder: "",
  //   },
  // ];

async function submitForm() {
  if (
    formData.points.current_residence !== "" &&
    formData.points.planned_residence !== "" &&
    formData.points.workplace !== ""
  ) {
    const connections = await GoogleConnections(formData);
    setFormData({
      ...formData,
      connections: connections,
      // public_current_workplace: connections[0],
      // public_planned_workplace: connections[1],
      // car_current_workplace: connections[2],
      // car_planned_workplace: connections[3],
    });
    console.log("connections", connections);
  } else {
    console.warn("nejsou vyplněna všechna pole!");
    notify();
  };

};

  return (
    <>
      <InputGoogle
        id={100}
        name="current_residence"
        label="Současné bydliště"
        className="rounded p-2 mb-2 shadow-xl max-w-screen-sm"
        type="text"
        placeholder=""
        required
      />
      <InputGoogle
        id={101}
        name="planned_residence"
        label="Plánované bydliště"
        className="rounded p-2 mb-2 shadow-xl max-w-screen-sm"
        type="text"
        placeholder=""
        required
      />
      <InputGoogle
        id={102}
        name="workplace"
        label="Pracoviště"
        className="rounded p-2 mb-2 shadow-xl max-w-screen-sm"
        type="text"
        placeholder=""
        required
      />

      {/* {inputsGoogle.map(({ ...inputsGoogle }) => (
        <div key={inputsGoogle.id} className="">
          <InputGoogle {...inputsGoogle} setValue={setValue} />
        </div>
      ))} */}
      <button
        type="button"
        className="px-3 py-2 my-2 rounded shadow-xl bg-slate-100 border-2 border-black"
        onClick={submitForm}
      >
        Spočítat délku cesty
      </button>
      <ToastContainer />
    </>
  );
}

export default CommuteGoogleForms;
