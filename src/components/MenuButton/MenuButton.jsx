import { ReactComponent as MenuIcon } from "assets/images/align-center.svg";

export function MenuButton({style, onClick}) {
  return (
    <div className={`flex gap-2 w-[77px] h-6 ${style}`} onClick={event => onClick(event)}>
      <MenuIcon/>
      <button id="menu">Menu</button>
    </div>
  );
}
