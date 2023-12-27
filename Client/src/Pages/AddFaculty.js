import React, { useState } from "react";
import SideNavbar from "../Components/SideNavbar";
import "../Components/SideNavbar.css";
import MainNavBar from "../Components/MainNavbar";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import Card from "react-bootstrap/esm/Card";
import Container from "react-bootstrap/esm/Container";
import "../Pages/Dashboard.css";
import { addFaculty } from "../services/postRequest";
import { notify } from "../services/toastify";
import { useNavigate } from "react-router-dom";

const AddFaculty = () => {
  // state for Faculty data
  const [faculty, setFaculty] = useState({
    employeeID :'',
    employeeName :'',
    Department : '',
    Password :''
 });

  //state for Loading spinner
  const [spinner, setSpinner] = useState(false);

  const navigate = useNavigate();

  // updating state onHandle Change
  const OnHandleChange = (event) => {
    const { name, value } = event.target;
    setFaculty({ ...faculty, [name]: value });
  };

  //on submitting send request to the server and handling responses
  const onHandleSubmit = (event)=>{
    event.preventDefault();
    console.log(faculty);
    setSpinner(true);
    addFaculty(faculty).then((res)=>{

         if(res.data.Success === 'True'){
              notify(res.data.Message,'success');
              setFaculty({
                employeeID :'',
                employeeName :'',
                Department : '',
                Password :''
             })
         }else{

              notify(res.data.Message,'warning');
         }
    }).catch((err)=>{
          notify(err.response.data.Message,'error');
    }).finally(()=>{
        setSpinner(false);
    })

  }

  return (
    <>
      <SideNavbar />
      <MainNavBar />
      <main style={{ marginTop: "58px" }}>
        <div className="container pt-4">
          <Row>
            <Container>
              <h3 style={{ marginTop: "1%", textAlign: "center" }}>
                ADD FACULTY
              </h3>
              <Card bg="light">
                <Form style={{ marginTop: "3%" }} onSubmit={onHandleSubmit}>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={4} style={{ textAlign: "center" }}>
                      <strong>Employee Name</strong>
                    </Form.Label>
                    <Col sm={5}>
                      <Form.Control
                        type="text"
                        value={faculty.employeeName}
                        name="employeeName"
                        onChange={OnHandleChange}
                        placeholder="Enter The Faculty Name"
                        required
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={4} style={{ textAlign: "center" }}>
                      <strong>Faculty ID</strong>
                    </Form.Label>
                    <Col sm={5}>
                      <Form.Control
                        name="employeeID"
                        value={faculty.employeeID}
                        onChange={OnHandleChange}
                        type={"text"}
                        placeholder="Enter The Employee ID or Number"
                        required
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={4} style={{ textAlign: "center" }}>
                      <strong> Temporary Password</strong>
                    </Form.Label>
                    <Col sm={5}>
                      <Form.Control
                        name="Password"
                        value={faculty.Password}
                        onChange={OnHandleChange}
                        type={"text"}
                        placeholder="Enter The Temporary password - name follwed by roolNo"
                        required
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={4} style={{ textAlign: "center" }}>
                      <strong>Department</strong>
                    </Form.Label>
                    <Col sm={5}>
                      <Form.Control
                        as="select"
                        aria-label="Default select example"
                        name="Department"
                        value={faculty.Department}
                        onChange={OnHandleChange}
                      >
                        <option>Department</option>
                        <option value="IT">IT</option>
                        <option value="CSE">CSE</option>
                        <option value="ECE">ECE</option>
                        <option value="EEE">EEE</option>
                        <option value="AIDS">AIDS</option>
                        <option value="MECH">MECH</option>
                        <option value="CCE">CCE</option>
                        <option value="AIML">AIML</option>
                        <option value="CSBS">CSBS</option>
                      </Form.Control>
                    </Col>
                  </Form.Group>
                  <Row className="mb-3">
                    <Col style={{ textAlign: "center" }}>
                      {spinner ? (
                        <button
                          className="btn btn-primary"
                          type="button"
                          disabled
                        >
                          <span
                            className="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          Adding...
                        </button>
                      ) : (
                        <Button variant="primary" type="submit">
                          Add Faulty
                        </Button>
                      )}
                    </Col>
                  </Row>
                </Form>
              </Card>
              <Row style={{ marginTop: "4%" }}>
                <Col>
                  <hr
                    style={{ border: "3px solid #004E9B", borderRadius: "5px" }}
                  ></hr>
                </Col>
              </Row>
            </Container>
          </Row>
        </div>
      </main>
    </>
  );
};

export default AddFaculty;
