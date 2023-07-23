"use client";
import React, { useContext, useState, useEffect, useRef } from "react";
import InputGoogle from "./InputGoogle";
import { CounterContext } from "../contexts/CounterContext";
import { FormData } from "../contexts/CounterContext";
import Link from "next/link";
import { AiOutlineDown } from "react-icons/ai";

function HomepageGoogleForms() {

  const { setFormData } = useContext(CounterContext);
    const [menu, setMenu] = useState<boolean>(false);
    const menuRef = useRef<HTMLUListElement | null>(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent | TouchEvent) => {
        if (
          menuRef.current &&
          !menuRef.current.contains(event.target as Node) &&
          menu
        ) {
          setMenu(false);
        }
      };

      document.addEventListener("click", handleClickOutside);

      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, [menu]);


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
    <div className="relative grid opacity-90 gap-5 bg-black items-center">
      <InputGoogle
        id={200}
        name="current.points.residence"
        kind="current"
        point="residence"
        label="KDE BYDLÍM TEĎ"
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
        label="KAM SE CHCI STĚHOVAT"
        className="rounded p-2 shadow-xl"
        type="text"
        placeholder=""
        required
      />
      {/* <InputGoogle
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
        /> */}
      <div
        onClick={() => setMenu(!menu)}
        className="p-2 cursor-pointer rounded-md border-4 border-calcd w-auto flex justify-center items-center"
      >
        <p className="text-calcd font-bold text-2xl mr-3">VARIANTA VÝPOČTU</p>
        <AiOutlineDown color="#BD4A63" size={25} />
      </div>
      {menu && (
        <ul
          ref={menuRef}
          className="grid gap-4 grid-rows-2 grid-cols-1 sm:grid-cols-2 sm:grid-rows-1 rounded-md p-2 border-4 border-calcd justify-center bg-slate-800 absolute top-full left-0"
        >
          <Link href="/calculator" onClick={() => handleSelect("detailed")}>
            <div className="p-2 cursor-pointer justify-items-center rounded-md bg-calcl w-auto h-full">
              <h1 className="text-black font-bold text-center">PODROBNĚ</h1>
              <p className="text-black text-center hyphens-auto">
                Suma sumárum dle jednotlivých pracovních dní v týdnu
              </p>
            </div>
          </Link>
          <Link href="/calculator" onClick={() => handleSelect("quick")}>
            <div className="p-2 cursor-pointer justify-items-center rounded-md bg-calcl w-auto h-full">
              <h1 className="text-black font-bold text-center">ORIENTAČNĚ</h1>
              <p className="text-black text-center">
                Suma sumárum dle jednoho průměrného pracovního dne
              </p>
            </div>
          </Link>
        </ul>
      )}
    </div>
  );
}

export default HomepageGoogleForms;
