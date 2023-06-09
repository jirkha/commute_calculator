"use client";
import React, { useContext, useState } from "react";
import CommuteGoogleForms from "../forms/CommuteGoogleForms";
import CounterResult from "../content/CounterResult";
import CommuteForms from "../forms/CommuteForms";
import GoogleMap from "../content/GoogleMap";
import { CounterContext } from "../contexts/CounterContext";


export default function DetailedCommuteCounter() {
  const { formData, setFormData } = useContext(CounterContext);

  return (
    <section id="commute_counter" className="">
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
      <div className="flex flex-col md:flex-row md:gap-8 ">
        <CounterResult />
        <CommuteForms />
      </div>
    </section>
  );
}
