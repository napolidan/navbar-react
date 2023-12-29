import React from "react";
import { faArrowRight, faPaperPlane, faBars, faMicrochip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopContainer = (props) => {
    return (

        <div className="topContainer d-flex flex-row justify-content-between text-center">
            <div className="left d-flex flex-row">

                <div className="hamburguer">
                    <button id="hamburguer" onClick={() => props.onLogoClick()}>
                        <FontAwesomeIcon icon={faArrowRight} className="hamburguerIcon fa-fw fs-5 iconHiding"/>
                        <FontAwesomeIcon icon={faBars} className="hamburguerIcon"/>
                    </button>
                </div>


                <div className="d-flex flex-row paper">
                    
                    <button><FontAwesomeIcon icon={faMicrochip} className="fa-fw fs-5"/></button>
                    <h1>NavBr</h1>
                </div>
                

            </div>
            
            <div className="right d-flex pe-2">
                <div className="round d-flex">
                    <h6>Da</h6>
                </div>
            </div>
        </div>
        
    )
}

export default TopContainer