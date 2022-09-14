import TechBox from "./TechBox";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaSass, FaNodeJs, FaPython } from "react-icons/fa";
import {DiMongodb, DiPostgresql} from 'react-icons/di'
import {SiDjango} from 'react-icons/si'
import './TechStack.css'



function TechStack(){
    return(
        <div className="techTotal">
            <div className="techStackTitle">
                <h1>Tech Stack</h1>
            </div>
            <div className="techstack">
            <div >
            <h2>Front End</h2>
            <ul>
                <li><TechBox title='HTML' icon={<FaHtml5 size={50} />} /></li>
                <li><TechBox title='CSS' icon={<FaCss3Alt size={50}/>} /></li>
                <li><TechBox title='JavaScript' icon={<FaJsSquare size={50}/>} /></li>
                <li><TechBox title='React' icon={<FaReact size={50}/>} /></li>
                <li><TechBox title='Sass' icon={<FaSass size={50}/>} /></li>
            </ul>
            </div>
            <div >
                <h2>Back End</h2>
            <ul>
                <li><TechBox title='Node.js' icon={<FaNodeJs size={50} />} /></li>
                <li><TechBox title='MongoDB' icon={<DiMongodb size={50}/>} /></li>
                <li><TechBox title='PostgreSQL' icon={<DiPostgresql size={50}/>} /></li>
                <li><TechBox title='Django' icon={<SiDjango size={50}/>} /></li>
                <li><TechBox title='Python' icon={<FaPython size={50}/>} /></li>
            </ul>
            </div>
            </div>
        </div>
    )
}

export default TechStack;