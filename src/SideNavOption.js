import React from "react"
import "./SideNavOption.css"


function SideNavOption({active, text, Icon}){
    {/* Options + Hover + responsivity */}
    return(
        <div className={`sidenavoption ${active && 'sidenavoption--active'}`}>
            <Icon/>
            <h3>{text}</h3>
        </div>
    )
    
}

export default SideNavOption
