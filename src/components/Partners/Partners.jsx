//Images
import partners from './partner-info.jsx';
//Components
import Cards from "components/Cards";

export function Partners() {
  return (
    <section className='
      flex
      flex-col
      gap-3
      px-4
      py-72p
      text-center
      bg-partnersbg

      md:block
      md:text-left
      md:px-8
    '>
      <h2 className="
        font-medium
        text-40p/[60px]
        capitalize

        md:w-[340px]
        md:mr-0
        md:inline-block
      ">Lörem ipsum mös betad.</h2>
      <p className='
        leading-7

        md:w-[340px]
        md:inline-block
      '>Pseudolig. Rediktisk. Blixad. Makropyng. Rebelt. Treng. Exobogoskade. Bevis. Örådisera. Vav. Posamma. Press. Tenas. Polynade. Geoment. Tesyska. Kärlekslås.</p>
      <Cards className="
        mt-11
        flex
        flex-col
        gap-16
        items-center

        md:flex-row
        md:flex-wrap
        md:gap-x-44
        md:gap-y-16
      " items={partners}/>
    </section>
  );
}
