"use client";
import React, { useContext } from "react";
import InputGoogle from "./InputGoogle";
import Image from "next/image";
import details from "@/app/images/details.jpeg";
import briefly from "@/app/images/fast.png";
import { CounterContext } from "../contexts/CounterContext";
import { FormData } from "../contexts/CounterContext";
import Link from "next/link";

function HomepageGoogleForms() {

  const { setFormData } = useContext(CounterContext);

  const handleSelect =  (value: string) => {

       setFormData((prevData: FormData) => ({
         ...prevData,
         general: {
           ...prevData.general,
           detail_level: value,
         },
       }))

  };

  return (
    <div className="max-w-md">
      <div className="grid opacity-90 gap-5 bg-calcd items-center">
        <InputGoogle
          id={200}
          name="current.points.residence"
          kind="current"
          point="residence"
          label="Současné bydliště"
          className="rounded p-2 shadow-xl"
          type="text"
          placeholder=""
          required
        />
        <InputGoogle
          id={201}
          name="planned.points.residence"
          kind="planned"
          point="residence"
          label="Plánované bydliště"
          className="rounded p-2 shadow-xl"
          type="text"
          placeholder=""
          required
        />
        <InputGoogle
          id={202}
          name="current.points.workplace"
          kind="current"
          point="workplace"
          label="Současné pracoviště"
          className="rounded p-2 shadow-xl"
          type="text"
          placeholder=""
          required
        />
        <InputGoogle
          id={203}
          name="planned.points.workplace"
          kind="planned"
          point="workplace"
          label="Plánované pracoviště"
          className="rounded p-2 shadow-xl"
          type="text"
          placeholder=""
          required
        />

        <div className="grid grid-row-2 gap-4 items-stretch">
          <Link href="/calculator" onClick={() => handleSelect("detailed")}>
            <div className="p-4 cursor-pointer justify-items-center rounded-md bg-calcl w-auto flex justify-around items-center">
              <Image
                className="p-4 w-36 mx-auto"
                src={details}
                alt="Details"
              ></Image>
              <div>
                <h1 className="text-calcd font-bold">PODROBNĚ</h1>
                <p className="text-calcd">
                  Statistika dle jednotlivých pracovních dní v týdnu
                </p>
              </div>
            </div>
          </Link>
          <Link href="/calculator" onClick={() => handleSelect("quick")}>
            <div className="p-4 cursor-pointer justify-items-center rounded-md bg-calcl w-auto flex justify-around items-center">
              <Image
                className="p-4 w-36 mx-auto"
                src={briefly}
                alt="Details"
              ></Image>
              <div>
                <h1 className="text-calcd font-bold">ORIENTAČNĚ</h1>
                <p className="text-calcd">
                  Výsledek dle zvyklostí průměrného pracovního dne
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomepageGoogleForms;
