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
import { changePasswordFor } from "../services/postRequest";
import { notify } from "../services/toastify";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  // state for password data
  const [passwordData, setPasswordData] = useState({
    userType:'',
    userID : '',
    Batch : '',
    Department : '',
    newPassword :''
  });

  //state for Loading spinner
  const [spinner, setSpinner] = useState(false);

  const navigate = useNavigate();

  // updating state onHandle Change
  const OnHandleChange = (event) => {
    const { name, value } = event.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  
  
  //on submitting send request to the server and handling responses
  const onHandleSubmit = (event)=>{
    event.preventDefault();
 
    passwordData.userID = sessionStorage.getItem('userID');
    passwordData.userType = sessionStorage.getItem('userType');
    passwordData.Batch = sessionStorage.getItem('Batch');
    passwordData.Department = sessionStorage.getItem('Department');
    setPasswordData({...passwordData});
    console.log(passwordData);
    setSpinner(true);
    changePasswordFor(passwordData).then((res)=>{

         if(res.data.Success === 'True'){
              notify(res.data.Message,'success');
              setPasswordData({
                userType:'',
                userID : '',
                Batch : '',
                Department : '',
                newPassword :''
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
                CHANGE PASSWORD
              </h3>
              <Card bg="light">
                <Form style={{ marginTop: "3%" }} onSubmit={onHandleSubmit}>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={4} style={{ textAlign: "center" }}>
                      <strong>New Password</strong>
                    </Form.Label>
                    <Col sm={5}>
                      <Form.Control
                        type="text"
                        value={passwordData.newPassword}
                        name="newPassword"
                        onChange={OnHandleChange}
                        placeholder="Enter The new password"
                        required
                      />
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
                          Changing...
                        </button>
                      ) : (
                        <Button variant="primary" type="submit">
                          Change
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

export default ChangePassword;
