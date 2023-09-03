import { ReactComponent as MenuIcon } from "assets/images/align-center.svg";

export function MenuButton() {
  return (
    <div className="flex gap-2">
      <MenuIcon/>
      <button>Menu</button>
    </div>
  );
}
