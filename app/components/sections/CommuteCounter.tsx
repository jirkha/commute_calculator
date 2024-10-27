"use client";
import React, { useContext } from "react";
import { submitForm } from "../forms/SubmitForm";
import CommuteGoogleForms from "../forms/CommuteGoogleForms";
import CounterResult from "../content/CounterResult";
import CommuteForms from "../forms/CommuteForms";
// import GoogleMap from "../content/GoogleMap";
import { CounterContext } from "../contexts/CounterContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CommuteCounter() {
  const { formData, setFormData } = useContext(CounterContext);
  const notify = () => toast.warning("Vyplňte prosím všechna pole");

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();
    //console.log('event', event)
    await submitForm(formData, notify, setFormData, event);
    setTimeout(() => {
      const targetElement = document.getElementById("result");
      (targetElement as any).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }, 200);
  };

  return (
    <section id="commute_counter" className="flex justify-center p-2  md:w-1/2">
      <form className="flex flex-col w-full " onSubmit={handleFormSubmit}>
        {/* <div className="flex flex-col md:flex-row md:gap-8 ">
          <div>
            <GoogleMap />
          </div>
        </div> */}
        {/* <div className="flex flex-col md:flex-row md:gap-8 "> */}
        {formData.general.detail_level === "quick" ? (
          <>
            <CommuteForms />
            <button
              type="submit"
              className="bg-black text-center w-full h-14 px-4 my-8 text-2xl font-bold rounded-xl border-4 border-black text-white"
            >
              SUMA SUMÁRUM
            </button>
          </>
        ) : formData.general.detail_level === "detailed" ? (
          <div className=" bg-calcd rounded-3xl md:m-8">
            <p className="text-black text-2xl md:text-4xl text-center p-2">
              Omlouváme se, ale podrobný výpočet zatím není k dispozici.
            </p>
            <p className="text-black text-xl md:text-3xl text-center p-2">
              Zvolte prosím ORIENTANČÍ VÝPOČET.
            </p>
          </div>
        ) : (
          <p className="text-black text-2xl text-center p-6 pt-11">
            Nejprve prosím vyberte variantu výpočtu
          </p>
        )}

        {/* </div> */}
      </form>

      <ToastContainer />
    </section>
  );
}
