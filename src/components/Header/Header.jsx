import logo from 'assets/images/LOGO.png';
import Button from 'components/Button';
import MenuButton from 'components/MenuButton';

export function Header({changeMVisibility, menuVisibility}) {
  return (
    <header className={`
      bg-invwhite
      flex
      items-center
      justify-between
      px-4
      py-7
      sticky
      top-0
      z-10

      xl:px-[100px]
      xl:py-3
    `}>
      <img src={logo} alt="Soft Everywhere" className='w-[87px]' />

      <MenuButton style='xl:hidden' onClick={changeMVisibility} />

      <nav className={`
        ${menuVisibility}
        fixed
        top-[86px]
        right-4
        w-[343px]
        bg-white
        pb-4
        font-medium
        capitalize
        rounded
        bshadow2
        headerBorder

        xl:block
        xl:bg-inv
        xl:shadow-none
        xl:border-0
        xl:static
        xl:w-fit
        xl:pb-0
      `}>
        <ul className='
          flex
          flex-col

          xl:flex-row
          xl:items-center
        '>
          <li className='p-6 xl:py-0'><a href='#vuv'>Bende ajyvåsa.</a></li>
          <li className='p-6 xl:py-0'><h3>Sutesm asonat.</h3></li>
          <li className='p-6 xl:py-0'><h3>Ding pararat.</h3></li>
          <li className='p-6 xl:py-0'><h3>Teleska.</h3></li>
          <li className='px-6 py-2.5'><Button OtherStyles='w-[126px] h-[52px] p-0 text-white xl:ml-[328px]' bg='bg-blue hover:bg-bluehover'>Try It Now</Button></li>
        </ul>
      </nav>
    </header>
  );
}
