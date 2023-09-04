import logo from 'assets/images/LOGO.png';
import Button from 'components/Button';
import MenuButton from 'components/MenuButton';
import { useState } from 'react';

export function Header() {
  const [menuVisibility, setMVisibility] = useState('hidden');

  function changeMVisibility() {
    if (menuVisibility === 'hidden') {
      setMVisibility('');
    } else {
      setMVisibility('hidden');
    }
  }

  return (
    <header className={`
      flex
      items-center
      justify-between
      px-4
      py-7
      relative
    `}>
      <img src={logo} alt="Soft Everywhere" className='w-[87px]' />

      <MenuButton onClick={changeMVisibility} />

      <nav className={`
        ${menuVisibility}
        absolute
        top-[86px]
        right-0
        z-10
        w-[343px]
        bg-white
        pb-4
        font-medium
        capitalize


      `}>
        <ul className='
          flex
          flex-col
        '>
          <li className='p-6'><a href='#vuv'>Bende ajyvåsa.</a></li>
          <li className='p-6'><h3>Sutesm asonat.</h3></li>
          <li className='p-6'><h3>Ding pararat.</h3></li>
          <li className='p-6'><h3>Teleska.</h3></li>
          <li className='px-6 py-2.5'><Button OtherStyles='w-[126px] h-[52px] p-0 text-white' bg='bg-blue hover:bg-bluehover'>Try It Now</Button></li>
        </ul>
      </nav>
    </header>
  );
}
