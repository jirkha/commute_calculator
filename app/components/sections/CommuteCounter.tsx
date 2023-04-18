"use client";
import React, { useState, createContext } from "react";
import CommuteForms from "../forms/CommuteForms";
import CommuteGoogleForms from "../forms/CommuteGoogleForms";
import { CounterContextProvider } from "../context/CounterContext";

export const CounterContext = createContext({});

const [formData, setFormData] = useState({
  current_residence: "",
  planned_residence: "",
  workplace: "",
});

export default function CommuteCounter() {
  return (
    <section id="commute_counter" className="">
      <CounterContext.Provider value={{ formData, setFormData }}>
        <form>
          <CommuteGoogleForms />
          {/* <CommuteForms /> */}
        </form>
      </CounterContext.Provider>
    </section>
  );
}
