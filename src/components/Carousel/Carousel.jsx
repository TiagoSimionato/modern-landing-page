import { ReactComponent as DisabledArrowLeft } from 'assets/images/icons/grayArrowLeft.svg';
import { ReactComponent as EnabledArrowRight } from 'assets/images/icons/whiteArrowRight.svg';
import Button from "components/Button";
import CarouselItem from "./CarouselItem";
import { useState, useRef, useEffect } from 'react';

export function Carousel({
    items,
    title           = 'title',
    subtitle        = 'subtitle',
    description     = 'description',
    image           = 'image',
    alt             = 'alt',
    showConstrols   = true,
    style,
    cardStyle,
    activeCardStyle = ''
  }) {
  const enabledButtonStyle  = 'bg-blue';
  const disabledButtonStyle = 'bg-buttonbg';

  const [leftButton, setLeftButton]   = useState(disabledButtonStyle);
  const [rightButton, setRightButton] = useState(enabledButtonStyle);

  const [leftButtonEnabled, setEnableLB]  = useState(false);
  const [rightButtonEnabled, setEnableRB] = useState(true);

  const itemAmount = items.length;
  const [activeItem, setActiveItem] = useState(0);
  const [clientX, setClientX] = useState(0);
  const ul = useRef(null);

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
      ul.current.children[newActiveItem].scrollIntoView({'block': 'nearest', 'inline' : 'center', 'behavior' : 'smooth'});
      setActiveItem(newActiveItem);
      updateButtons(newActiveItem);
    }
  }

  function updateButtons(currentItem) {
    if (currentItem === 0) {
      setLeftButton(disabledButtonStyle);
      setEnableLB(false);
    } else {
      setLeftButton(enabledButtonStyle);
      setEnableLB(true);
    }
    if (currentItem === (itemAmount - 1)) {
      setRightButton(disabledButtonStyle);
      setEnableRB(false);
    } else {
      setRightButton(enabledButtonStyle);
      setEnableRB(true);
    }
  }
  
  useEffect(() => {
    const preventDefault = (e) => {
      if (showConstrols) {
        e.preventDefault();
      }
    };
    ul.current.addEventListener('touchstart', preventDefault);
    ul.current.addEventListener('touchend', preventDefault);
  });
  
  return (
    <div className="
      relative
      w-full
      left-[-16px]

      md:left-[-32px]

      xl:left-[-100px]
      xl:[&>div]:absolute
      xl:[&>div]:top-[-120px]
      xl:[&>div]:right-[-100px]
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
      onTouchStart={(e) => {
        showConstrols && setClientX(e.touches[0].clientX);
      }}
      onTouchEnd={(e) => {
        if (showConstrols) {
          clientX > e.changedTouches[0].clientX ? scrollCarousel('right') : scrollCarousel('left');
        }
      }}
      id='lista'
      ref={ul}>
        {items.map(item =>{
          const itemStyle = item.id === (activeItem + 1) && activeCardStyle !== '' ? activeCardStyle : cardStyle;     
          return <CarouselItem
            key={item.id}
            title={item[title]}
            subtitle={item[subtitle]}
            description={item[description]}
            image={item[image]}
            alt={item[alt]}
            style={itemStyle}
          />
        })}
      </ul>
      {showConstrols ?
        <div className='
          pt-6
          flex
          justify-end
          gap-6
          relative
          left-4
        
          md:left-8
          md:pt-[49px]
          md:gap-5
        '>
          <Button OtherStyles={leftButton} onClick={() => {scrollCarousel('left')}} label='Scroll Carousel Left'>
            {leftButtonEnabled ? <EnabledArrowRight className='rotate' /> :  <DisabledArrowLeft />}
          </Button>
          <Button OtherStyles={rightButton} onClick={() => {scrollCarousel('right')}} label='Scroll Carousel Right'>
            {rightButtonEnabled ? <EnabledArrowRight /> : <DisabledArrowLeft className='rotate' />}
          </Button>
        </div>
      : <></>}
    </div>
  );
}
