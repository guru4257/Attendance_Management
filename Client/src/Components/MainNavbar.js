import React from "react";
import { IoMdNotifications } from "react-icons/io";

import { Button } from 'react-bootstrap'
import { logOut } from "../services/getRequest";
import { notify } from "../services/toastify";
import { useNavigate } from "react-router-dom";

const MainNavBar = () => {


   const navigate = useNavigate();
   
  //logic for logout
  const logout = async ()=>{
    
    logOut().then((res)=>{
      
          sessionStorage.clear();
          navigate('/');
    });
  }
  return (
    <nav
      id="main-navbar"
      className="navbar navbar-expand-lg navbar-light bg-lightblue fixed-top"
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <a className="navbar-brand" href="#">
          <h3>Attendance</h3>
        </a>

        <ul className="navbar-nav ms-auto d-flex flex-row">
          
          <li className="nav-item">
            <a className="nav-link me-3 me-lg-0" href="#">
              <i className="fas fa-fill-drip"></i>
            </a>
          </li>

          <li className="nav-item me-6 me-lg-5">
            <Button style={{backgroundColor:"white",color:"black",height:"35px",width:'35px',border:'none'}}>
                <IoMdNotifications />
            </Button>
          </li>

          <li className="nav-item me-6 me-lg-5 ">
            <h5>{sessionStorage.getItem('userName')}</h5>
          </li>
          <li className="nav-item me-3 me-lg-0">
               <Button onClick={logout}><strong>Log Out</strong></Button>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default MainNavBar;
