import React from "react";
import about_left from "@/app/images/about_left.webp";
import about_right from "@/app/images/about_right.webp";
import Image from "next/image";

function About() {
  return (
    <main className=" bg-[#1F1F1F]">
      <div className="pr-11 z-10">
        <article className="flex flex-col w-full gap-5 bg-[#1F1F1F] px-8 pt-6">
          <h1 className="text-5xl text-center font-bold text-calcd">
            JIRKA A VLASTA
          </h1>
          <p className="text-lg text-white text-center font-bold">
            Seznámili jsme se v roce 2017 a od té doby se z nás stali nejlepší
            kamarádi, a byť jsme každý povahově na opačném pólu zeměkoule, máme
            mnoho společných zájmů a vzájemně se respektujeme. Zajímají nás
            veškeré druhy veřejné dopravy, všeobecně vše kolem mobility,
            veřejného prostoru nejen z hlediska dopravní infrastruktury či
            městského plánování.
          </p>
          <p className="text-lg text-white text-center font-bold">
            Zatímco Jirka se začal v roce 2021 věnovat programování webových aplikací, Vlasta se mnohem aktivněji od téhož roku zapojil
            do tvůrčí práce (grafika, webové stránky, časopis pro zaměstnance).
            A tím se naše síly spojily a začali jsme společně vyvíjet aplikaci
            SUMASUMÁRUM, která je první vlaštovkou naší spolupráce:-)
          </p>
          <p className="text-lg text-white text-center font-bold">
            Budeme velmi vděční za jakoukoliv zpětnou vazbu na náš email.
          </p>
          <p className="text-lg text-white text-center font-bold">
            <a href="mailto:info@sumasumarum.cz">info@sumasumarum.cz</a>
          </p>
        </article>
      </div>

      <div className="grid grid-cols-2 z-0">
        <Image src={about_right} alt="Page image right" />
        <Image src={about_left} alt="Page image left" />
      </div>
    </main>
  );
}

export default About;
