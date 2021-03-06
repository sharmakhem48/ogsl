import React from "react";

import IndexHeader from "../../components/Headers/IndexHeader.js";
// sections for this page
import Carousel from "./Carousel.js";
import ResponsivePlayer from "./Videosection.js";
import Contact from "./Contact.js";
import About from "./About.js";
import Reviewpage from './Review-page.js';



const Homepage =() => {
  return (
    <div className='homepage'>
    <IndexHeader />
      <Carousel/>
      <ResponsivePlayer />
      <About />
      <Contact />
      </div>
  );
}

export default Homepage;
