"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/images/logo_dark.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const items: { label: string; page: string }[] = [
  {
    label: "ÚVOD",
    page: "/",
  },
  {
    label: "KALKULÁTOR",
    page: "calculator",
  },
  {
    label: "O NÁS",
    page: "about",
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
        <nav className="flex h-sc items-center justify-between shadow mx-auto w-full bg-black">
          <div className="flex flex-row items-center">
            <Image
              className="w-1/4 max-w-[110px]"
              src={logo}
              alt="Logo of the App"
              priority
            ></Image>
            <a
              href="/"
              className="text-2xl min-[320px]:text-4xl sm:text-6xl xl:text-7xl text-calcl font-bold"
            >
              SUMA SUMÁRUM
            </a>
          </div>
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
            className="flex flex-col justify-center items-center bg-calcl p-12
            absolute right-0 w-auto z-50 
            shadow-lg shadow-black
            "
            // [clip-path:polygon(50%_0%,85%_25%,85%_75%,50%_100%,15%_75%,15%_25%)]
          >
            {items.map(({ label, page }) => (
              <li
                className="text-black text-xl hover:text-calcd font-bold my-2
                p-2 cursor-pointer"
                key={page}
              >
                <Link href={page} onClick={() => setNavbar(!navbar)}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}
        <hr className="border-black md:border-neutral-800"></hr>
        <div className="w-full mx-auto bg-amber-400">
          <p className="p-3 text-xl font-bold tracking-wide text-center">
            Webová stránka je v přípravě
          </p>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
