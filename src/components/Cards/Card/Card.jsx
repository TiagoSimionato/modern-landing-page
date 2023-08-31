import { useState } from "react";

export function Card({info}) {
  const [currentImage, setImage] = useState(info.image);

  function activateHover() {
    const newImage = info.imageHover ? info.imageHover : info.image;
    setImage(newImage);
  }

  function deActivateHover() {
    setImage(info.image);
  }

  return (
    <>
      <img onMouseEnter={() => activateHover()} onMouseLeave={() => deActivateHover()} src={currentImage} alt={info.description} />
    </>
  );
}
