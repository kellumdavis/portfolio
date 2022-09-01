import React from "react";
import ProjectCard from "./Card";
import './Projects.css'


function Projects(){
    return(
        <div className="projectContainer">
            <div className="projectTitle">
            <h1>Projects</h1>
            </div>
            <div className="projects">
            <ul>
                <li><ProjectCard image="https://github.com/kellumdavis/SixtyThree/raw/main/public/images/screen_shot.png" alt="Project Sixty-Three Image" prjName="Sixty-Three" prjSum="U.S. National Park tracker application that allows users to track which of the 63 National Parks they've been to, earn milestone badges associated with the parks, and make posts and reviews based on their experiences." href="https://sixtythree.herokuapp.com/"/></li>
                <li><ProjectCard image="https://user-images.githubusercontent.com/21118840/169534643-ff8c6935-8442-42e9-a0e3-8ed31ee89537.png" alt="Project Studio Ghibli Image" prjName="Studio Ghibli Films" prjSum="Studio Ghibli Films info site that contains data on all of the Studio Ghible films.(i.e. Description, Directed by, release Date, Rotten Tomatoes Score)" href="https://dashing-marzipan-d541cc.netlify.app/"/></li>
                <li><ProjectCard image="https://user-images.githubusercontent.com/21118840/163078678-ff97d35a-8d29-44d2-a3c9-23c5a0a71128.png" alt="War Card Game" prjName="War Card Game" prjSum="This is the card game war. A full deck of 52 cards is divided evenly between the player and the computer. They then go head to head placing one card at a time from their respective decks, with the highest card winning the match. The winner takes both cards into their deck and play continues for 26 rounds. The player with the most cards in their hand at the end wins!" href="https://kellumdavis.github.io/WarCardGame/"/></li>
                <li><ProjectCard image="https://user-images.githubusercontent.com/21118840/188018206-761cad8c-3302-4476-987b-2e166954a380.png" alt="Project Tic-Tac-Toe" prjName="Tic-Tac-Toe" prjSum="The game of Tic-Tac-Toe. Play with a friend and keep track of your wins!" href="https://kellumdavis.github.io/tictactoe/"/></li>
                
            </ul>
            </div>
        </div>
    )
}

export default Projects;