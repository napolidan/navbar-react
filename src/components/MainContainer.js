import React from "react";
import Navbar from "./NavBar";
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import Footer from "./Footer";
import Clasrooms from "./Classroom";
import Teachers from "./Teachers";
import Students from "./Students";
import Parents from "./Parents";
import EdCenter from "./EdCenter";
import LogOut from "./LogOut";
import Administrators from "./Administrators";
import Files from "./Files";


const MainContainer = (props) => {
    
    return (           
        
        <div className="mainContainer">  

            <Router>

                <Navbar className={props.className} openSideBar={props.openSideBar}/>

                <div className="contentContainer p-4 d-flex flex-column flex-grow-1 justify-content-between">

                    <Routes>

                        <Route path='/classrooms' index element={<Clasrooms />}/>
                        <Route path='/teachers' element={<Teachers />} />
                        <Route path='/students' element={<Students />} /> 
                        <Route path='/parents' element={<Parents />} /> 
                        <Route path='/files' element={<Files />} /> 
                        <Route path='/administrators' element={<Administrators />} /> 
                        <Route path='/educational-center' element={<EdCenter />} /> 
                        <Route path='/logout' element={<LogOut />} /> 
                        <Route
                        path="*"
                        element={
                            <Navigate to="/classrooms" />
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