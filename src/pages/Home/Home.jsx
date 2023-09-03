//Components
import AboutUs from "components/AboutUs";
import Banner from "components/Banner";
import Benefits from "components/Benefits";
import Collaborators from "components/Collaborators";
import Footer from "components/Footer";
import Partners from "components/Partners";
import Products from "components/Products";
import Statistics from "components/Statistics";

export function Home() {
  return (
    <>
      <Banner />
      <Partners />
      <Statistics />
      <Benefits />
      <Products />
      <AboutUs />
      <Collaborators />
      <Footer />
    </>
  );
}
