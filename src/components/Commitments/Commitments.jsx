//Info
import statistics from './commitments-info';
//Components
import Cards from "components/Cards";

export function Commitments() {
  return (
    <section className='
      flex
      flex-col
      items-center
      gap-3
      text-center
      px-4
      py-72p

      md:text-left
      md:items-start
      md:px-8
    '>
      <h2 className="
        font-medium
        text-40p/[60px]
        capitalize

        md:min-w-[385px]
      ">Devår tins bide. </h2>
      <p className="
        text-lg/[32px]
        text-invblack

        md:max-w-[604px]
      ">
        Lande telebelt. Nede kontragisk nisana. Dåvidening sobel. Kana posade. Ädosa. Mynde plande. Ödun ol. Nektig exogt. Rumun durade viplalingar. Nixa dosade. Fasov besat. Diasam mimining povengar. Kromiren teplanat. Självradikalisering. Autofahet dinibel. Virelig saling. Sys fase kroheten.
      </p>

      <Cards className='
        flex
        flex-col
        gap-12
        mt-9

        md:flex-row
        md:flex-wrap
        md:gap-x-[184px]
        md:[&>li>div>p]:ml-0
        md:[&>li]:min-w-[180px]
      ' width='w-155p' items={statistics} customTitleStyle='font-semibold text-blue text-64p' />
    </section>
  );
}
