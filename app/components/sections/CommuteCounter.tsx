"use client";
import React, { useContext } from "react";
import { submitForm } from "../forms/SubmitForm";
import CommuteGoogleForms from "../forms/CommuteGoogleForms";
import CounterResult from "../content/CounterResult";
import CommuteForms from "../forms/CommuteForms";
import GoogleMap from "../content/GoogleMap";
import { CounterContext } from "../contexts/CounterContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CommuteCounter() {
  const { formData, setFormData } = useContext(CounterContext);
  const notify = () => toast.warning("Vyplňte prosím všechna pole");

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();
    console.log('event', event)
    await submitForm(formData, notify, setFormData, event);
  };

  return (
    <section id="commute_counter" className="flex justify-center p-2">
      <form
        className="flex flex-col w-full md:w-3/4 lg:w-1/2"
        onSubmit={handleFormSubmit}
      >
        {/* <div className="flex flex-col md:flex-row md:gap-8 ">
          <div>
            <CommuteGoogleForms name="current" />
          </div>
          <div>
            <CommuteGoogleForms name="planned" />
          </div>
          <div>
            <GoogleMap />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-8 "> */}
        {formData.general.detail_level === "quick" ? (
          <CommuteForms />
        ) : formData.general.detail_level === "detailed" ? (
          <p className="text-calcl text-2xl text-center p-6 pt-11">
            Omlouváme se, ale podrobný výpočet zatím není k dispozici
          </p>
        ) : (
          <p className="text-calcl text-2xl text-center p-6 pt-11">
            Nejprve prosím vyberte variantu výpočtu
          </p>
        )}

        {/* </div> */}

        <button
          type="submit"
          className="text-center bg-calcd w-full h-14 px-4 my-8 text-2xl font-semibold rounded-xl border-4 border-calcd text-black hover:text-red-800"
        >
          SUMA SUMÁRUM
        </button>
        <CounterResult />
      </form>

      <ToastContainer />
    </section>
  );
}
