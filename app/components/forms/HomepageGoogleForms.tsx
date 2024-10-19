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

  const handleSelect = (value: string) => {
    setFormData((prevData: FormData) => ({
      ...prevData,
      general: {
        ...prevData.general,
        detail_level: value,
      },
    }));
  };

  return (
    <div className="relative p-4 border-4 border-black rounded-3xl grid gap-5 bg-white items-center">
      <InputGoogle
        id={200}
        name="current.points.residence"
        kind="current"
        point="residence"
        label="KDE BYDLÍM TEĎ"
        className="flex flex-col items-center bg-white w-full"
        classNameInputDiv="flex flex-col w-full"
        classNameInput="bg-calcl border-4 border-black w-full rounded-xl text-center font-bold p-2 mb-2 shadow-xl w-full h-12"
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
        className="flex flex-col items-center bg-white w-full"
        classNameInputDiv="flex flex-col w-full"
        classNameInput="bg-calcl border-4 border-black w-full rounded-xl text-center font-bold p-2 mb-2 shadow-xl w-full h-12"
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
        onMouseEnter={() => setMenu(!menu)}
        onClick={() => setMenu(!menu)}
        className="p-2 cursor-pointer border-2 border-black rounded-xl bg-black w-auto flex justify-center items-center"
      >
        <p className="text-white font-bold text-2xl mr-3">VARIANTA VÝPOČTU</p>
        <AiOutlineDown color="white" size={25} />
      </div>
      {menu && (
        <ul
          ref={menuRef}
          onMouseLeave={() => setMenu(!menu)}
          className="grid gap-4 grid-rows-2 grid-cols-1 sm:grid-cols-2 sm:grid-rows-1 rounded-md p-2 justify-center bg-black absolute top-full left-0"
        >
          <Link href="/calculator" onClick={() => handleSelect("quick")}>
            <div className="p-2 cursor-pointer justify-items-center border-4 border-white rounded-md bg-black w-auto h-full">
              <h1 className="text-calcl font-bold text-center">ORIENTAČNĚ</h1>
              <p className="text-white text-center">
                dle jednoho průměrného pracovního dne
              </p>
            </div>
          </Link>
          {/* <Link href="/calculator" onClick={() => handleSelect("detailed")}> */}
          <div className="p-2 justify-items-center border-4 border-white rounded-md bg-slate-600 w-auto h-full">
            <h1 className="text-slate-700 font-bold text-center">PODROBNĚ</h1>
            <p className="text-slate-500 text-center hyphens-auto">
              připravuje se
            </p>
          </div>
          {/* </Link> */}
        </ul>
      )}
    </div>
  );
}

export default HomepageGoogleForms;
