import React from 'react'
import CommuteCounter from "./components/sections/CommuteCounter";
import Home from './components/sections/Home';
import { CounterContextProvider } from './components/contexts/CounterContext';

function Page() {
  
  return (
    <main className="text-left p-3">
      <Home />
      <CounterContextProvider>
        <CommuteCounter />
      </CounterContextProvider>
    </main>
  );
}

export default Page;