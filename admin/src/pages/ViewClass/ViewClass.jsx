import React, { useState, useEffect } from "react";
import axios from "axios";
import "./viewClassCss.css";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";

export default function ListClass() {

    //get data from getdata
    const [RClass, setRClass] = useState([
      {
        Grade: "",
        StartTime: "",
        EndTime: "",
        SubjectNo: "",
        SubjectName: "",
        TeacherName: "",
        Link: "",
        content: "",
      },
    ]);


    

    //send data to mongo

    function sendData() {

      const NewClass = new FormData();
      NewClass.append("Grade", RClass.Grade);
      NewClass.append("StartTime", RClass.StartTime);
      NewClass.append("EndTime", RClass.EndTime);
      NewClass.append("SubjectNo", RClass.SubjectNo);
      NewClass.append("SubjectName", RClass.SubjectName);
      NewClass.append("TeacherName", RClass.TeacherName);
      NewClass.append("Link", RClass.Link);
      NewClass.append("content", RClass.content);

      axios
        .post("http://localhost:8070/RejectClasses/addRejectClass", NewClass)
        .then(() => {
          alert("Reject Class Added");
        })
        .catch((err) => {
          alert(err);
        });
    }

  // get results from database

  const [classes, setclasses] = useState([
    {
      Grade: "",
      StartTime: "",
      EndTime: "",
      SubjectNo: "",
      SubjectName: "",
      TeacherName: "",
      Link: "",
      content: "",
    },
  ]);

  useEffect(() => {
    function getclasses() {
      axios
        .get("http://localhost:8070/AddClasses/getAddClass")
        .then((res) => {
          console.log(res);
          setclasses(res.data);
          setRClass(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getclasses();
  },[]);
  //******************************

  const renderClass = (classes, index) => {
    return (
      <tr key={index}>
        <td>{classes.StartTime}</td>
        <td>{classes.EndTime}</td>
        <td>{classes.SubjectNo}</td>
        <td>{classes.SubjectName}</td>
        <td>{classes.TeacherName}</td>
        <td>{classes.Link}</td>
        <td>
          <CheckCircleIcon
            style={{
              fontSize: "20px",
              marginRight: "10px",
              color: "green",
            }}
          />
          <CancelIcon
            onClick={sendData}
            style={{ fontSize: "20px", color: "red" }}
          />
        </td>
      </tr>
    );
  };

  return (
    <div className="newUser">
      <div className="card-heading">
        <h2 className="title">View Class</h2>
      </div>
      <div>
        <div className="Ddown">
          <button className="DdownBtn">Grade</button>
          <div className="Ddown-content">
            {/* <link>Grade 6</link>
            <link>Grade 7</link>
            <link>Grade 8</link>
            <link>Grade 9</link>
            <link>Grade 10</link>
            <link>Grade 11</link> */}
          </div>
        </div>

        <div className="table-wrapper">
          <table className="fl-table">
            <thead>
              <tr>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Class ID</th>
                <th>Subject Name</th>
                <th>Theacher Name</th>
                <th>Link</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{classes.map(renderClass)}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
