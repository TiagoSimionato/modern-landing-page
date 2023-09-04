import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "components/Footer";
import { useState } from 'react';

export function StandardPage() {
  const [menuVisibility, setMVisibility] = useState('hidden');

  function changeMVisibility(event) {
    if (menuVisibility === 'hidden' && event.target.id === 'menu') {
      setMVisibility('');
    } else {
      setMVisibility('hidden');
    }
  }

  return (
    <main onClick={changeMVisibility}>
      <Header changeMVisibility={changeMVisibility} menuVisibility={menuVisibility} />
      <Outlet />
      <Footer />
    </main>
  );
}
