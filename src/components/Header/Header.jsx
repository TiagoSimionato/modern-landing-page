import logo from 'assets/images/LOGO.png';
import Button from 'components/Button';
import MenuButton from 'components/MenuButton';

export function Header({changeMVisibility, menuVisibility}) {
  return (
    <header className={`
      flex
      py-[18px]
      px-4
      items-center
      justify-between
      sticky
      top-0
      z-10
      bg-invwhite
      backdrop-blur

      md:px-8

      xl:px-[100px]
      xl:py-0
      xl:h-[88px]
    `}>
      <img src={logo} alt="Soft Everywhere" className='w-[87px] h-[32px] md:my-2.5' />

      <MenuButton style='xl:hidden' onClick={changeMVisibility} />

      <nav className={`
        ${menuVisibility}
        flex
        flex-col
        w-[343px]
        fixed
        top-[68px]
        right-4
        bg-white
        pb-4
        capitalize
        rounded-lg
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
          justify-around
          h-[376px]
          pl-6

          xl:h-fit
          xl:flex-row
          xl:items-center
          xl:gap-10
        '>
          <li><a href='#vuv'>Bende ajyvåsa.</a></li>
          <li><h3>Sutesm asonat.</h3></li>
          <li><h3>Ding pararat.</h3></li>
          <li><h3>Teleska.</h3></li>
          <li>
            <Button OtherStyles='
              w-[126px]
              h-[52px]
              p-0
              text-white
              font-medium

              xl:ml-[363px]
            ' bg='bg-blue hover:bg-bluehover'>
              Try It Now
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
