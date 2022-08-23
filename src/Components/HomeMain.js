import React from "react"
import {Link} from 'react-router-dom'
import'./HomeMainStyles.css'
import heroReelVideo from '../assets/heroReel.mp4'

function HomeMain(){
    return(
        <div className='hero'>
           <video autoPlay loop muted id='video'>
            <source src={heroReelVideo} type='video/mp4'/>
           </video>
        <div className="about">
            <h1>Kellum Davis</h1>
            <p>Software Engineer Actor Creator</p>
        </div>
        </div>
    )
}

export default HomeMain;