import React, { useEffect, useState } from "react";
import SideNavbar from "../Components/SideNavbar";
import "../Components/SideNavbar.css";
import MainNavBar from "../Components/MainNavbar";
import {Row, Col } from "react-bootstrap";
import StudentsTable from "../Components/StudentTable";
import { notify } from "../services/toastify";
import { fetchAll } from "../services/getRequest";

const TotalStudents = () => {


    const[studentsData,setStudentsData] = useState([]);

    useEffect(()=>{

        fetchAll().then((res)=>{

             if(res.data.Success === 'True'){
                  
                  setStudentsData(res.data.students);
             }else{
                
                 notify(res.data.Message,'warning');
             }
        }).catch((err)=>{
             
             notify(err.response.data.Message,'error');
        })
   },[])
  return (
    <>
      <SideNavbar />
      <MainNavBar />
      <main style={{ marginTop: "58px" }}>
        <div className="container pt-4">
         <StudentsTable TableData = {studentsData} />
        </div>
      </main>
    </>
  );
};

export default TotalStudents;
