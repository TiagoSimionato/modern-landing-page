//Components
import AboutUs from "components/AboutUs";
import Banner from "components/Banner";
import HowItWorks from "components/HowItWorks";
import Testimonial from "components/Testimonial";
import Help from "components/Help";
import Partners from "components/Partners";
import OurWork from "components/OurWork";
import Commitments from "components/Commitments";

export function Home() {
  return (
    <>
      <Banner />
      <Partners />
      <Commitments />
      <HowItWorks />
      <OurWork />
      <AboutUs />
      <Testimonial />
      <Help />
    </>
  );
}
