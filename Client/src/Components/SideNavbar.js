import React from "react";
import "./SideNavbar.css";
import {Link} from "react-router-dom";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoPersonAddSharp } from "react-icons/io5";
import { GrChapterAdd } from "react-icons/gr";
import { GiTeacher } from "react-icons/gi";

const SideNavbar = () => {

  const userType = 'Admin';
  //  sessionStorage.getItem('userType');
  return (
    <nav id="sidebarMenu" className ="collapse d-lg-block sidebar collapse bg-white">
    <div className ="position-sticky">
      <div className ="list-group list-group-flush mx-3 mt-4">
        { userType === 'Admin' || userType === 'Faculty'?(
          <Link to="/dashboard" className ="list-group-item list-group-item-action py-4 ripple" aria-current="true">
          <MdOutlineDashboardCustomize />  <span><strong>Dashboard</strong></span>
          </Link>
        ):(null)}
        { userType === 'Admin' && (<>
           <Link to="/admin/addStudent" className ="list-group-item list-group-item-action py-4 ripple"><IoPersonAddSharp />  <span><strong>Add Students</strong></span>
           </Link>
           <Link to="/admin/addClass" className ="list-group-item list-group-item-action py-4 ripple"><GrChapterAdd />  <span><strong>Add Class</strong></span></Link>
           <Link to="/admin/addFaculty" className ="list-group-item list-group-item-action py-4 ripple"><IoPersonAddSharp />  <span><strong>Add Faculty</strong></span>
           </Link>
           <Link to="/admin/assignFaculty" className ="list-group-item list-group-item-action py-4 ripple"><GiTeacher />  <span><strong>Assign Faculty</strong></span>
           </Link>
           </>
        )}
        {/* <Link to="#" className ="list-group-item list-group-item-action py-2 ripple active">
          <i className ="fas fa-chart-area fa-fw me-3"></i><span>Webiste traffic</span>
        </Link> */}
        
        <Link to="#" className ="list-group-item list-group-item-action py-4 ripple">
          <i className ="fas fa-chart-pie fa-fw me-3"></i><span>SEO</span>
        </Link>
        <Link to="#" className ="list-group-item list-group-item-action py-4 ripple"><i
            className ="fas fa-chart-bar fa-fw me-3"></i><span>Orders</span></Link>
        <Link to="#" className ="list-group-item list-group-item-action py-4 ripple"><i
            className ="fas fa-globe fa-fw me-3"></i><span>International</span></Link>
        <Link to="#" className ="list-group-item list-group-item-action py-4 ripple"><i
            className ="fas fa-building fa-fw me-3"></i><span>Partners</span></Link>
        <Link to="#" className ="list-group-item list-group-item-action py-4 ripple"><i
            className ="fas fa-calendar fa-fw me-3"></i><span>Calendar</span></Link>
        <Link to="#" className ="list-group-item list-group-item-action py-4 ripple"><i
            className ="fas fa-users fa-fw me-3"></i><span>Users</span></Link>
        <Link to="#" className ="list-group-item list-group-item-action py-4 ripple"><i
            className ="fas fa-money-bill fa-fw me-3"></i><span>Sales</span></Link>
      </div>
    </div>
  </nav>
  );
};


export default SideNavbar;