import {ReactComponent as Facebook} from 'assets/images/icons/facebook.svg';
import {ReactComponent as Instagram} from 'assets/images/icons/instagram.svg';
import {ReactComponent as Twitter} from 'assets/images/icons/twitter.svg';
import Logo from 'components/Logo';

export function Footer() {
  return (
    <footer className='
      flex
      flex-col
      items-center
      gap-8
      bg-[#FAFAFA]
      pt-[95.01px]
      pb-12

      md:flex-row
      md:justify-between
      md:px-8
      md:py-[100px]

      xl:px-[100px]
    '>
      <Logo scale={'scale-125'}/>
      <nav>
        <ul className='flex gap-8 md:gap-4 [&>li]:w-[28px] [&>li]:h-[28px]'>
          <li className='flex items-center justify-center'><a href="https://www.instagram.com/" aria-label='Instagram Website'><Instagram /></a></li>
          <li className='flex items-center justify-center'><a href="https://twitter.com/" aria-label='Twitter Website'><Twitter /></a></li>
          <li className='flex items-center justify-center'><a href="https://www.facebook.com/" aria-label='Facebook Website'><Facebook /></a></li>
        </ul>
      </nav>
    </footer>
  );
}
