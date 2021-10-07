import "./users.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { Button } from "@material-ui/core";

import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export default function UserList({ search, setSearch }) {
    const componentRef1 = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef1.current,
    });

  const [students, setStudents] = useState([
    {
      studentid: "",
      name: "",
      email: "",
      phone: "",
      address: "",
      school: "",
      grade: "",
    },
  ]);

  let history = useHistory();

  useEffect(() => {
    function getDetails() {
      axios

        .get("http://localhost:8070/student/studentDetails")

        .then((res) => {
          console.log(res.data);

          setStudents(res.data);
        })

        .catch((err) => {
          alert(err.message);
        });
    }

    getDetails();
  }, []);

  function deleteHandler(email) {
    axios
      .delete(`http://localhost:8070/student/deleteStudent/${email}`)

      .then((res) => {
        alert("User Deleted!");

        history.push("/users");
      })

      .catch();
  }

  const renderSDetails = (students, index) => {
    return (
      <tr key={index}>
        <td>{students.studentid} </td>

        <td>{students.name} </td>

        <td>{students.email} </td>

        <td>{students.phone} </td>

        <td>{students.grade} </td>

        <td>
          <Link to={`/user/${students._id}`}>
            <Button
              className="btneditH"
              style={{
                fontSize: "12px",
                marginRight: "10px",
                color: "white",
                backgroundColor: "#04AA6D",
                textDecoration: "none",
                marginTop: "-20px",
              }}
            >
              Edit
            </Button>
          </Link>
          <DeleteForeverIcon
            onClick={() => deleteHandler(students.email)}
            style={{ fontSize: "30px", color: "red", marginTop: "10px" }}
          />
        </td>
      </tr>
    );
  };

  return (
    <div className="userList">
      <div className="titleList">Registered Students List</div>

      <br />
      <br />

      <input
        placeholder="Search Here by Email"
        className="Ddown1"
        type="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="reportBtn1"
        onClick={handlePrint}
        style={{
          fontSize: "15px",
          marginRight: "100px",
          color: "white",
          backgroundColor: "grey",
          textDecoration: "none",
          marginTop: "0px",
          padding:"3px"
        }}
      >
        Export Report as a PDF
      </button>
      <br />

      <div className="table-wrapper">
        <div ref={componentRef1}>
          <table className="fl-table123">
            <thead className="tHead">
              <tr>
                <th>Student ID</th>

                <th>Full Name</th>

                <th>Email</th>

                <th>Phone</th>

                <th>Grade</th>

                <th style={{ width: "90px" }}>Action</th>
              </tr>
            </thead>

            <tbody>
              {students
                ?.reverse()
                .filter((filteredStudents) =>
                  filteredStudents.email
                    .toLowerCase()
                    .includes(search.toLowerCase())
                )
                .map(renderSDetails)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
