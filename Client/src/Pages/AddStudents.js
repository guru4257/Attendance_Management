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
import { addStudent } from "../services/postRequest";
import { notify } from "../services/toastify";
import { useNavigate } from "react-router-dom";

const AddStudents = () => {
  // state for studentdata
  const [student, setStudent] = useState({
    studentName: "",
    rollNumber: "",
    registerNumber: "",
    Batch: "",
    Department: "",
    Password: "",
  });

  //state for Loading spinner
  const [spinner, setSpinner] = useState(false);

  const navigate = useNavigate();

  // updating state onHandle Change
  const OnHandleChange = (event) => {
    const { name, value } = event.target;
    setStudent({ ...student, [name]: value });
  };

  //on submitting send request to the server and handling responses
  const onHandleSubmit = (event)=>{
    event.preventDefault();
    console.log(student);
    setSpinner(true);
    addStudent(student).then((res)=>{

         if(res.data.Success === 'True'){
              notify(res.data.Message,'success');
              setStudent({
                studentName: "",
                rollNumber: "",
                registerNumber: "",
                Batch: "",
                Department: "",
                Password: "",
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
                ADD STUDENT
              </h3>
              <Card bg="light">
                <Form style={{ marginTop: "3%" }} onSubmit={onHandleSubmit}>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={4} style={{ textAlign: "center" }}>
                      <strong>Student Name</strong>
                    </Form.Label>
                    <Col sm={5}>
                      <Form.Control
                        type="text"
                        value={student.studentName}
                        name="studentName"
                        onChange={OnHandleChange}
                        placeholder="Enter The Student Name"
                        required
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={4} style={{ textAlign: "center" }}>
                      <strong>Roll Number</strong>
                    </Form.Label>
                    <Col sm={5}>
                      <Form.Control
                        name="rollNumber"
                        value={student.rollNumber}
                        onChange={OnHandleChange}
                        type={"text"}
                        placeholder="Enter The Roll Number"
                        required
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={4} style={{ textAlign: "center" }}>
                      <strong>Register Number</strong>
                    </Form.Label>
                    <Col sm={5}>
                      <Form.Control
                        type="number"
                        value={student.registerNumber}
                        name="registerNumber"
                        onChange={OnHandleChange}
                        placeholder="Enter The Register Number"
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
                        value={student.Password}
                        onChange={OnHandleChange}
                        type={"text"}
                        placeholder="Enter The Temporary password - name follwed by roolNo"
                        required
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={4} style={{ textAlign: "center" }}>
                      <strong>Batch</strong>
                    </Form.Label>
                    <Col sm={5}>
                      <Form.Control
                        as="select"
                        value={student.Batch}
                        aria-label="Default select example"
                        name="Batch"
                        onChange={OnHandleChange}
                      >
                        <option>Batch of the student</option>
                        <option value="2020-2024">2020-2024</option>
                        <option value="2021-2025">2021-2025</option>
                        <option value="2022-2026">2022-2026</option>
                        <option value="2023-2027">2023-2027</option>
                        <option value="2024-2028">2024-2028</option>
                        <option value="2025-2029">2025-2029</option>
                        <option value="2026-2030">2026-2030</option>
                        <option value="2027-2031">2027-2031</option>
                        <option value="2028-2032">2028-2032</option>
                        <option value="2029-2033">2029-2033</option>
                        <option value="2030-2034">2030-2034</option>
                      </Form.Control>
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
                        value={student.Department}
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
                          Add Student
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

export default AddStudents;
