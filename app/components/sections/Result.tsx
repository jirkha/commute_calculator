import React from 'react'
import ResultContent from '../content/ResultContent';

function Result() {
  return (
    <section className="relative flex flex-col items-center p-2 pt-28">
      <div className="flex flex-col items-center w-full z-10">
        <ResultContent />
      </div>
    </section>
  );
}

export default Result