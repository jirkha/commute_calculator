import CommuteForms from "../forms/CommuteForms";
import HomepageGoogleForms from "../forms/HomepageGoogleForms";

export default function Home() {
  return (
    <div
      id="home"
      className="grid bg-watch bg-cover justify-items-center w-auto md:flex md:justify-around items-center"
    >
      <article className="grid my-12 justify-items-center opacity-80 gap-10 bg-calcd w-1/3 p-12 items-center">
        <h1 className="text-9xl text-center font-bold text-calcl">NEŽ...</h1>
        <p className="text-4xl text-white text-center">
          učiníte velké životní rozhodnutí, kam se přestěhujete, spočítejte si,
          jak na tom budete s tím nejcennějším, co máte.
        </p>
        <p className="text-4xl text-calcl text-center">
          Než bude za pět minut dvanáct...
        </p>
      </article>
      <article className="grid my-12 opacity-90 gap-10 bg-calcd w-1/3 p-12 items-center">
        <h1 className="text-5xl font-bold text-center text-calcl">
          CHCI VYPOČÍTAT SVŮJ VOLNÝ ČAS...
        </h1>
        <HomepageGoogleForms />
        
      </article>
    </div>
  );
}
