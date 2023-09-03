import { ReactComponent as MenuIcon } from "assets/images/align-center.svg";

export function MenuButton({onClick}) {
  return (
    <div className="flex gap-2">
      <MenuIcon/>
      <button onClick={onClick}>Menu</button>
    </div>
  );
}
