import React, { useState } from "react";
import SideNavbar from "../Components/SideNavbar";
import "../Components/SideNavbar.css";
import MainNavBar from "../Components/MainNavbar";
import { Row, Col } from "react-bootstrap";
import "../Pages/Dashboard.css";
import { PiStudentBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { FaUserPen } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [studentDetailsAdmin, setStudentDetailAdmin] = useState({
    studentCount: "",
    facultyCount: "",
    classesCount: "",
  });

  const navigate = useNavigate();
  return (
    <>
      <SideNavbar />
      <MainNavBar />
      <main style={{ marginTop: "58px" }}>
        <div className="container pt-4">
          <Row>
            {sessionStorage.getItem("userType") === "Admin" && (
              <>
                <Col xs={8} md={3}>
                  <div className="card bg-c-blue order-card" onClick={()=>navigate('/admin/allstudents')}>
                    <div className="card-block">
                      <h6 className="m-b-20">Total Students</h6>
                      <h2 className="text-right">
                        <PiStudentBold />
                        &emsp;&emsp;&emsp;<span>486</span>
                      </h2>
                      {/* <p className="m-b-0">
                    Present Today<span className="f-right">351</span>
                  </p> */}
                    </div>
                  </div>
                </Col>
                <Col xs={8} md={3}>
                  <div className="card bg-c-green order-card">
                    <div className="card-block">
                      <h6 className="m-b-20">Faculties</h6>
                      <h2 className="text-right">
                        <GiTeacher />
                        &emsp;&emsp;&emsp;<span>486</span>
                      </h2>
                      {/* <p className="m-b-0">
                    Present Today<span className="f-right">351</span>
                  </p> */}
                    </div>
                  </div>
                </Col>
                <Col xs={8} md={3}>
                  <div className="card bg-c-yellow order-card">
                    <div className="card-block">
                      <h6 className="m-b-20">Attendance Data</h6>
                      <h2 className="text-right">
                        <FaUserPen />
                        &emsp;&emsp;&emsp;<span>486</span>
                      </h2>
                      {/* <p className="m-b-0">
                    Present Today<span className="f-right">351</span>
                  </p> */}
                    </div>
                  </div>
                </Col>
                <Col xs={8} md={3}>
                  <div className="card bg-c-green order-card">
                    <div className="card-block">
                      <h6 className="m-b-20">Faculties</h6>
                      <h2 className="text-right">
                        <GiTeacher />
                        &emsp;&emsp;&emsp;<span>486</span>
                      </h2>
                      {/* <p className="m-b-0">
                    Present Today<span className="f-right">351</span>
                  </p> */}
                    </div>
                  </div>
                </Col>
              </>
            )}
            {sessionStorage.getItem('userType')==='Faculty' && (
              <>
                 <Col xs={8} md={3}>
                  <div className="card bg-c-blue order-card" onClick={()=>navigate('/faculty/studets/page')}>
                    <div className="card-block">
                      <h6 className="m-b-20">Total Students</h6>
                      <h2 className="text-right">
                        <PiStudentBold />
                        &emsp;&emsp;&emsp;<span>486</span>
                      </h2>
                      {/* <p className="m-b-0">
                    Present Today<span className="f-right">351</span>
                  </p> */}
                    </div>
                  </div>
                </Col>
                <Col xs={8} md={3}>
                  <div className="card bg-c-green order-card">
                    <div className="card-block">
                      <h6 className="m-b-20">Attendance Summary</h6>
                      <h2 className="text-right">
                        <GiTeacher />
                        &emsp;&emsp;&emsp;<span></span>
                      </h2>
                      {/* <p className="m-b-0">
                    Present Today<span className="f-right">351</span>
                  </p> */}
                    </div>
                  </div>
                </Col>
              </>
            )}
          </Row>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
