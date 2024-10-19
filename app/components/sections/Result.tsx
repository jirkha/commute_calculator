// import Image from 'next/image';
import React from 'react'
// import image from "@/app/images/home_down.jpg";
import ResultContent from '../content/ResultContent';
// import ResultLayout from "../content/ResultLayout";

function Result() {
  return (
    <section
      id="result"
      className="relative flex flex-col items-center p-2 pt-28"
    >
      <div className="flex flex-col items-center w-full z-10">
        <ResultContent>{/* <ResultLayout /> */}</ResultContent>
      </div>
      {/* <div>
        <Image
          className="-mt-16 md:-mt-24 -z-10"
          src={image}
          alt="Page image down"
        />
      </div> */}
    </section>
  );
}

export default Result