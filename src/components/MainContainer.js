import React from "react";
import { faChalkboard, faChalkboardTeacher, faFileArrowDown, faPerson, faRightFromBracket, faUser, faUserGroup, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const MainContainer = (props) => {
    
    return (
        <div className="mainContainer">

            <div id="sideBar" className={`sideBar user-select-none no-drag ${props.className}`}>
                <div className="wrapper d-flex">
                    <ul className="list-unstyled">
                        <li>
                            <a draggable="false" className="text-decoration-none fs-5" href="#">
                                <FontAwesomeIcon icon={faChalkboard} className="i"/>
                                <span>Clasrooms</span>
                            </a>
                        </li>
                        <li>
                            <a draggable="false" className="text-decoration-none fs-5" href="#">
                                <FontAwesomeIcon icon={faChalkboardTeacher} className="i"/>
                                <span>Teachers</span>
                            </a>
                        </li>
                        <li>
                            <a draggable="false" className="text-decoration-none fs-5" href="#">
                                <FontAwesomeIcon icon={faUserGroup} className="i"/>
                                <span>Students</span>
                            </a>
                        </li>
                        <li>
                            <a draggable="false" className="text-decoration-none fs-5" href="#">
                                <FontAwesomeIcon icon={faPerson} className="i"/>
                                <span>Parents</span>
                            </a>
                        </li>
                        <li>
                            <a draggable="false" className="text-decoration-none fs-5" href="#">
                                <FontAwesomeIcon icon={faFileArrowDown} className="i"/>
                                <span>Files</span>
                            </a>
                        </li>
                        <div className="d-flex flex-column-reverse">
                            <li className="hide">
                                <a draggable="false" className="text-decoration-none fs-5" href="#">
                                    <FontAwesomeIcon icon={faUsers} className="i"/>
                                    <span>Administrators</span>
                                </a>
                            </li>
                            <li className="hide">
                                <a draggable="false" className="text-decoration-none fs-5" href="#">
                                    <FontAwesomeIcon icon={faUsers} className="i"/>
                                    <span>Educational Center</span>
                                </a>
                            </li>
                            <li>
                                <a draggable="false" className="text-decoration-none fs-5" href="#">
                                    <FontAwesomeIcon icon={faUsers} className="i"/>
                                    <span>Management</span>
                                </a>
                            </li>
                        </div>
                        <li>
                            <a draggable="false" className="text-decoration-none fs-5" href="#">
                                <FontAwesomeIcon icon={faRightFromBracket} className="i"/>
                                <span>Log out</span>
                            </a>
                        </li>
                    </ul>
                </div> 
            </div>


            <div className="contentContainer p-4 d-flex flex-column flex-grow-1 justify-content-between">

                <div className="content">


                </div>

                <div className="footer bottom-0 text-center text-secondary mt-5 d-grid user-select-none">

                    <div className=""></div>
                    <small>Copyright <span className="text-primary">©</span></small>
                    <div className=""></div>

                </div>
            </div>

        </div>
    )
}

export default MainContainer