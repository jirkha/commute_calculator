import React from "react";
import CommuteCounter from "../components/sections/CommuteCounter";
import RadioLevel from "../components/forms/RadioLevel";
import Result from "../components/sections/Result";

function Calculator() {
  return (
    <main className="flex flex-col bg-white p-2 items-center">
      <RadioLevel />
      <CommuteCounter />
      <Result />
    </main>
  );
}

export default Calculator;
