import { ReactComponent as MenuIcon } from "assets/images/align-center.svg";

export function MenuButton({style, onClick}) {
  return (
    <div className={`flex gap-2 ${style}`}>
      <MenuIcon/>
      <button onClick={onClick}>Menu</button>
    </div>
  );
}
