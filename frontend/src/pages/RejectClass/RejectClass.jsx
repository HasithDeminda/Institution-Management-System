import React, {useState, useEffect} from "react";
import axios from "axios";
import "./rejectClassCss.css";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import UpdateIcon from "@material-ui/icons/Update";
import Header from "../../components/Headers/TeacherHeader/tHeader";
// import {Link} from 'react-router-dom'

export default function ListClass() {
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
        .get("http://localhost:5000/RejectClasses/getRejectClass")
        .then((res) => {
          console.log(res);
          setclasses(res.data);
          // setRClass(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getclasses();
  }, []);
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
          <UpdateIcon
            // onClick
            style={{
              fontSize: "20px",
              marginRight: "10px",
              color: "blue",
            }}
          />
          <DeleteForeverIcon
            // onClick
            style={{ fontSize: "20px", color: "red" }}
          />
        </td>
      </tr>
    );
  };

  return (
    <div>
      <Header />

      <div className="card-heading">
        <h2 className="title">Rejected Classes</h2>
      </div>

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
              {/* <th>Comment</th> */}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{classes.map(renderClass)}</tbody>
        </table>
      </div>
    </div>
  );
}
