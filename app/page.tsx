import React from 'react'
import CommuteCounter from "./components/sections/CommuteCounter";
import Home from './components/sections/Home';

function Page() {
  
  return (
    <main className="text-center">
      <Home />
      <CommuteCounter />
    </main>
  );
}

export default Page;