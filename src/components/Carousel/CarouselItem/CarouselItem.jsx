export function CarouselItem({title, subtitle, description, image, alt, style = ''}) {
  return (
    <li className={`
      ${style}
    `}>
      <img className="
        inline
      " src={image} alt={alt} />
      
      <h3 className="
        font-black
        text-left
        text-28p/[42px]
      ">{title}</h3>
      
      {subtitle && <h4 className="
        text-left
        text-xl/[30px]
        font-medium
        mt-2.5
      ">{subtitle}</h4>}
      
      <p className="
        text-lg/[32px]
        capitalize
      ">{description}</p>
    </li>
  );
}
