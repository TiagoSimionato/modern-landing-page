//Images
import {ReactComponent as Arrow} from 'assets/images/arrow-right.svg'

export function Input() {
  return (
    <div className="flex gap-2.5">
      <input className="bg-lightgray text-darkgray rounded-3xl p-4" type="text" placeholder="Infrara Favis." />
      <button className='bg-buttonbg rounded-full w-16 h-16 flex items-center justify-center'>
        <Arrow />
      </button>
    </div>
  );
}
