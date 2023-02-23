import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboard, faChalkboardTeacher, faFileArrowDown, faPerson, faRightFromBracket, faUser, faUserGroup, faUsers } from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from 'react-router-dom'


const NavBar = (props) => {

    const navigate= useNavigate()

    const CustomLink=(props)=> {
        const path = window.location.pathname;
        const visibility = props.visibility==='visible' ? 'not-hide' : 'hide'
        
        const active = props.href === path ? 'isActive' : ''
        return (
            <li className={`${active} ${visibility}`}>
                <button draggable='false' className="text-decoration-none fs-5 usButton" onClick={()=>navigate(props.href)}>
                    <FontAwesomeIcon icon={props.icon} className="i"/>
                    <span>{props.span}</span>
                </button>
            </li>
        )
    }

    const OpenLink=(props)=> {
        return (
            <li className="visible">
                <button draggable='false' className="text-decoration-none fs-5 usButton" onClick={props.onClick}>
                    <FontAwesomeIcon icon={props.icon} className="i"/>
                    <span>{props.span}</span>
                </button>
            </li>
        )
    }

    return (        
        <div id="sideBar" className={`sideBar user-select-none no-drag ${props.className}`}>
            <div className="wrapper d-flex">
                <ul className="list-unstyled">

                    <CustomLink visibility='visible' href='/classrooms' icon={faChalkboard} name='home' span='Classrooms'></CustomLink>
                    <CustomLink visibility='visible'  href='/teachers' icon={faChalkboardTeacher} name='home' span='Teachers'></CustomLink>
                    <CustomLink visibility='visible'  href='/students' icon={faUserGroup} name='home' span='Students'></CustomLink>
                    <CustomLink visibility='visible'  href='/parents' icon={faPerson} name='home' span='Parents'></CustomLink>
                    <CustomLink visibility='visible'  href='/files' icon={faFileArrowDown} name='home' span='Files'></CustomLink>

                    <div className="d-flex flex-column-reverse">
                        <CustomLink visibility='not visible'  href='/administrators' icon={faUser} name='home' span='Administrators'></CustomLink>
                        <CustomLink visibility='not visible'  href='/educational-center' icon={faUser} name='home' span='Educational Center'></CustomLink>
                        <OpenLink onClick={() => props.openSideBar()} href='#' icon={faUser} name='home' span='Management'></OpenLink>
                    </div>

                    <CustomLink visibility='visible' href='/logout' icon={faRightFromBracket} name='home' span='Log out'></CustomLink>
                </ul>
            </div> 
        </div>
    )
}

export default NavBar