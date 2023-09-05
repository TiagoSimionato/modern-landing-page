//Info
import collaborators from "./testimonial-info";
//Colaborators
import Carousel from "components/Carousel";

export function Testimonial() {
  return (
    <section className="
      text-center
      px-4
      pt-72p
      pb-12
      h-max

      md:text-left
      md:px-8

      xl:px-[100px]
      xl:py-32
    ">
      <h2 className="
        text-40p
        font-medium
      ">Kroser. Vak. Vöherar.Mikrolig. </h2>
      <p className="text-lg/[32px] capitalize mb-3 mb-6">
        Use this section to describe your company 
      </p>

      <Carousel
        items={collaborators}
        title='name'
        subtitle='job'
        style={`
          gap-4
        `}
        cardStyle={`
          bg-blue
          text-white
          text-left
          w-375p
          p-8
          first:ml-4
          last:mr-4
          rounded-3xl
          sticky
          inline-block
          shrink-0
          snap-center

          [&>img]:mb-12
          [&>img]:mr-5
          [&>img]:float-left
          [&>p]:mt-5

          md:first:ml-8
          md:last:mr-8
          md:w-[505px]

          xl:first:ml-[100px]
          xl:last:mr-[100px]
        `}
      />
    </section>
  );
}
