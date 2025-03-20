//Images
import { ReactComponent as Arrow } from 'assets/images/arrow-right.svg';
import phone from 'assets/images/icons/phone.svg';
//Components
import Button from 'components/Button';

export function Input() {
  return (
    <div className={`flex flex-wrap w-full gap-2 xl:gap-8 xl:justify-start`}>
      <input className={`
        bg-lightgray
        text-darkgray
        rounded-3xl
        flex-grow
        p-4
        w-1
      `} type="text" placeholder="Infrara Favis." />
      <Button OtherStyles={`
        xl:w-[133px]
        text-letstalk
        tel
        relative
        hidden
        xl:flex
      `} bg='bg-buttonbg' label='Submit Search' onClick={() => {}}>
        Let's Talk
        <Button OtherStyles={`
          xl:w-[167px]
          text-letstalk
          tel-hidden
          text-left
          xl:justify-start
          xl:items-center
          absolute
          left-0
        `} bg='bg-buttonbg' label='Submit Search' onClick={() => {}}>
          <span className='xl:ml-8 xl:mr-3'>Let's Talk</span>
          <img className='inline' src={phone} alt="Phone Icon" />
        </Button>
      </Button>
      <Button bg='xl:hidden bg-buttonbg' label='Submit Search'>
        <Arrow />
      </Button>
    </div>
  );
}
