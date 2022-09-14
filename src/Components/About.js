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
            I am a Software Engineer with a background in acting and video editing. Web Development is my newest creative venture. I love to build dynamic interactive websites and help people tell their story.
          </h2>
      </div>
        </AnimationOnScroll>
    </>
  );
}

export default About;
