import { useState } from "react";
//Images
import arrow from 'assets/images/icons/selectDown.svg';

export function Help() {

  const [display, setActive] = useState('hidden');

  function toggleDisplay() {
    if (display === 'hidden') {
      setActive('');
    } else {
      setActive('hidden');
    }
  }

  return (
    <section className="
      flex
      flex-col
      items-center
      gap-6
      px-4
      pt-[93.06px]
      pb-[242.99px]
      text-center

      md:px-8
      md:pt-[72px]
      md:pb-[199px]

      xl:px-[100px]
    ">
      <h2 className="font-semibold text-40p/[52px]">FAQ</h2>
      <div
        onClick={toggleDisplay}
        className="
          font-semibold
          w-full
          bshadow
          bg-white
          relative
        "
      > {/**Select menu */}
        <div className="
          flex
          justify-between
          items-center
          py-6
          cursor-pointer
        "> {/**Select btn */}
          <span>Accordion title</span>
          <img
            src={arrow}
            aria-hidden='true'
            alt="Seta da lista de seleção"
            className={`${display === 'hidden' ? '' : 'rotate-180'}`}
          />
        </div>

        <ul className={`
          ${display}
          font-normal
          text-[14px]/[24px]
          text-left
          text-[#4A4F58]
          absolute
        `}>
          <li className="cursor-pointer py-6">Este conteúdo existe apenas para ser substituído pelo conteúdo que você precisar trabalhar. Para isso crie um componente local.</li>
        </ul>
      </div>
    </section>
  );
}
