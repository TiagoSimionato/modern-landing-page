//Info
import statistics from './statistics-info';
//Components
import Cards from "components/Cards";

export function Statistics() {
  return (
    <section className='flex flex-col items-center gap-3 text-center px-4 py-72p'>
      <h2 className="font-medium text-40p/[60px] capitalize">Devår<br/> tins bide. </h2>
      <p className="text-lg/[32px] text-invblack">
        Lande telebelt. Nede kontragisk nisana. Dåvidening sobel. Kana posade. Ädosa. Mynde plande. Ödun ol. Nektig exogt. Rumun durade viplalingar. Nixa dosade. Fasov besat. Diasam mimining povengar. Kromiren teplanat. Självradikalisering. Autofahet dinibel. Virelig saling. Sys fase kroheten.
      </p>

      <Cards className='flex flex-col gap-12 mt-9' width='w-155p' items={statistics} customTitleStyle='font-semibold text-blue text-64p' />
    </section>
  );
}
