//Data
import Carousel from "components/Carousel";
import products from "./ourwork-info";
//Components
import Cards from "components/Cards";

export function OurWork() {
  return (
    <section className="
      flex
      flex-col
      items-center
      gap-8
      px-4
      py-72p
      text-center

      md:text-left
      md:px-8

      xl:px-[100px]
      xl:py-32
      xl:text-center
      xl:gap-14
    ">
      <div>
        <h2 className="text-40p font-medium xl:mb-4">Dikönde.</h2>
        <p className="
          text-lg/[32px]
          text-invblack
          capitalize

          xl:max-w-[830px]
          xl:leading-[27px]
        ">
          Religt. Tiledes. Kära. Automent. Öher. Plagåsam. Peda. Makropen. Nixa. Pän. Autoboligt. Plade. Dogon. Transtion.  Tisk. Debel. Trekaligen. Tisk. Debel. Trekaligen. Tisk. Debel. Trekaligen.
        </p>
      </div>

      {window.innerWidth >= 768 ?
        <Carousel
          items={products}
          showConstrols={false}

          style={`
            xl:justify-center
          `}
          
          cardStyle='
            bg-white
            [&>img]:w-[392px]
            [&>img]:h-[324px]
            px-4
            first:pl-8
            last:pr-8
            rounded-3xl
            sticky
            inline-block
            shrink-0
            snap-center

            text-center
            md:[&>img]:mb-4
            md:[&>h3]:text-center
            md:[&>h3]:font-medium
            md:[&>p]:text-invblack
            md:[&>p]:mt-3
          '
        />
        :
        <Cards className='
          flex
          flex-col
          gap-10
        ' items={products} />
      }
    </section>
  );
}
