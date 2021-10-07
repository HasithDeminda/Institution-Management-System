import React, { useState } from "react";
import axios from "axios";
import "./AddClass.css";
import Header from "../../components/Headers/TeacherHeader/tHeader";

export default function ClassAdd() {
  //get inputs

  const [Grade, setGreade] = useState("");
  const [StartTime, setStartTime] = useState("");
  const [EndTime, setEndTime] = useState("");
  const [SubjectNo, setSubjectNo] = useState("");
  const [SubjectName, setSubjectName] = useState("");
  const [TeacherName, setTeacherName] = useState("");
  const [Link, setLink] = useState("");
  const [content, setComponent] = useState("");

  //send data to mongo

  function sendData(e) {
    e.preventDefault();

    const NewClass = new FormData();
    NewClass.append("Grade", Grade);
    NewClass.append("StartTime", StartTime);
    NewClass.append("EndTime", EndTime);
    NewClass.append("SubjectNo", SubjectNo);
    NewClass.append("SubjectName", SubjectName);
    NewClass.append("TeacherName", TeacherName);
    NewClass.append("Link", Link);
    NewClass.append("content", content);

    axios
      .post("http://localhost:5000/AddClasses/addClass", NewClass)
      .then(() => {
        alert("Class Added");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div>
      <Header />

      <div>
        <div style={{ marginTop: "50px" }}>
          <div className="wrapper wrapper--w900">
            <div className="card-heading">
              <h2 className="title">Add Class</h2>
            </div>

            <div className="card card-6">
              <div>
                <form onSubmit={sendData} encType="multipart/from-data">
                  <div className="form-row">
                    <div className="name">Grade</div>
                    <div className="value">
                      <input
                        className="input--style-6"
                        type="text"
                        onChange={(e) => {
                          setGreade(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="name">Start Time</div>
                    <div className="value">
                      <input
                        className="input--style-6"
                        type="time"
                        onChange={(e) => {
                          setStartTime(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="name">End Time</div>
                    <div className="value">
                      <input
                        className="input--style-6"
                        type="time"
                        onChange={(e) => {
                          setEndTime(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="name">Subject Number</div>
                    <div className="value">
                      <input
                        className="input--style-6"
                        type="text"
                        onChange={(e) => {
                          setSubjectNo(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="name">Subject Name</div>
                    <div className="value">
                      <input
                        className="input--style-6"
                        type="text"
                        onChange={(e) => {
                          setSubjectName(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="name">Teacher Name</div>
                    <div className="value">
                      <input
                        className="input--style-6"
                        type="text"
                        onChange={(e) => {
                          setTeacherName(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="name">Link</div>
                    <div className="value">
                      <input
                        className="input--style-6"
                        type="link"
                        onChange={(e) => {
                          setLink(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="name">Component</div>
                    <div className="value">
                      <div className="input-group js-input-file">
                        <input
                          className="input-file"
                          type="file"
                          name="file_cv"
                          id="file"
                          onChange={(e) => {
                            setComponent(e.target.value);
                          }}
                        />
                        <label className="label--file" htmlFor="file">
                          Choose file
                        </label>
                        <span className="input-file__info">No file chosen</span>
                      </div>
                      <div className="label--desc">
                        Upload lesson pdf or any other relevant file. Max file
                        size 50 MB
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button
                      className="btn btn--radius-2 btn--blue-2"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
