import React from "react";
import "./AboutStyles.css";
import "animate.css/animate.min.css"
import { AnimationOnScroll } from "react-animation-on-scroll";

function About() {
  return (
    <>
      <div className="aboutTag">
        <AnimationOnScroll  animateIn="animate__fadeIn" animatePreScroll={false} duration={5}>
          <h2>
            I am a Front End Developer/Software Engineer who enjoys creating
            things and helping people.
          </h2>
        </AnimationOnScroll>
      </div>
    </>
  );
}

export default About;
