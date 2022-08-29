import TechBox from "./TechBox";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";

function TechStack(){
    return(
        <div>
            <div>
                <h1>Tech Stack</h1>
            </div>
            <ul>
                <li><TechBox title='HTML' icon={<FaHtml5 size={50} />} /></li>
                <li><TechBox title='CSS' icon={<FaCss3Alt size={50}/>} /></li>
                <li><TechBox title='JavaScript' icon={<FaJsSquare size={50}/>} /></li>
                <li><TechBox title='React' icon={<FaReact size={50}/>} /></li>
            </ul>
        </div>
    )
}

export default TechStack;