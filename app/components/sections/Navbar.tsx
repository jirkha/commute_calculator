"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/images/logo.jpg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const items: { label: string; page: string }[] = [
  {
    label: "Úvod",
    page: "/",
  },
  {
    label: "Kalkulátor",
    page: "calculator",
  },
];

function Navbar() {
  const [navbar, setNavbar] = useState<boolean>(false);
  const navbarRef = useRef<HTMLUListElement | null>(null);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node) &&
        navbar
      ) {
        setNavbar(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [navbar]);
  

  return (
    <div>
      <header>
        <nav className="flex items-center justify-between shadow mx-auto w-full bg-black">
          <Image className="w-2/3" src={logo} alt="Logo of the App"></Image>

          <div
            onClick={() => setNavbar(!navbar)}
            className="flex m-4 my-8 z-10 cursor-pointer"
          >
            {navbar ? (
              <AiOutlineClose color="#4DCBF1" size={50} />
            ) : (
              <AiOutlineMenu color="#4DCBF1" size={50} />
            )}
          </div>
        </nav>
        {navbar && (
          <ul
            ref={navbarRef}
            className="flex flex-col justify-center items-center bg-slate-800"
          >
            {items.map(({ label, page }) => (
              <li
                className="text-slate-100 mt-4 mb-4 cursor-pointer"
                key={page}
              >
                <Link href={page}>{label}</Link>
              </li>
            ))}
          </ul>
        )}
        <hr className="border-black md:border-neutral-800"></hr>
        <div className="w-full mx-auto bg-amber-400">
          <p className="p-3 text-xl font-bold tracking-wide">
            Webová stránka je v přípravě
          </p>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
