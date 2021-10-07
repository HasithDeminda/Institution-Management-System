import { Accordion, FormControl } from "@material-ui/core";
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { InputGroup } from "react-bootstrap";
import "./Blogs.css";
import { useReactToPrint } from "react-to-print";

export default function ViewBlogs() {
    const componentRef1 = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef1.current,
    });
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const { _id } = useParams();
  console.log(_id);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    // useEffect(()=>{

    let mounted = true;

    fetch(`http://localhost:8070/AllBlogs/getOneBlog/${_id}`)
      .then((res) => res.json())

      .then((result) => {
        if (mounted) {
          setTitle(result.title);

          setContent(result.content);

          setCategory(result.category);
        }
      });

    return () => (mounted = false);
  }
  return (
    <div className="userList">
      <button
        className="reportBtn1"
        onClick={handlePrint}
        style={{
          fontSize: "15px",
          marginRight: "50px",
          color: "white",
          backgroundColor: "grey",
          textDecoration: "none",
          marginTop: "20px",
          padding: "8px",
        }}
      >
        Print Article
      </button>
      <div ref={componentRef1}>
        <div className="titleList">Content</div>
        <div className="blogcard">
          <br />
          <br />
          <InputGroup>
            <InputGroup.Text style={{marginLeft:"300px", fontSize:"22px"}}>{title}</InputGroup.Text>
            <br />
            <br />
            
            <InputGroup.Text>{content}</InputGroup.Text>
            <FormControl as="textarea" aria-label="With textarea" />
          </InputGroup>
        </div>
      </div>
    </div>
  );
}
