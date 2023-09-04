import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "components/Footer";

export function StandardPage() {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}
