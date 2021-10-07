import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Pdetails.css";


 
 export default function PaymentDetails() {


  const [classes, setclasses] = useState([
    {
      class_id: "",
      subject: "",
      teacher_name: "",
      amount: ""
      
    },
  ]);

  useEffect(() => {
    function getclasses() {
      axios
        .get("http://localhost:5000/getfees/get")
        .then((res) => {
          console.log(res);
          setclasses(res.data);
          
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getclasses();
  },[]);
 

  const renderClass = (classes, index) => {
    return (
      <tr key={index}>
        <td>{classes.class_id}</td>
        <td>{classes.subject}</td>
        <td>{classes.teacher_name}</td>
        <td>{classes.amount}</td>
        
      </tr>
    );
  };

   return (
    
     <div>
     
       
       <div className="Ddown">
      <button className="DdownBtn">Grade</button>
      {/* <div className="Ddown-content">
   		<a >Grade 6</a><br/>
        <a >Grade 7</a><br/>
        <a >Grade 8</a><br/>        
        <a >Grade 9</a><br/>
        <a >Grade 10</a><br/>
        <a >Grade 11</a><br/>
    </div> */}
</div>

       <div className="table-wrapper">
         <table className="fl-table">
           <thead>
             <tr>
               <th>Class ID</th>
               <th>Subject</th>
               <th>Teacher Name</th>
               <th>Amount</th>
             </tr>
           </thead>
           <tbody>
             {classes.map(renderClass)}
           </tbody>
         </table>
       </div>
     </div>
   );
 }
