import HomepageGoogleForms from "../forms/HomepageGoogleForms";
import Image from "next/image";
import logo from "@/app/images/home_image.png";
import About from "../content/About";

export default function Home() {
  return (
    <div className="bg-white bg-scroll bg-center bg-cover bg-no-repeat">
      <About/>
      <div
        id="home_up"
        className="flex flex-col md:flex-row place-items-center md:items-stretch md:justify-center z-40"
      >
        <article className="flex-col m-8 w-full max-w-sm gap-2 bg-white p-8 hidden lg:flex">
          <Image
            src={logo}
            alt="Ilustrační obrázek"
            layout="responsive" // přizpůsobí se šířce obrazovky
            priority // optimalizuje pro rychlé načtení na hlavní stránce
          />
        </article>
        <article className="flex flex-col m-4 w-full max-w-2xl gap-8 bg-white border-4 rounded-3xl border-black p-4">
          <h1 className="text-4xl font-extrabold text-center text-black max-w-md">
            SPOČÍTEJ SI VOLNÝ ČAS
          </h1>
          <HomepageGoogleForms />
        </article>
      </div>
      <div
        id="home_down"
        className="flex flex-col lg:flex-row place-items-center lg:items-stretch lg:justify-center lg:mt-96 z-0"
      >
        {" "}
        <article className="flex flex-col m-8 w-full max-w-lg lg:max-w-4xl gap-10 bg-white p-8">
          <h1 className="text-5xl text-center font-bold text-black">
            JE ROZHODNĚ VÝHODNĚJŠÍ SE REALITĚ PODÍVAT DO OČÍ...
          </h1>
          <div className="flex flex-col p-4 justify-items-center gap-5 rounded-3xl bg-black w-auto">
            {" "}
            <p className="text-xl text-white text-center font-bold">
              Volný čas každého z nás uspokojuje, zahrnuje hledání radosti a
              potěšení. Hlavními funkcemi volného času jsou pak odpočinek,
              relaxace, rozptýlení, rozvoj osobnosti a socializace.
            </p>
            <p className="text-xl text-white text-center font-bold">
              Je velká škoda se o něj nechat připravit, a proto se před
              přestěhováním můžete sami svobodně rozhodnout, zda Vám změna
              přinese užitek či nikoli.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
