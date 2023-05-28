"use client";
import React, { useContext, useState } from "react";
import { submitForm } from "../forms/SubmitForm";
import GoogleMapsLoader from "../utils/GoogleMapsLoader";
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

      const handleFormSubmit = async (event) => {
        event.preventDefault();
        await submitForm(formData, notify, setFormData, event);

      };


  return (
    <section id="commute_counter" className="">
      <GoogleMapsLoader>
        <form onSubmit={handleFormSubmit}>
          <div className="flex flex-col md:flex-row md:gap-8 ">
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

          <button
            type="submit"
            className="px-3 py-2 my-2 rounded shadow-xl text-slate-300 bg-[#041634] border-2 border-black"
          >
            Spočítat délku cesty
          </button>
        </form>
        <div className="flex flex-col md:flex-row md:gap-8 ">
          <CounterResult />
          <CommuteForms />
        </div>
      </GoogleMapsLoader>

      <ToastContainer />
    </section>
  );
}
