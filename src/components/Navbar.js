import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "../css/Navbar.css";
// import './Profilejquery'
import logo from "../logo/Aayojak-logos (1)/Aayojak-logos_white.png";
export default function Navbar() {
  const [logout_status,change]=useState(false);
  const logout=()=>{
    localStorage.removeItem('jwt')
    change(true);
  }

  if(logout_status=== true)
    return <Navigate to="/"></Navigate>
  return (
    <div>
          <div className="nav-bar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand logo" href="/">
                <img src={logo} alt="logo" />
              </a>
              {/* <button type="button" id="sidebarCollapse" class="btn btn-info">
                <i class="fas fa-align-left"></i>
               {/* <span>Toggle Sidebar</span>  
              </button>
              <button
                class="btn btn-dark d-inline-block d-lg-none ml-auto"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="true"
                aria-label="Toggle navigation"
              >
                <i class="fas fa-align-justify"></i>
              </button> */}
              <div className="column3">
              <button className="logutbtn my-3" onClick={logout}>LOGOUT</button>
              </div>
            </nav>
          </div>
         
    </div>
  );
}
