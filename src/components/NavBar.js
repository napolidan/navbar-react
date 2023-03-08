import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboard, faChalkboardTeacher, faChartColumn, faFileArrowDown, faFileLines, faPerson, faRightFromBracket, faUser, faUserGroup, faUsers, faPeopleArrows, faLightbulb, faHeadset, faMedal } from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from 'react-router-dom'


const NavBar = (props) => {

    const handleLinkClick = () => {
        var elementsParent = document.getElementsByClassName("flex-column-reverse")
        var elements = document.getElementsByClassName("mainLink")
        for(var i = 0; i < elements.length; i++) {
            var isFocused = (document.activeElement === elements[i]);
            if(isFocused) {
                elementsParent[i].classList.toggle('openList')
            }
            else {
                elementsParent[i].classList.remove('openList')
            }
        }
    }

    const navigate= useNavigate()

    const CustomLink=(props)=> {
        const path = window.location.pathname;
        const visibility = props.visibility==='visible' ? 'not-hide' : 'hide'
        
        const active = props.href === path ? 'isActive' : ''
        return (
            <li className={`${active} ${visibility}`}>
                <button draggable='false' className="text-decoration-none fs-5 usButton navigationButton" onClick={()=>navigate(props.href)}>
                    <FontAwesomeIcon icon={props.icon} className="i"/>
                    <span>{props.span}</span>
                </button>
            </li>
        )
    }

    const OpenLink=(props)=> {
        return (
            <li className="visible" onClick={handleLinkClick}>
                <button draggable='false' className="text-decoration-none fs-5 usButton navigationButton mainLink" onClick={props.onClick}>
                    <FontAwesomeIcon icon={props.icon} className="i"/>
                    <span>{props.span}</span>
                </button>
            </li>
        )
    }

    return (        
        <div id="sideBar" className={`sideBar user-select-none no-drag ${props.className}`}>
            <div className="wrapper d-flex">
                <ul className="navList list-unstyled">

                    <div className="d-flex flex-column-reverse">
                        <CustomLink visibility='not visible'  href='/routes/SubsidiosDashboard' icon={faUser} name='home' span='Subsidios económicos'></CustomLink>
                        <CustomLink visibility='not visible'  href='/routes/FodisDashboard' icon={faUser} name='home' span='FODIS'></CustomLink>
                        <CustomLink visibility='not visible'  href='/routes/FamiempresaDashboard' icon={faUser} name='home' span='Fami-Empresa'></CustomLink>
                        <CustomLink visibility='not visible'  href='/routes/AyudasDashboard' icon={faUser} name='home' span='Ayudas técnicas'></CustomLink>
                        <CustomLink visibility='not visible'  href='/routes/CapacitacionesDashboard' icon={faUser} name='home' span='Capacitaciones'></CustomLink>
                        <OpenLink onClick={() => props.openSideBar()} href='#' icon={faChartColumn} name='home' span='Dashboards'></OpenLink>
                    </div>

                    <CustomLink visibility='visible' href='/routes/Expedientes' icon={faFileLines} name='home' span='Expedientes'></CustomLink>

                    <div className="d-flex flex-column-reverse">
                        <CustomLink visibility='not visible'  href='/routes/Ayudas' icon={faUser} name='home' span='Ayudas técnicas'></CustomLink>
                        <CustomLink visibility='not visible'  href='/routes/Capacitaciones' icon={faUser} name='home' span='Capacitaciones'></CustomLink>
                        <CustomLink visibility='not visible'  href='/routes/Orientacion' icon={faUser} name='home' span='Servicios y orientación'></CustomLink>
                        <OpenLink onClick={() => props.openSideBar()} href='#' icon={faPeopleArrows} name='home' span='Dirección de participación ciudadana'></OpenLink>
                    </div>

                    <div className="d-flex flex-column-reverse">
                        <CustomLink visibility='not visible'  href='/routes/Accesibilidad' icon={faUser} name='home' span='Accesibilidad'></CustomLink>
                        <CustomLink visibility='not visible'  href='/routes/Subsidios' icon={faUser} name='home' span='Subsidios económicos'></CustomLink>
                        <CustomLink visibility='not visible'  href='/routes/Fodis' icon={faUser} name='home' span='FODIS'></CustomLink>
                        <CustomLink visibility='not visible'  href='/routes/Famiempresa' icon={faUser} name='home' span='Fami-Empresa'></CustomLink>
                        <OpenLink onClick={() => props.openSideBar()} href='#' icon={faLightbulb} name='home' span='Dirección de equiparación de oportunidades'></OpenLink>
                    </div>

                    <CustomLink visibility='visible'  href='/routes/Asesoria' icon={faHeadset} name='home' span='Asesoría legal'></CustomLink>

                    <div className="d-flex flex-column-reverse">
                        <CustomLink visibility='not visible'  href='/routes/Certificaciones' icon={faUser} name='home' span='Certificaciones'></CustomLink>
                        <CustomLink visibility='not visible'  href='/routes/Renacer' icon={faUser} name='home' span='RENACER'></CustomLink>
                        <OpenLink onClick={() => props.openSideBar()} href='#' icon={faMedal} name='home' span='Certificaciones'></OpenLink>
                    </div>
                </ul>
            </div> 
        </div>
    )
}

export default NavBar