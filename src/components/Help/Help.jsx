export function Help() {
  return (
    <section className="
      flex
      flex-col
      items-center
      gap-6
      px-4
      pt-[90px]
      pb-[246px]
      text-center

      md:px-8

      xl:px-[100px]
    ">
      <label className="font-semibold text-40p">FAQ</label>
      <div className="
        font-semibold
        w-full
        bshadow
        pb-6
        bg-white
      ">
        <select className="w-full" name="" id="faq">
          <option className="" value="">Accordion title</option>
          <option value="">Este conteúdo existe apenas para ser substituído pelo conteúdo que você precisar trabalhar. Para isso crie um componente local.</option>
        </select>
      </div>
    </section>
  );
}
