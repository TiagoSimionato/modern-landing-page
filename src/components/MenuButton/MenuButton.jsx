import { ReactComponent as MenuIcon } from "assets/images/align-center.svg";

export function MenuButton({style, onClick}) {
  return (
    <div className={`flex gap-2 ${style}`}>
      <MenuIcon/>
      <button id="menu" onClick={event => onClick(event)}>Menu</button>
    </div>
  );
}
