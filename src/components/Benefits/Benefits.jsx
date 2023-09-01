import benefitsImage from "assets/images/buildings.png";
import Cards from "components/Cards";
import benefits from './benefits-info';

export function Benefits() {
  return (
    <section className="flex flex-col items-center gap-8 px-4 py-72p text-center">
      <img src={benefitsImage} alt="Drawing with four buildings in ascending order" />
        <div>
          <h2 className="text-40p font-medium capitalize">Vuv jiheten.</h2>
          <p className="text-lg/[32px] text-invblack capitalize">
            Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business.
          </p>
        </div>

      <Cards className='flex flex-col gap-10' width='w-286p' items={benefits}/>
    </section>
  );
}
