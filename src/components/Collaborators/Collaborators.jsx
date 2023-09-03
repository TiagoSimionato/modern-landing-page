//Info
import collaborators from "./collaborators-info";
//Colaborators
import Carousel from "components/Carousel";

export function Collaborators() {
  return (
    <section className="text-center px-4 py-72p relative">
      <h2 className="text-40p font-medium">Kroser. Vak. Vöherar.Mikrolig. </h2>
      <p className="text-lg/[32px] capitalize mb-3 mb-6">
        Use this section to describe your company 
      </p>

      <Carousel items={collaborators}/>
    </section>
  );
}
