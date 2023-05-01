import React from "react";
import GoogleMapsLoader from "../utils/GoogleMapsLoader";
import CommuteGoogleForms from "../forms/CommuteGoogleForms";
import { CounterContextProvider } from "../contexts/CounterContext";
import CounterResult from "../content/CounterResult";
import CommuteForms from "../forms/CommuteForms";
import GoogleMap from "../content/GoogleMap";

export default function CommuteCounter() {
  return (
    <section id="commute_counter" className="">
      <CounterContextProvider>
        <GoogleMapsLoader>
          <form>
            <CommuteGoogleForms />
            <CommuteForms />
          </form>
          <GoogleMap />
          <CounterResult />
        </GoogleMapsLoader>
      </CounterContextProvider>
    </section>
  );
}
