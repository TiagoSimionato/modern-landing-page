//Info
import collaborators from "./testimonial-info";
//Colaborators
import Carousel from "components/Carousel";

export function Testimonial() {
  const commonCardStyles = `
    text-left
    w-375p
    p-8
    first:ml-4
    last:mr-4
    rounded-[30px]
    sticky
    inline-block
    shrink-0
    snap-center
    duration-500

    [&>img]:mb-12
    [&>img]:mr-5
    [&>img]:float-left
    [&>p]:mt-[19px]

    md:first:ml-8
    md:last:mr-8
    md:w-[505px]
    md:[&>img]:mb-0
    md:pr-[73px]

    xl:first:ml-[100px]
    xl:last:mr-[100px]
    xl:[&>p]:mt-[22px]
  `;

  return (
    <section className="
      text-center
      px-4
      pt-[89.66px]
      pb-[50.94px]
      h-max

      md:text-left
      md:px-8
      md:py-24

      xl:px-[100px]
      xl:py-32
      overflow-x-hidden
    ">
      <h2 className="
        text-40p
        font-medium
      ">Kroser. Vak. Vöherar.Mikrolig. </h2>
      <p className="
        text-lg/[32px]
        capitalize
        mt-3
        mb-[21px]

        md:mt-[9px]
        md:mb-[47px]
      ">
        Use this section to describe your company 
      </p>

      <Carousel
        items={collaborators}
        title='name'
        subtitle='job'
        style={`
          gap-5
        `}
        activeCardStyle={`
          ${commonCardStyles}
          bg-blue
          text-white
          [&>h3]:font-black
        `}

        cardStyle={`
          ${commonCardStyles}
          bg-[#F8F9FF]
          text-[black]
          [&>h3]:font-medium
        `}
      />
    </section>
  );
}
