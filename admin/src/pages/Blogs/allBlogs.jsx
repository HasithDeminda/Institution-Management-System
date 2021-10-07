import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { Accordion, Button, Card } from "@material-ui/core";
import './Blogs.css'
import React, { useRef } from "react";

export default function AllBlogs() {
  const [blogs, setBlogs] = useState([
    {
      _id:"",
      title: "",
      content: "",
      category: "",
    },
  ]);

  let history = useHistory();

    useEffect(() => {
      function getDetails() {
        axios

          .get("http://localhost:8070/AllBlogs/getAllBlogs")

          .then((res) => {
            console.log(res.data);

            setBlogs(res.data);
          })

          .catch((err) => {
            alert(err.message);
          });
      }

      getDetails();
    }, []);

      function deleteHandler(_id) {
        axios
          .delete(`http://localhost:8070/AllBlogs/deleteBlog/${_id}`)

          .then((res) => {
            alert("Article Deleted!");

            history.push("/blogs");
          })

          .catch();
      }

    const renderSDetails = (blogs, index) => {
    return (
      <tr key={index}>
        <td>{blogs.title} </td>

        {/* <td>{blogs._id} </td> */}

        <td>{blogs.category} </td>
        <td>
          <Link to={`/viewBlogs/${blogs._id}`}>
            <Button
              className="btneditN"
              style={{
                fontSize: "12px",
                marginRight: "10px",
                color: "white",
                backgroundColor: "#04AA6D",
                textDecoration: "none",
                marginTop: "20px",
              }}
            >
              See Article
            </Button>
          </Link>

          <Button
            onClick={() => deleteHandler(blogs._id)}
            className="btneditN"
            style={{
              fontSize: "12px",
              marginRight: "10px",
              color: "white",
              backgroundColor: "#FF0000",
              textDecoration: "none",
              marginTop: "20px",
            }}
          >
            Delete
          </Button>
        </td>
      </tr>
    );}
  return (
    <div className="userList">
      <div className="titleList">
        Student Blogs
      </div>

      <br />
      <br />

      <div className="table-wrapper">
        <table className="fl-table12">
          <thead className="tHead">
            <tr>
              <th>Blog Title</th>

              <th>Blog Category</th>

              <th style={{ width: "90px" }}>Action</th>
            </tr>
          </thead>

          <tbody>
            {blogs
              ?.reverse()

              .map(renderSDetails)}
          </tbody>
        </table>
      </div>
    </div>
  );
}
