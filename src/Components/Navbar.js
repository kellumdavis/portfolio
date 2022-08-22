import React from 'react'
import {Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

function NavBar(){
    return(
        <div className ='header'>
            <Link to='/'><h1>KD</h1></Link>
            <ul className='nav-menu'>
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
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
            <div className='hamburger'>
                <FaBars />
            </div>
            <p>this is navbar</p>
        </div>
    )
}

export default NavBar;