import HomepageGoogleForms from "../forms/HomepageGoogleForms";
import Image from "next/image";
import logo from "@/app/images/home_image.png";
import About from "../content/About";

export default function Home() {
  return (
    <div className="bg-white bg-scroll bg-center bg-cover bg-no-repeat">
      <article className="flex flex-col bg-slate-500 m-4 p-2 md:p-4 rounded-3xl">
        {" "}
        <p className="text-md md:text-xl text-white text-center md:font-bold md:tracking-wide">
          Na této stránce si můžete ověřit, jaký vliv bude mít změna doby
          dojíždění po přestěhování na množství vašeho volného času.
        </p>
        <p className="text-md md:text-xl text-white text-center md:font-bold md:tracking-wide">
          Volný čas je pro každého z nás důležitý. Byla by velká škoda se o něj
          nechat připravit.
        </p>
      </article>
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
        <article className="flex flex-col m-4 w-full max-w-2xl gap-8 bg-slate-200 border-4 rounded-3xl border-black p-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center text-black max-w-md">
            SPOČÍTEJ SI VOLNÝ ČAS
          </h1>
          <HomepageGoogleForms />
        </article>
      </div>
    </div>
  );
}
