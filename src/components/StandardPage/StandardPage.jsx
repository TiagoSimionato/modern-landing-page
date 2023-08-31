import { Outlet } from "react-router-dom";
import Header from "../Header";

export function StandardPage() {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
}
