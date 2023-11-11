"use client";
import React, { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";
import Link from "next/link";
import "../utils/Polygon.css";

function ResultContent({ children }: { children: React.ReactNode }) {
  const { formData } = useContext(CounterContext);

  // if (formData.general.result === false)
  //   return (
  //     <div className="flex flex-col items-center">
  //       {" "}
  //       <p className="text-calcl text-2xl text-center p-6 pt-11">
  //         Nejdříve spočítejte volný čas a poté zde uvidíte výsledky
  //       </p>
  //       <Link
  //         href="/calculator#commute_counter"
  //         className="g-black hover:bg-slate-800 rounded-xl border-4 border-calcl text-calcd text-center p-2 mb-2 shadow-xl w-full h-14"
  //       >
  //         SUMA SUMÁRUM
  //       </Link>
  //     </div>
  //   );

  return (
    <div className="p-2">
      <article className="flex flex-wrap justify-center items-center">
        <div className="polygon-container m-2">
          <div className="polygon flex flex-wrap justify-center items-center">
            <p className="text-center font-bold text-[96px]">0</p>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/2 lg:w-7/12 m-2">
          <div className="bg-calcl rounded-md m-2 p-1">
            <p className="text-center font-bold text-lg">MĚSÍČNĚ</p>
          </div>
          <div className="bg-calcl rounded-md m-2 p-1">
            <p className="text-center font-bold">
              O tolik hodin měsíčně svého volného času ztratíš! Zdá se Ti to
              málo? Pracovní den trvá 0 hodin, chtěl bys jít navíc 0 krát za
              měsíc dobrovolně do práce?
            </p>
          </div>
        </div>
      </article>
      <article className="flex flex-wrap justify-center items-center">
        <div className="polygon-container m-2">
          <div className="polygon flex flex-wrap justify-center items-center">
            <p className="text-center font-bold text-[96px]">0</p>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/2 lg:w-7/12 m-2">
          <div className="bg-calcl rounded-md m-2 p-1">
            <p className="text-center font-bold text-lg">ROČNĚ</p>
          </div>
          <div className="bg-calcl rounded-md m-2 p-1">
            <p className="text-center font-bold">
              O tolik hodin měsíčně svého volného času ztratíš! Zdá se Ti to
              málo? Pracovní den trvá 0 hodin, chtěl bys jít navíc 0 krát za
              měsíc dobrovolně do práce?
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default ResultContent;
