import React, { useState } from "react";
import MainContainer from "./components/MainContainer";
import TopContainer from "./components/TopContainer";
import { faArrowRight, faBars } from "@fortawesome/free-solid-svg-icons";


const App = () => {
    
    const [className,setClassName] = useState('');
    const [icon, setIcon] = useState(faArrowRight)

    const handleLogoClick = () => {
        setClassName(className == '' ? 'open' : '')
        setIcon(icon == faArrowRight ? faBars : faArrowRight)
        console.log(icon)
    }
    
    return (
        <>
            <TopContainer onLogoClick={handleLogoClick} icon={icon}/>
            <MainContainer className={className}/>
        </>
    )
}

export default App