"use client";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import InputGoogle from "./InputGoogle";
import Image from "next/image";
import details from "@/app/images/details.jpeg";
import briefly from "@/app/images/fast.png";
import { CounterContext } from "../contexts/CounterContext";
import { FormData } from "../contexts/CounterContext";

function HomepageGoogleForms() {

  const { formData, setFormData } = useContext(CounterContext);
  const router = useRouter();

  const handleSelect = async (value: string) => {
     await Promise.resolve(
       setFormData((prevData: FormData) => ({
         ...prevData,
         general: {
           ...prevData.general,
           detail_level: value,
         },
       }))
     ).then(() => {
       // Přesměrování na jinou stránku
       router.push("/calculator");
     });
  };

  return (
    <div className="w-full">
      <div className="grid opacity-90 gap-5 bg-calcd items-center">
        <InputGoogle
          id={100}
          name="current.points.residence"
          kind="current"
          point="workplace"
          label="Současné bydliště"
          className="rounded p-2 shadow-xl"
          type="text"
          placeholder=""
          required
        />
        <InputGoogle
          id={101}
          name="planned.points.residence"
          kind="planned"
          point="workplace"
          label="Plánované bydliště"
          className="rounded p-2 shadow-xl"
          type="text"
          placeholder=""
          required
        />
        <InputGoogle
          id={101}
          name="planned.points.workplace"
          kind="planned"
          point="workplace"
          label="Pracoviště"
          className="rounded p-2 shadow-xl"
          type="text"
          placeholder=""
          required
        />
        <div
          className="cursor-pointer grid justify-items-center h-32 rounded-md bg-calcl w-auto md:flex md:justify-around items-center"
          onClick={() => handleSelect("quick")}
        >
          <Image
            className="p-8 w-36 mx-auto"
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
        <div
          className="cursor-pointer grid justify-items-center h-32 rounded-md bg-calcl w-auto md:flex md:justify-around items-center"
          onClick={() => handleSelect("detailed")}
        >
          <Image
            className="p-8 w-36 mx-auto"
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
      </div>
    </div>
  );
}

export default HomepageGoogleForms;
