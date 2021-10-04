import React from "react";
import "./Header.css";
import logo from '../../images/icon.png';
import { NavLink } from "react-router-dom";

const Header = () =>{
    const style = {
        fontWeight: "bold",
        color: "#3870b3"
      };
    return(
        <div className="pt-4 rounded header">
            
            <div className="d-flex justify-content-start">
                <img className="logo" src={logo} alt="" />
                <div style={{lineHeight:'8px'}} className="title ms-2">
                    <h4 className="fw-bold">Tech Learning</h4>
                    <p>Pathshala</p>
                </div>
            </div>

            <nav className="navbar py-1 mt-3">
                <NavLink to="/home" activeStyle={style} className="link">HOME</NavLink>
                <NavLink to="/courses" activeStyle={style} className="link">COURSES</NavLink>
                <NavLink to="/feedback" activeStyle={style} className="link">STUDENT'S FEEDBACK</NavLink>
                <NavLink to="/about" activeStyle={style} className="link">ABOUT US</NavLink>
            </nav>
        
        </div>
    );
}

export default Header;