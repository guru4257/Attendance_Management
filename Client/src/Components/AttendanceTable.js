import React, { useState } from "react";
import {Table, Row, Col, Button} from "react-bootstrap";

const AttendanceTable = (props) => {
  const { TableData, onSubmit, spinner } = props;

  const [presentData, setPresentData] = useState([]);
  const [absentData, setAbsentData] = useState([]);
  const [ODdata, setODdata] = useState([]);
  const onHandleChange = (id, value) => {
    if (value === "Present") {
      if (!absentData.includes(id) && !ODdata.includes(id)) {
        presentData.push(id);
        setPresentData(presentData);
      } else {
        if (absentData.includes(id)) {
          const temp = absentData.filter((ele) => {
            return ele !== id;
          });
          setAbsentData(temp);
        } else {
          const temp = ODdata.filter((ele) => {
            return ele !== id;
          });
          setODdata(temp);
        }

        presentData.push(id);
        setPresentData(presentData);
      }
    } else if (value === "Absent") {
      if (!presentData.includes(id) && !ODdata.includes(id)) {
        absentData.push(id);
        setAbsentData(absentData);
      } else {
        if (presentData.includes(id)) {
          const temp = presentData.filter((ele) => {
            return ele !== id;
          });
          setPresentData(temp);
        } else {
          const temp = ODdata.filter((ele) => {
            return ele !== id;
          });
          setODdata(temp);
        }

        absentData.push(id);
        setAbsentData(absentData);
      }
    } else if (value === "OD") {
      if (!presentData.includes(id) && !absentData.includes(id)) {
        ODdata.push(id);
        setODdata(ODdata);
      } else {
        if (presentData.includes(id)) {
          const temp = presentData.filter((ele) => {
            return ele !== id;
          });
          setPresentData(temp);
        } else {
          const temp = absentData.filter((ele) => {
            return ele !== id;
          });
          setAbsentData(temp);
        }

        ODdata.push(id);
        setODdata(ODdata);
      }
    }
  };

  const onDataSubmit = ()=>{
       onSubmit(presentData,absentData,ODdata);
       setPresentData([]);
       setAbsentData([]);
       setODdata([]);
  }
  return (
    <>
      <Row>
        <Table stripped bordered hover size="sm" responsive>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Roll No</th>
              <th>Student Name</th>
              <th>Attendance</th>
            </tr>
          </thead>
          <tbody>
            {TableData.map((item, i) => {
              return (
                <tr className="tableRow" key={item._id}>
                  <td>{i + 1}</td>
                  <td>{item.rollNumber}</td>
                  <td>{item.studentName}</td>
                  <td>
                    <select
                      id="form3Example5"
                      name="userType"
                      onChange={(e) =>
                        onHandleChange(item.rollNumber, e.target.value)
                      }
                      className="form-control form-control"
                      required
                    >
                      {" "}
                      <option value="">N/A</option>
                      <option value="Present">Present</option>
                      <option value="Absent">Absent</option>
                      <option value="OD">OD</option>
                    </select>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Row>

      <Row>
        <Col style={{ textAlign: "center" }}>
          {spinner ? (
            <button className="btn btn-primary" type="button" disabled>
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Uploading...
            </button>
          ) : (
            <Button variant="primary" onClick={onDataSubmit}>
              Upload
            </Button>
          )}
        </Col>
      </Row>
    </>
  );
};

export default AttendanceTable;
