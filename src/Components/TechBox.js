import React from "react";
import "./TechBox.css"



function TechBox({title, icon}){
    return(
        <div className="techInline">
            <span>{icon}</span>
            <h3>{title}</h3>
            
        </div>
    )
}

export default TechBox;