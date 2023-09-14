//Images
import partners from './partner-info.jsx';
//Components
import Cards from "components/Cards";

export function Partners() {
  return (
    <section className='
      flex
      flex-col
      items-center
      px-4
      py-72p
      text-center
      bg-[#FAFAFA]

      md:block
      md:text-left
      md:px-8
      md:pb-16

      xl:px-[100px]
      xl:py-20
    '>
      <h2 className="
        w-375p
        font-medium
        text-40p/[60px]
        capitalize

        md:w-[340px]
        md:mr-0
        md:inline-block

        xl:w-[286px]
      ">Lörem ipsum mös betad.</h2>
      <p className='
        w-375p
        mt-3
        mb-11
        leading-7
        text-[#252525]

        md:w-[340px]
        md:inline-block

        xl:w-[413px]
        xl:ml-8
        xl:mb-14
      '>Pseudolig. Rediktisk. Blixad. Makropyng. Rebelt. Treng. Exobogoskade. Bevis. Örådisera. Vav. Posamma. Press. Tenas. Polynade. Geoment. Tesyska. Kärlekslås.</p>
      <Cards className="
        flex
        flex-col
        gap-16
        items-center

        md:flex-row
        md:flex-wrap
        md:gap-x-44
        md:gap-y-16

        xl:justify-between
        xl:gap-x-0
      " items={partners}/>
    </section>
  );
}
