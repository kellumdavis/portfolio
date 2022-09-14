import React from "react"
// import {Link} from 'react-router-dom'
import'./HomeMainStyles.css'
import heroReelVideo from '../assets/heroReel.mp4'
import heroReelMov from '../assets/heroReel.mov'
import heroReelAvi from '../assets/heroReel.avi'
function HomeMain(){



    return(
        <div id="home" className='hero'>
            <div className="about animate__fadeInLeft">
                <h1><strong>K</strong>ellum <strong>D</strong>avis</h1>
                <p>/ Front-end Developer / Software Engineer / </p>
            </div>   
           <video autoPlay loop muted id='video' className="animate__fadeInLeft">
            <source src={heroReelAvi} type='video/avi'/>
            <source src={heroReelMov} type='video/mov'/>
            <source src={heroReelVideo} type='video/mp4'/>
           </video>
        </div>
    )
}

export default HomeMain;