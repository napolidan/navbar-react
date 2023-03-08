import React from "react";
import Navbar from "./NavBar";
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import Footer from "./Footer";
import Accesibilidad from "./routes/Accesibilidad";
import Asesoria from "./routes/Asesoria";
import Ayudas from "./routes/Ayudas";
import AyudasDashboard from "./routes/AyudasDashboard";
import Capacitaciones from "./routes/Capacitaciones";
import CapacitacionesDashboard from "./routes/CapacitacionesDashboard";
import Certificaciones from "./routes/Certificaciones";
import Expedientes from "./routes/Expedientes";
import Famiempresa from "./routes/Famiempresa";
import FamiempresaDashboard from "./routes/FamiempresaDashboard";
import Fodis from "./routes/Fodis";
import FodisDashboard from "./routes/FodisDashboard";
import Orientacion from "./routes/Orientacion";
import Renacer from "./routes/Renacer";
import Subsidios from "./routes/Subsidios";
import SubsidiosDashboard from "./routes/SubsidiosDashboard";


const MainContainer = (props) => {
    
    return (           
        
        <div className="mainContainer">  

            <Router>

                <Navbar className={props.className} openSideBar={props.openSideBar}/>

                <div className="contentContainer p-4 d-flex flex-column flex-grow-1 justify-content-between">

                    <Routes>

                        <Route path='/routes/Accesibilidad' index element={<Accesibilidad />}/>
                        <Route path='/routes/Asesoria' index element={<Asesoria />}/>
                        <Route path='/routes/Ayudas' index element={<Ayudas />}/>
                        <Route path='/routes/AyudasDashboard' index element={<AyudasDashboard />}/>
                        <Route path='/routes/Capacitaciones' index element={<Capacitaciones />}/>
                        <Route path='/routes/CapacitacionesDashboard' index element={<CapacitacionesDashboard />}/>
                        <Route path='/routes/Certificaciones' index element={<Certificaciones />}/>
                        <Route path='/routes/Expedientes' index element={<Expedientes />}/>
                        <Route path='/routes/Famiempresa' index element={<Famiempresa />}/>
                        <Route path='/routes/FamiempresaDashboard' index element={<FamiempresaDashboard />}/>
                        <Route path='/routes/Fodis' index element={<Fodis />}/>
                        <Route path='/routes/FodisDashboard' index element={<FodisDashboard />}/>
                        <Route path='/routes/Orientacion' index element={<Orientacion />}/>
                        <Route path='/routes/Renacer' index element={<Renacer />}/>
                        <Route path='/routes/Subsidios' index element={<Subsidios />}/>
                        <Route path='/routes/SubsidiosDashboard' index element={<SubsidiosDashboard />}/> 
                        <Route
                        path="*"
                        element={
                            <Navigate to="/routes/Accesibilidad" />
                        }
                        />

                    </Routes>

                    <Footer />   

                </div>         

            </Router>

        </div>
        
    )
}

export default MainContainer