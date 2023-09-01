import { useState } from "react";

export function Card({info, customTitleStyle, customDescriptionStyle, width = ''}) {
  const [currentImage, setImage] = useState(info.image);

  function activateHover() {
    const newImage = info.imageHover ? info.imageHover : info.image;
    setImage(newImage);
  }

  function deActivateHover() {
    setImage(info.image);
  }

  const titleStyle = customTitleStyle ?
    customTitleStyle : 
    'text-28p mt-6 mb-4'
  ;

  const descriptionStyle = customDescriptionStyle ?
  customDescriptionStyle : 
  'leading-6 text-invblack capitalize m-auto'
;

  return (
    <div>
      {info.image ? (
        <img className="m-auto" onMouseEnter={() => activateHover()} onMouseLeave={() => deActivateHover()} src={currentImage} alt={info.alt} />
      ) : (
        <></>
      )}
      {info.svg ? //Not working
        info.svg
        : (
        <></>
      )}
      {info.title ? (
        <h3 className={titleStyle}>{info.title}</h3>
      ) : (
        <></>
      )}
      {info.description ? (
        <p className={`${descriptionStyle} ${width}`}>{info.description}</p>
      ) : (
        <></>
      )}
    </div>
  );
}
