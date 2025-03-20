import { ReactComponent as MenuIcon } from "assets/images/align-center.svg";

export function MenuButton({style, onClick}) {
  return (
    <div id="menu" className={`flex gap-2 w-[77px] h-6 cursor-pointer ${style}`} onClick={onClick}>
      <MenuIcon/>
      <button>Menu</button>
    </div>
  );
}
