import React, { useEffect, useState } from "react";
import SideNavbar from "../Components/SideNavbar";
import MainNavBar from "../Components/MainNavbar";
import { getStudetsForAttendsPage, uploadAttendanceByFaculty } from "../services/postRequest";
import { notify } from "../services/toastify";
import AttendanceTable from "../Components/AttendanceTable";
import { Row , Col, Button} from 'react-bootstrap'
import Form from "react-bootstrap/esm/Form";
import { dateFormat } from "../services/toModifyDateFormat";


const FacultyAddAttendance = ()=>{

    const[studentsData,setStudentsData] = useState([]);

    const[date,setDate] = useState('');
    const[spinner,setSpinner] = useState(false);


    useEffect(()=>{

         const facultyData = {
            Department : sessionStorage.getItem('Department'),
            Batch : sessionStorage.getItem('Batch'),
            facultyName : sessionStorage.getItem('userName')
         }
         getStudetsForAttendsPage(facultyData).then((res)=>{

              if(res.data.Success === 'True'){
                   
                   setStudentsData(res.data.students);
              }else{
                 
                  notify(res.data.Message,'warning');
              }
         }).catch((err)=>{
              
              notify(err.response.data.Message,'error');
         })
    },[])

    const onHandleChange = (e)=>{
        
        setDate(e.target.value);
    }

    const onSubmit = (present, absent, od)=>{
           
           const dateModified = dateFormat(date);
           console.log(dateModified);
           const data = {
             present : present,
             absent : absent,
             od : od,
             date : dateModified,
             Department : sessionStorage.getItem('Department'),
             facultyID : sessionStorage.getItem('userID'),
             facultyName : sessionStorage.getItem('userName')
           }
           setSpinner(true);
           uploadAttendanceByFaculty(data).then((res)=>{
              
               if(res.data.Success = "True"){
                   
                   notify(res.data.Message,'success');
               }else{
                  notify(res.data.Message,'warning');
               }
           }).catch((err)=>{
                notify(err.response.data.Message,'error');
           }).finally(()=>{
              setSpinner(false);
           })
    }
    return (<>
     <SideNavbar />
     <MainNavBar />
     <main style={{ marginTop: "58px" }}>
        <div className="container pt-4">
             <Row>
                <Col>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={4} style={{ textAlign: "center" }}>
                      <strong>Date</strong>
                    </Form.Label>
                    <Col sm={5}>
                      <Form.Control
                        type="date"
                        value={date}
                        name="date"
                        onChange={onHandleChange}
                        placeholder="Enter today's date"
                        required
                      />
                    </Col>
                  </Form.Group>
                </Col>
             </Row>
             <Row>
               <AttendanceTable TableData ={studentsData} onSubmit={onSubmit} spinner={spinner} />
             </Row>
             
        </div>
      </main>
    </>)
}

export default FacultyAddAttendance;