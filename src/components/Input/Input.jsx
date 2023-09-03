//Images
import {ReactComponent as Arrow} from 'assets/images/arrow-right.svg';
import Button from 'components/Button';

export function Input() {
  return (
    <div className="flex gap-2.5">
      <input className="bg-lightgray text-darkgray rounded-3xl p-4" type="text" placeholder="Infrara Favis." />
      <Button bg='bg-buttonbg'>
        <Arrow />
      </Button>
    </div>
  );
}
