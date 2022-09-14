import React from "react";
import "./AboutStyles.css";
import "animate.css/animate.min.css"
import { AnimationOnScroll } from "react-animation-on-scroll";

function About() {
  return (
    <>
        <AnimationOnScroll  animateIn="animate__fadeInRight" animatePreScroll={true} duration={5} animateOnce={true}>
      <div id="about" className="aboutTag">
        
          <h2 >
            I am a Software Engineer with a background in acting and video editing. Web Development is my newest creative venture. I love to build dynamic interactive websites and help people tell their story.
          </h2>
      </div>
        </AnimationOnScroll>
    </>
  );
}

export default About;
