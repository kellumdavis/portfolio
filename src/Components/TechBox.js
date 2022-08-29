import React from "react";
import "./TechBox.css"



function TechBox({title, icon}){
    return(
        <div>
            <span>{icon}</span>
            <h3>{title}</h3>
            
        </div>
    )
}

export default TechBox;