import { useState } from "react";

export function Card({info, customTitleStyle, customDescriptionStyle}) {
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
    ' '
  ;

  const descriptionStyle = customDescriptionStyle ?
  customDescriptionStyle : 
  'leading-6 text-invblack w-155p capitalize'
;

  return (
    <div>
      {info.title ? (
        <h3 className={titleStyle}>{info.title}</h3>
      ) : (
        <></>
      )}
      {info.image ? (
        <img onMouseEnter={() => activateHover()} onMouseLeave={() => deActivateHover()} src={currentImage} alt={info.alt} />
      ) : (
        <></>
      )}
      {info.description ? (
        <p className={descriptionStyle}>{info.description}</p>
      ) : (
        <></>
      )}
    </div>
  );
}
