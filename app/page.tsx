import React from 'react'
import CommuteCounter from "./components/sections/CommuteCounter";
import Home from './components/sections/Home';

function Page() {
  
  return (
    <main className="text-left p-3">
      <Home />
      <CommuteCounter />
    </main>
  );
}

export default Page;