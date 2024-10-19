"use client";
import React, { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";
import Link from "next/link";
import "../utils/Polygon.css";
import CounterResult from "./CounterResult";

function ResultContent({ children }: { children: React.ReactNode }) {
  const { formData } = useContext(CounterContext);

  if (formData.general.result === false)
    return (
      <div className="flex flex-col items-center">
        {/* {" "}
        <p className="text-calcl text-2xl text-center p-6 pt-11">
          Nejdříve spočítejte volný čas a poté zde uvidíte výsledky
        </p>
        <Link
          href="/calculator#commute_counter"
          className="bg-black hover:bg-slate-800 rounded-xl border-4 border-calcl text-calcd text-center p-2 mb-2 shadow-xl w-full sm:w-1/2
           h-14"
        >
          SUMA SUMÁRUM
        </Link> */}
      </div>
    );

  if (formData.general.free_time_difference < 0)
    return (
      <div className="border-black p-2 m-1 rounded-xl border-4">
        <p className="text-black text-4xl font-extrabold text-center m-2 pt-11">
          SUMA SUMÁRUM
        </p>
        <div className="bg-green-200 border-black p-2 rounded-xl border-4">
          <p className="text-black text-xl md:text-3xl text-center font-extrabold p-6 pt-11">
            Vybrali jste dobře! Po přestěhování budete mít ještě více volného
            času než nyní.
          </p>
        </div>

        <CounterResult />
      </div>
    );

  const working_day_hours = formData.current.times.work_duration / 60;
  const rounded_working_day_hours = working_day_hours.toFixed(1);
  const freetime_day_hours = formData.general.free_time_difference / 60;
  const freetime_month_hours = freetime_day_hours * 30;
  const rounded_freetime_month_hours = Math.round(freetime_month_hours);
  const freetime_year_hours = freetime_month_hours * 12;
  const rounded_freetime_year_hours = Math.round(freetime_year_hours);
  const extra_working_days = freetime_month_hours / working_day_hours;
  const rounded_extra_working_days = Math.ceil(extra_working_days);

  return (
    <div className="bg-slate-300 md:max-w-screen-lg border-black p-2 m-1 rounded-xl border-4">
      <p className="text-black text-4xl font-extrabold text-center m-2 pt-11">
        SUMA SUMÁRUM
      </p>
      <article className="flex flex-wrap justify-center items-center border-black p-2 rounded-xl border-4 mb-4">
        <div className="polygon-container m-2">
          <div className="polygon flex flex-wrap justify-center items-center p-1">
            <p className="text-center font-bold text-[96px]">
              {rounded_freetime_month_hours}
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/2 lg:w-7/12 m-2">
          <div className="bg-calcl rounded-md m-2 p-1">
            <p className="text-center font-bold text-xl">MĚSÍČNĚ</p>
          </div>
          <div className="bg-calcl rounded-md m-2 p-1">
            <p className="text-center font-bold">
              Tolik hodin měsíčně svého volného času ztratíte! Zdá se vám to
              málo? Váš pracovní den trvá průměrně {rounded_working_day_hours}{" "}
              hodin, chtěli byste jít navíc {rounded_extra_working_days} krát za
              měsíc dobrovolně do práce?
            </p>
          </div>
        </div>
      </article>
      <article className="flex flex-wrap justify-center items-center border-black p-2 rounded-xl border-4">
        <div className="polygon-container m-2">
          <div className="polygon flex flex-wrap justify-center items-center p-1">
            <p className="text-center font-bold text-[96px]">
              {rounded_freetime_year_hours}
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/2 lg:w-7/12 m-2">
          <div className="bg-calcl rounded-md m-2 p-1">
            <p className="text-center font-bold text-xl">ROČNĚ</p>
          </div>
          <div className="bg-calcl rounded-md m-2 p-1">
            <p className="text-center font-bold">
              A za rok už to dělá neskutečných {rounded_freetime_year_hours}{" "}
              hodin. Není čas přemýšlet o změně, než bude pozdě?
            </p>
          </div>
        </div>
        
      </article><CounterResult />
    </div>
  );
}

export default ResultContent;
