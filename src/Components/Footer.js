import {FaGithub, FaLinkedin} from 'react-icons/fa'
import './Footer.css'

function Footer(){
    return(
        <div className='footer'>
            <h4>Kellum Davis</h4>
            <div className='socialLinks'>
            <a className="footAnchor" href="https://github.com/kellumdavis"><FaGithub/></a>
            <a className="footAnchor" href="https://www.linkedin.com/in/kellumdavis/"><FaLinkedin/></a>
            </div>
        </div>
    )
}

export default Footer;