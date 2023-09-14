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
      gap-12
      text-center
      px-4
      py-72p
      capitalize

      md:text-left
      md:items-start
      md:px-8
      md:py-16
      md:gap-14

      xl:py-32
      xl:px-[100px]
      xl:flex-row
      xl:flex-wrap
      xl:gap-0
    '>
      <div className='
        flex
        flex-col
        items-center
        gap-3

        md:items-start

        xl:order-2
        xl:w-[50%]
      '>
        <h2 className="
          w-[200px]
          font-medium
          text-40p/[60px]

          md:min-w-[385px]

          xl:w-[50%]
          xl:shrink-0
        ">Devår tins bide. </h2>
        <p className="
          w-375p
          text-lg/[32px]
          text-invblack
          
          md:w-[604px]
          
          xl:shrink-0
        ">
          Lande telebelt. Nede kontragisk nisana. Dåvidening sobel. Kana posade. Ädosa. Mynde plande. Ödun ol. Nektig exogt. Rumun durade viplalingar. Nixa dosade. Fasov besat. Diasam mimining povengar. Kromiren teplanat. Självradikalisering. Autofahet dinibel. Virelig saling. Sys fase kroheten.
        </p>
      </div>

      <Cards className='
        flex
        flex-col
        gap-12

        md:flex-row
        md:flex-wrap
        md:gap-y-14
        md:gap-x-[184px]
        md:[&>li>div>p]:ml-0
        md:[&>li]:min-w-[180px]

        xl:w-[50%]
        xl:max-w-[820px]
        xl:shrink-0
        xl:gap-x-[138px]
      ' width='w-155p' items={statistics} customTitleStyle='font-semibold text-blue text-64p' />
    </section>
  );
}
