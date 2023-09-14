//Info
import benefits from './howitworks-info';
//Images
import benefitsImgMobile from "assets/images/buildings.png";
import benefitsImg       from "assets/images/buildingsWide.png";
//Components
import Cards from "components/Cards";

export function HowItWorks() {
  return (
    <section id="vuv" className="
      flex
      flex-col
      items-center
      px-4
      pt-72p
      pb-[63.83px]
      text-center

      md:text-left
      md:items-start
      md:px-8
      md:py-16

      xl:py-32
      xl:px-[100px]
      xl:max-h-[1300px]
      xl:flex-wrap
    ">
      <picture className="
        md:order-1
        md:h-[376px]
        md:w-[499px]
        md:mb-16

        xl:w-[50%]
      ">
        <source media="(min-width: 768px)" srcSet={benefitsImg} />
        <img src={benefitsImgMobile} alt="Drawing with four buildings in ascending order" className='text-[#D9D9D9]' />
      </picture>

      <div className="
        mt-8
        mb-10
        flex
        flex-col
        gap-3
        
        md:self-start
        md:mt-0
        
        xl:w-[50%]
      ">
        <h2 className="
          text-40p
          font-medium
          capitalize

          xl:mb-4
        ">Vuv jiheten.</h2>
        <p className="
          text-lg/[32px]
          text-invblack
          capitalize

          md:max-w-[499px]
        ">
          Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business.
        </p>
      </div>

      <Cards className='
        flex
        flex-col
        gap-10

        md:order-1
        md:flex-row
        md:flex-wrap
        md:[&>li>div>img]:m-0
        md:gap-x-8
        md:gap-y-13

        xl:w-[50%]
        xl:max-w-[840px]
        xl:gap-x-0
        xl:justify-between
      ' width='w-286p' items={benefits}/>
    </section>
  );
}
