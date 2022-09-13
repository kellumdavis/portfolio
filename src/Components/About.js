import React from "react";
import "./AboutStyles.css";
import "animate.css/animate.min.css"
import { AnimationOnScroll } from "react-animation-on-scroll";

function About() {
  return (
    <>
        <AnimationOnScroll  animateIn="animate__fadeIn" animatePreScroll={false} duration={5}>
      <div id="about" className="aboutTag">
          <h2 animateIn='animate__fadeInDown'>
            I am a Front-End Developer/Software Engineer who enjoys creating
            things and helping people.
          </h2>
      </div>
        </AnimationOnScroll>
    </>
  );
}

export default About;
