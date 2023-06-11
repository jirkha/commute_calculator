import HomepageGoogleForms from "../forms/HomepageGoogleForms";

export default function Home() {
  return (
    <>
      <div
        id="home_up"
        className="flex flex-col lg:flex-row place-items-center lg:items-stretch lg:justify-center bg-watch bg-cover"
      >
        <article className="flex flex-col m-8 max-w-lg opacity-80 gap-10 bg-calcd p-8">
          <h1 className="text-9xl text-center font-bold text-calcl max-w-md">
            NEŽ...
          </h1>
          <p className="text-4xl text-white text-center max-w-md">
            učiníte velké životní rozhodnutí, kam se přestěhujete, spočítejte
            si, jak na tom budete s tím nejcennějším, co máte.
          </p>
          <p className="text-4xl text-calcl text-center max-w-md">
            Než bude za pět minut dvanáct...
          </p>
        </article>
        <article className="flex flex-col m-8 max-w-lg opacity-80 gap-10 bg-calcd p-8">
          <h1 className="text-4xl font-bold text-center text-calcl max-w-md">
            CHCI VYPOČÍTAT SVŮJ VOLNÝ ČAS...
          </h1>
          <HomepageGoogleForms />
        </article>
      </div>
      <div
        id="home_down"
        className="flex flex-col lg:flex-row place-items-center lg:items-stretch lg:justify-center bg-home_down bg-cover"
      >
        {" "}
        <article className="flex flex-col m-8 max-w-lg lg:max-w-xl opacity-80 gap-10 bg-calcd p-8">
          <h1 className="text-7xl text-center font-bold text-white">
            Je lepší se realitě podívat do očí...
          </h1>
          <p className="text-xl text-white text-center">
            Volný čas každého z nás uspokojuje, zahrnuje hledání radosti a
            potěšení. Hlavními funkcemi volného času jsou pak odpočinek,
            relaxace, rozptýlení, rozvoj osobnosti a socializace.
          </p>
          <p className="text-xl text-white text-center">
            Je velká škoda se o něj nechat připravit, a proto se před
            přestěhováním můžete sami svobodně rozhodnout, zda Vám změna přinese
            užitek či nikoli.
          </p>
          <p className="text-xl text-white text-center">
            Můžete si vybrat se dvou variant.
          </p>
          <p className="text-xl text-white text-center">
            Pokud chcete pouze jednoduchý sumář dle jednoho průměrného
            pracovního dne o Vašem volném čase, klikněte na "Orientačně.
          </p>
          <p className="text-xl text-white text-center">
            Chcete-li se dozvědět přesnější výpočet dle typu jednotlivých dní,
            pokračujte na "Podrobně".
          </p>
        </article>
      </div>
    </>
  );
}
