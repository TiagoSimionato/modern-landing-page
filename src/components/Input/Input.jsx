//Images
import {ReactComponent as Arrow} from 'assets/images/arrow-right.svg';
import phone from 'assets/images/icons/phone.svg';
//Components
import Button from 'components/Button';

export function Input() {
  return (
    <div className="flex gap-2.5 xl:justify-start">
      <input className="
        bg-lightgray
        text-darkgray
        rounded-3xl
        p-4

        xl:min-w-[392px]
      " type="text" placeholder="Infrara Favis." />
      {window.innerWidth >= 1440 ?
        <>
          <Button OtherStyles={`
            xl:w-[133px]
            text-letstalk
            tel
            relative
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
        </>
        :
        <Button bg='bg-buttonbg' label='Submit Search'>
          <Arrow />
        </Button>
      }
    </div>
  );
}
