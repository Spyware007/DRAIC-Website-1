import React from "react";
import HomeProject from "./Home Projects/Projects-home";

import Landingslide from "../Components/LandingSlide/Landingslide";
import HomeAbout from "./Home About Us/Home-aboutus.jsx";
import Dec2 from "./CoreTeam/deck2";

import Teacher from "./Teacher/Teacher";
import Testimonials from "./Testimonials/Testimonials";
import Event from "./Events/Event";
import Test from "./Test/Test";
function Home() {
  return (
    <div>
      <Landingslide />
      <Event />
      <HomeAbout />
      <Teacher />
      <Dec2 />
      {/* <Testimonials /> */}
      <Test />
      <HomeProject />
      {/* <Creators /> */}
    </div>
  );
}

export default Home;
