//Images
import {ReactComponent as DisabledArrowLeft} from 'assets/images/icons/grayArrowLeft.svg'
import {ReactComponent as EnabledArrowRight} from 'assets/images/icons/whiteArrowRight.svg'
//Components
import Button from "components/Button";
import CarouselItem from "./CarouselItem";
import React, { useState } from 'react';

//TODO ACTIVE ITEM STYLE
export function Carousel({
    items,
    title           = 'title',
    subtitle        = 'subtitle',
    description     = 'description',
    image           = 'image',
    alt             = 'alt',
    showConstrols   = true,
    style,
    cardStyle
  }) {
  const enabledButtonStyle = 'bg-blue';
  const disabledButtonStyle = 'bg-buttonbg';

  const [leftButton, setLeftButton]   = useState(disabledButtonStyle);
  const [rightButton, setRightButton] = useState(enabledButtonStyle);

  const [leftButtonEnabled, setEnableLB]  = useState(false);
  const [rightButtonEnabled, setEnableRB] = useState(true);

  function updateButton(element) {
    const clientWidth = document.documentElement.clientWidth;
    const scrollPercentage = element.scrollLeft / (element.scrollWidth - clientWidth);
    //TODO SETACTIVE ITEM ONSCROLL
    //console.log('mudanca pelo scroll: ' + parseInt(scrollPercentage * itemAmount));
    //setActiveItem(parseInt(scrollPercentage * itemAmount));
    if (scrollPercentage === 0) {
      setLeftButton(disabledButtonStyle);
      setEnableLB(false);
    } else {
      setLeftButton(enabledButtonStyle);
      setEnableLB(true);
    }
    if (scrollPercentage === 1) { //TODO FIX condition
      setRightButton(disabledButtonStyle);
      setEnableRB(false);
    } else {
      setRightButton(enabledButtonStyle);
      setEnableRB(true);
    }
  }

  const itemAmount = items.length;
  const [activeItem, setActiveItem] = useState(0);
  const ul = React.useRef(null);

  function scrollLeft() {
    scrollCarousel('left');
  }

  function scrollRight() {
    scrollCarousel('right');
  }

  function scrollCarousel(side) {
    let newActiveItem;
    if (side === 'left') {
      newActiveItem = activeItem - 1;
    } else if (side === 'right') {
      newActiveItem = activeItem + 1;
    }

    const updateLeft  = side === 'left'  && newActiveItem >= 0;
    const updateRight = side === 'right' && newActiveItem < itemAmount;
    if (updateLeft || updateRight) {
      const scrollPercentage = newActiveItem / itemAmount;
      ul.current.scrollLeft = scrollPercentage * ul.current.scrollWidth;
      setActiveItem(newActiveItem);
    }
  }

  return (
    <div className="
      relative
      left-[-16px]
      md:left-[-32px]
      w-full
    ">
      <ul className={`
        flex
        relative
        overflow-auto
        snap-x
        snap-mandatory
        w-screen
        no-scrollbar
        ${style}
      `}
      onScroll={(event) => updateButton(event.target)}
      ref={ul}>
        {items.map(item =>
          <CarouselItem
            key={item.id}
            title={item[title]}
            subtitle={item[subtitle]}
            description={item[description]}
            image={item[image]}
            alt={item[alt]}
            style={cardStyle}
          />
        )}
      </ul>
      {showConstrols ?
        <div className='px-4 py-6 flex justify-end gap-6'>
          <Button OtherStyles={leftButton} onClick={scrollLeft} label='Scroll Carousel Left'>
            {leftButtonEnabled ? <EnabledArrowRight className='rotate' /> :  <DisabledArrowLeft />}
          </Button>
          <Button OtherStyles={rightButton} onClick={scrollRight} label='Scroll Carousel Right'>
            {rightButtonEnabled ? <EnabledArrowRight /> : <DisabledArrowLeft className='rotate' />}
          </Button>
        </div>
      : <></>}
    </div>
  );
}
