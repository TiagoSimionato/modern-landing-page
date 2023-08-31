//Images
import partners from './partner-info.jsx';
//Components
import Cards from "components/Cards";

export function Partners() {
  return (
    <section className='flex flex-col gap-3 px-4 py-72p text-center bg-partnersbg'>
      <h2 className="font-bold text-40p/[60px] capitalize">Lörem ipsum mös betad.</h2>
      <p className='leading-7'>Pseudolig. Rediktisk. Blixad. Makropyng. Rebelt. Treng. Exobogoskade. Bevis. Örådisera. Vav. Posamma. Press. Tenas. Polynade. Geoment. Tesyska. Kärlekslås.</p>
      <Cards className="mt-11 flex flex-col gap-16 items-center" items={partners}/>
    </section>
  );
}
