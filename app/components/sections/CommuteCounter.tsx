import React from "react";
import CommuteGoogleForms from "../forms/CommuteGoogleForms";
import { CounterContextProvider } from "../contexts/CounterContext";
import CounterResult from "../content/CounterResult";

export default function CommuteCounter() {


  return (
    <section id="commute_counter" className="">
      <CounterContextProvider>
        <form>
          <CommuteGoogleForms />
          {/* <CommuteForms /> */}
        </form>
        <CounterResult />
      </CounterContextProvider>
    </section>
  );
}
