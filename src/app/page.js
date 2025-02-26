import Faq from "./Components/Global/Faq/Faq";
import Testimonial from "./Components/Global/Testimonial/Testimonial";
import About from "./Components/Homepage/About/About";
import Banner from "./Components/Homepage/Banner/Banner";
import ExpertSection from "./Components/Homepage/Expert/ExpertSection";
import MobileSection from "./Components/Homepage/MobileSection/MobileSection";
import Program from "./Components/Homepage/Programs/Program";
import RatingSection from "./Components/Homepage/RatingSection/RatingSection";
import WhatWeDo from "./Components/Homepage/WhatWeDo/WhatWeDo";

export const metadata = {
  title: "Career Bruh | Career Guidance",
  description: "Career Guidance is a platform for students to connect with each other and share their knowledge.",
};

export default function Home({ size }) {

  return (
    <div>
      <Banner />
      <Program />
      <RatingSection />
      <ExpertSection />
      <WhatWeDo size={size} />
      <Testimonial />
      <MobileSection />
      <About/>
      <Faq/>
      
    </div>
  );
}
