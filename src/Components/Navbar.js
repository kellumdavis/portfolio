import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './NavbarStyles.css'
function NavBar(){
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)


    


    return(
        <div className ='header'>
            <Link to='/'><h1>KD</h1></Link>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/projects'>Projects</Link>
                </li>
                <li>
                    <Link to='.contactForm'>Contact</Link>
                </li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{color: 'fff'}}/>) : (<FaBars size={20} style={{color: 'fff'}}/>)}
                
            </div>
            
        </div>
    )
}

export default NavBar;