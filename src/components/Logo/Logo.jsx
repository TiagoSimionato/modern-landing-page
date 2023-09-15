import {ReactComponent as LogoEllipse} from 'assets/images/logo/ellipse.svg';
import {ReactComponent as LogoPolygon} from 'assets/images/logo/polygon.svg';

export function Logo({scale}) {
  return (
    <div className={`
      logo
      flex
      items-center
      font-bold
      tracking-[-2px]
      text-[28.235px]
      ${scale}
    `}>
    <LogoEllipse />
    <LogoPolygon />
    <span>Test</span>
  </div>
  );
}
