import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './NavbarStyles.css'
function NavBar(){
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)


    


    return(
        <div className ='header'>
            <a href='#home'><h1>KD</h1></a>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <a href='#home'>Home</a>
                </li>
                <li>
                    <a href='#about'>About</a>
                </li>
                <li>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{color: 'fff'}}/>) : (<FaBars size={20} style={{color: 'fff'}}/>)}
                
            </div>
            
        </div>
    )
}

export default NavBar;