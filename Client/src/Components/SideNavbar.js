import React from "react";
import "./SideNavbar.css";
import {Link} from "react-router-dom";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoPersonAddSharp } from "react-icons/io5";
import { GrChapterAdd } from "react-icons/gr";
import { GiTeacher } from "react-icons/gi";
import { FaEdit } from "react-icons/fa";
import { MdCoPresent } from "react-icons/md";
import { GrDocumentPerformance } from "react-icons/gr";


const SideNavbar = () => {

  const userType = sessionStorage.getItem('userType');
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
        {
          userType === 'Faculty' && (
            <Link to="/faculty/provide/attendance" className ="list-group-item list-group-item-action py-4 ripple"><MdCoPresent />  <span><strong>Upload Attendance</strong></span></Link>
          )
        }
        {
           userType === 'Student' && (
            <Link to="/student/myAttendanceSummary" className ="list-group-item list-group-item-action py-4 ripple">
            <GrDocumentPerformance />  <span><strong>My Attendance</strong></span>
            </Link>
           )
        }
        <Link to="/user/changePassword" className ="list-group-item list-group-item-action py-4 ripple">
        <FaEdit />  <span><strong>Change Password</strong></span>
        </Link>
      </div>
    </div>
  </nav>
  );
};


export default SideNavbar;