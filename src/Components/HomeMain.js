import React from "react"
// import {Link} from 'react-router-dom'
import'./HomeMainStyles.css'
import heroReelVideo from '../assets/heroReel.mp4'


function HomeMain(){



    return(
        <div id="home" className='hero'>
            <div className="about animate__fadeInLeft">
                <h1><strong>K</strong>ellum <strong>D</strong>avis</h1>
                <p>/ Front-end Developer / Software Engineer / </p>
                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyvtoM3n1i82Xd3pEZjtOOTtnDdkgNr8jcBdHNMSM56g&s"></img> */}
            </div>   
           <video autoPlay loop muted id='video' className="animate__fadeInLeft">
            <source src={heroReelVideo} type='video/mp4'/>
           </video>
        </div>
    )
}

export default HomeMain;