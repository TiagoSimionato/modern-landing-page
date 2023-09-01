//Data
import products from "./products-info";
//Components
import Cards from "components/Cards";

export function Products() {
  return (
    <section className="flex flex-col items-center gap-8 px-4 py-72p text-center">
      <div>
        <h2 className="text-40p font-medium">Dikönde.</h2>
        <p className="text-lg/[32px] text-invblack capitalize">
          Religt. Tiledes. Kära. Automent. Öher. Plagåsam. Peda. Makropen. Nixa. Pän. Autoboligt. Plade. Dogon. Transtion.  Tisk. Debel. Trekaligen. Tisk. Debel. Trekaligen. Tisk. Debel. Trekaligen.
        </p>
      </div>

      <Cards className='flex flex-col gap-10' items={products} />
    </section>
  );
}
