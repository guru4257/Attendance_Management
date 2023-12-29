import React, { useState} from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import {Table, Row, Col, Button} from "react-bootstrap";
import { exportAsXLSX } from "../services/ExcelFileDownload";
import { Funnel, FunnelFill } from "react-bootstrap-icons";
import Container from "react-bootstrap/esm/Container";



const StudentsTable = (props) => {

    const{TableData} = props;
  //logic for downloading detail as excel file

  const downlaodXLSX = () => {
   
    exportAsXLSX(TableData, TableData[0].batch);
  };
 
  return (
    <Container>
      <Row>
        <Col style={{ textAlign: "right" }}>
          <Button
            variant="success"
            style={{ backgroundColor: "lightgreen" }}
            onClick={downlaodXLSX}
          >
            EXPORT AS XLSX
          </Button>
        </Col>
      </Row>
      <Row>
      <Table stripped bordered hover size="sm" responsive>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Roll No</th>
              <th>Student Name</th>
              <th>Register Number</th>
              <th>Batch</th>
              <th>Department</th>
              <th>Faculty Name</th>
              <th>Present</th>
              <th>Absent</th>
              <th>OD</th>
            </tr>
          </thead>
          <tbody>
            {TableData.map((item, i) => {
              return (
                <tr className="tableRow" key={item._id}>
                  <td>{i + 1}</td>
                  <td>{item.rollNumber}</td>
                  <td>{item.studentName}</td>
                  <td>{item.registerNumber}</td>
                  <td>{item.Batch}</td>
                  <td>{item.Department}</td>
                  <td>{item.facultyName}</td>
                  <td>{item.present}</td>
                  <td>{item.absent}</td>
                  <td>{item.OD}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default StudentsTable;
