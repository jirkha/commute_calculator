"use client";
import React, {useState} from "react";
//import {Link} from "react-scroll";
import Image from "next/image";
import logo from "@/app/images/logo_dark.jpg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const items: { label: string; page: string }[] = [
  {
    label: "Úvod",
    page: "/",
  },
  {
    label: "Kontakt",
    page: "contact",
  },
];

function Navbar() {

  const [navbar, setNavbar] = useState<boolean>(false);

  return (
    <div>
      <header>
        <nav
          className="flex items-center justify-between shadow mx-auto w-full bg-[#041634]
        md:bg-gradient-to-r from-[#041634] to-neutral-800"
        >
          <Image
            className="ml-8 w-28"
            src={logo}
            alt="Logo of the author"
          ></Image>
          {/* <ul className="hidden text-xl md:flex space-x-8 mr-10   text-slate-100">
            {items.map(({ label, page }) => (
              <li
                className=" hover:text-amber-100 hover:underline decoration-1 cursor-pointer"
                key={page}
              >
                <Link to={page} smooth duration={500}>
                  {label}
                </Link>
              </li>
            ))}
          </ul> */}
          <div
            onClick={() => setNavbar(!navbar)}
            className="flex md:hidden mr-10 my-8 z-10 cursor-pointer"
          >
            {navbar ? (
              <AiOutlineClose color="white" size={30} />
            ) : (
              <AiOutlineMenu color="white" size={30} />
            )}
          </div>
        </nav>
        {/* {navbar && (
          <ul className="flex flex-col justify-center items-center bg-slate-800">
            {items.map(({ label, page }) => (
              <li
                className="text-slate-100 mt-4 mb-4 cursor-pointer"
                key={page}
              >
                <Link
                  //onClick={() => setNavbar(!navbar)}
                  to={page}
                  smooth
                  duration={500}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )} */}
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
