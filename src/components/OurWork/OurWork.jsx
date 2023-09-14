//Data
import Carousel from "components/Carousel";
import products from "./ourwork-info";
//Components
import Cards from "components/Cards";
import { useEffect, useState } from "react";

export function OurWork() {
  const [width, setWidth] = useState(window.innerWidth);
  //Rerender card on width change
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
  })
  return (
    <section className="
      flex
      flex-col
      items-center
      gap-8
      px-4
      pt-[80.17px]
      pb-[56.9px]
      text-center

      md:gap-[60px]
      md:text-left
      md:py-16
      md:px-8

      xl:px-[100px]
      xl:py-32
      xl:text-center
      xl:gap-15
    ">
      <div>
        <h2 className="
          mb-3
          text-40p
          font-medium
        ">
          Dikönde.
        </h2>
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
            
            md:[&>h3]:mt-4
            md:[&>h3]:mb-3
            md:[&>h3]:text-center
            md:[&>h3]:font-medium
            md:[&>p]:text-invblack
          '
        />
        :
        <Cards className='
          flex
          flex-col
          gap-[34px]
          [&>li>p]:mt-[100px]
        '
        customTitleStyle={`
          font-semibold
          mt-4
          mb-3
          text-28p
        `}
         items={products} />
      }
    </section>
  );
}
