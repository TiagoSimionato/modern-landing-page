import logo from 'assets/images/LOGO.png';
import {ReactComponent as Facebook} from 'assets/images/icons/facebook.svg';
import {ReactComponent as Instagram} from 'assets/images/icons/instagram.svg';
import {ReactComponent as Twitter} from 'assets/images/icons/twitter.svg';

export function Footer() {
  return (
    <footer className='
      flex
      flex-col
      items-center
      gap-8
      bg-partnersbg
      pt-24
      pb-12

      md:flex-row
      md:justify-between
      md:px-8
      md:pt-[100px]
      md:pb-[52px]
    '>
      <img src={logo} alt="Soft Everywhere" className='w-[120px]' />
      <nav>
        <ul className='flex gap-8'>
          <li><a href="https://www.instagram.com/" aria-label='Instagram Website'><Instagram /></a></li>
          <li><a href="https://twitter.com/" aria-label='Twitter Website'><Twitter /></a></li>
          <li><a href="https://www.facebook.com/" aria-label='Facebook Website'><Facebook /></a></li>
        </ul>
      </nav>
    </footer>
  );
}
