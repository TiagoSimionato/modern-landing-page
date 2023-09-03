export function CarouselItem({title, subtitle, description, image}) {
  return (
    <div className="
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
    ">
      <img className="inline float-left mb-12 mr-5" src={image} alt="" />
      <h3 className="font-black text-left text-28p/[42px]">{title}</h3>
      {subtitle && <h4 className="text-left text-xl/[30px] font-medium mt-2.5">{subtitle}</h4>}
      <p className="text-lg/[32px] mt-5 capitalize">{description}</p>
    </div>
  );
}
