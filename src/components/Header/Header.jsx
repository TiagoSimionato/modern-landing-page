import logo from 'assets/images/LOGO.png';
import MenuButton from 'components/MenuButton';

export function Header() {
  return (
    <header className='flex items-center justify-between px-4 py-18p'>
      <img src={logo} alt="" />

      <MenuButton />
    </header>
  );
}
