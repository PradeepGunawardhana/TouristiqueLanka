import React from "react";
import { Hero } from "../Components/Hero";

import Destination from "../Components/Destination";
import Home_About from "../Components/Home_About";
import Home_WhyChooseUs from "../Components/Home_WhyChooseUs";
import Home_Experiences from "../Components/Home_Experiences";
import Home_Testimonials from "../Components/Home_Testimonials";

function Home() {
  return (
    <>
      <Hero />
      <Home_About/>
      <Destination/>

      <Home_WhyChooseUs/>
      <Home_Experiences/>
      <Home_Testimonials/>




      {/* <Testimonial/> */}
    </>
  );
}

export default Home;
