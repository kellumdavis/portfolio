import React from "react"
import {Link} from 'react-router-dom'
import'./HomeMainStyles.css'
import heroReelVideo from '../assets/heroReel.mp4'


function HomeMain(){



    return(
        <div className='hero'>
            <div className="about animate__fadeInLeft">
                <h1>Kellum Davis</h1>
                <p>Software Engineer / Actor / Creator</p>
            </div>   
           <video autoPlay loop muted id='video' className="animate__fadeInLeft">
            <source src={heroReelVideo} type='video/mp4'/>
           </video>
        </div>
    )
}

export default HomeMain;