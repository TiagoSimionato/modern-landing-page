import logo from 'assets/images/LOGO.png';
import {ReactComponent as Facebook} from 'assets/images/icons/facebook.svg';
import {ReactComponent as Instagram} from 'assets/images/icons/instagram.svg';
import {ReactComponent as Twitter} from 'assets/images/icons/twitter.svg';

export function Footer() {
  return (
    <footer className='flex flex-col items-center gap-8 bg-partnersbg pt-24 pb-12'>
      <img src={logo} alt="Soft Everywhere" className='w-[120px]' />
      <nav>
        <ul className='flex gap-8'>
          <li><a href="https://www.instagram.com/"><Facebook /></a></li>
          <li><a href="https://twitter.com/"><Twitter /></a></li>
          <li><a href="https://www.facebook.com/"><Instagram /></a></li>
        </ul>
      </nav>
    </footer>
  );
}
