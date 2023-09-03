import logo from 'assets/images/LOGO.png';
import MenuButton from 'components/MenuButton';

export function Header() {
  return (
    <header className='flex items-center justify-between px-4 py-7'>
      <img src={logo} alt="Soft Everywhere" className='w-[87px]' />

      <MenuButton />
    </header>
  );
}
