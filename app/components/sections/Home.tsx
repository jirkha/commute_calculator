import HomepageGoogleForms from "../forms/HomepageGoogleForms";

export default function Home() {
  return (
    <div className="bg-black bg-watch bg-scroll bg-center bg-cover bg-no-repeat">
      <div
        id="home_up"
        className="flex flex-col lg:flex-row place-items-center lg:items-stretch lg:justify-center z-40"
      >
        <article className="flex flex-col m-8 w-full max-w-lg gap-2 bg-black p-8">
          <h1 className="text-5xl text-center font-bold text-calcd max-w-md">
            NEŽ
          </h1>
          <div className="flex flex-col p-4 justify-items-center gap-5 rounded-3xl bg-calcl w-auto">
            {" "}
            <p className="text-xl text-black font-bold text-center max-w-md">
              učiníte velké životní rozhodnutí, kam se přestěhujete, spočítejte
              si, jak na tom budete s tím nejcennějším, co máte.
            </p>
            <p className="text-xl text-black font-bold text-center max-w-md">
              S Vaším volným časem.
            </p>
            <p className="text-2xl text-black font-bold text-center max-w-md">
              NEŽ BUDE ZA PĚT MINUT DVANÁCT...
            </p>
          </div>
        </article>
        <article className="flex flex-col m-8 w-full max-w-lg gap-10 bg-black p-8">
          <h1 className="text-5xl font-bold text-center text-calcd max-w-md">
            SPOČÍTEJ MŮJ VOLNÝ ČAS
          </h1>
          <HomepageGoogleForms />
        </article>
      </div>
      <div
        id="home_down"
        className="flex flex-col lg:flex-row place-items-center lg:items-stretch lg:justify-center lg:mt-96 z-0"
      >
        {" "}
        <article className="flex flex-col m-8 w-full max-w-lg lg:max-w-4xl gap-10 bg-black p-8">
          <h1 className="text-5xl text-center font-bold text-calcd">
            JE ROZHODNĚ VÝHODNĚJŠÍ SE REALITĚ PODÍVAT DO OČÍ...
          </h1>
          <div className="flex flex-col p-4 justify-items-center gap-5 rounded-3xl bg-calcl w-auto">
            {" "}
            <p className="text-xl text-black text-center font-bold">
              Volný čas každého z nás uspokojuje, zahrnuje hledání radosti a
              potěšení. Hlavními funkcemi volného času jsou pak odpočinek,
              relaxace, rozptýlení, rozvoj osobnosti a socializace.
            </p>
            <p className="text-xl text-black text-center font-bold">
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
