export function Help() {
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
      md:pt-32
      md:pb-[333px]
    ">
      <label className="font-semibold text-40p/[52px]">FAQ</label>
      <div className="
        font-semibold
        w-full
        bshadow
        bg-white
        helpSelect
      ">
        <select className="w-full select-arrow p-6" name="" id="faq">
          <option className="font-semibold" value="">Accordion title</option>
          <option value="">Este conteúdo existe apenas para ser substituído pelo conteúdo que você precisar trabalhar. Para isso crie um componente local.</option>
        </select>
      </div>
    </section>
  );
}
