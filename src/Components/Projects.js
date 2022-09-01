import React from "react";
import ProjectCard from "./Card";


function Projects(){
    return(
        <div>
            <h1>Projects</h1>
            <ul>
                <li><ProjectCard image="https://github.com/kellumdavis/SixtyThree/raw/main/public/images/screen_shot.png" alt="Project Sixty-Three Image" prjName="Sixty-Three" prjSum="U.S. National Park tracker application that allows users to track which of the 63 National Parks they've been to, earn milestone badges associated with the parks, and make posts and reviews based on their experiences." href="https://sixtythree.herokuapp.com/"/></li>
                <li>B</li>
                <li>C</li>
                <li>D</li>
            </ul>
        </div>
    )
}

export default Projects;