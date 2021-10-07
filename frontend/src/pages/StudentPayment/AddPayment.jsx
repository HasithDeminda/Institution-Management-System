import React, {useState} from "react"
import "./AddPayment2.css";
import axios from "axios";
import PaymentDetails from "./PaymentDetails";
import Header from "../../components/Header/Header";
import BG2 from "../../assets/images/paymentbackground.png"


export default function AddPayment(){
    const [classid, setclassid] = useState("");
    const [grade, setgrade] = useState("");
    const [month, setmonth] = useState("");
    const [subject, setsubject] = useState("");
    const [teachername, setteachername] = useState("");
 
    const [bankname,setbankname] = useState("");
    const [branch,setbranch] = useState("");
    const [email,setemail] = useState("");
    const [contactnumber,setcontactnumber] = useState("");
    const [date,setdate] = useState("");
    const [paymentslip,setpaymentslip] = useState("");
    

    function sendData(e){
        e.preventDefault();
  
       
        const NewPayment = {
            classid,
            grade,
            month,
            subject,
            teachername,
            bankname,
            branch,
            email,
            contactnumber,
            date, 
            paymentslip            
        }

        
        axios.post("http://localhost:5000/payment/add", NewPayment).then(()=>{
            alert("Payment Added")
            console.log(NewPayment)
            }).catch((err)=>{
            alert(err)
        })

    }

    return (

      
      <div>
        <Header/>
        <img src={BG2} alt="backimage" style={{position:"absolute", marginTop:"1000px", marginLeft:"1200px", opacity:"0.5"}} />

        <PaymentDetails/>
        <div style={{ marginTop: "50px" }}>
            <div className="wrapper wrapper--w900">
        
            <div className="card-heading">
              <h2 className="title">Class Information</h2>
            </div>
            <div className="wrapper wrapper--w900">
              <div className="card card-6">
                <div>
                  <form onSubmit={sendData}>
                    <div className="form-row">
                      <div className="name">Class ID</div>
                      <div className="value">
                        <input
                          className="input--style-6"
                          type="text"
                          onChange={(e) => {
                            setclassid(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="name">Grade</div>
                      <div className="value">
                        <input
                          className="input--style-6"
                          type="text"
                          onChange={(e) => {
                            setgrade(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="name">Month</div>
                      <div className="value">
                        <input
                          className="input--style-6"
                          type="text"
                          onChange={(e) => {
                            setmonth(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="name">Subject</div>
                      <div className="value">
                        <input
                          className="input--style-6"
                          type="text"
                          onChange={(e) => {
                            setsubject(e.target.value);
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
                            setteachername(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    
                  </form>
                  </div>
                </div>
              </div>
            </div>
            </div>
        <div>

          <div style={{ marginTop: "50px" }}>
            <div className="wrapper wrapper--w900">
            <div className="card-heading">
                <h2 className="title">Payment Information</h2>
              </div>
              <div className="card card-6">
                <div>
                  
                  <form onSubmit={sendData}>
                    <div className="form-row">
                      <div className="name">Bank Name</div>
                      <div className="value">
               
                        <input
                          className="input--style-6"
                          type="text"
                          onChange={(e) => {
                            setbankname(e.target.value);
                          }}
                        />
                        
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="name">Branch</div>
                      <div className="value">
                        <input
                          className="input--style-6"
                          type="text"
                          onChange={(e) => {
                            setbranch(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="name">Email</div>
                      <div className="value">
                        <input
                          className="input--style-6"
                          type="text"
                          onChange={(e) => {
                            setemail(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="name">Contact Number</div>
                      <div className="value">
                        <input
                          className="input--style-6"
                          type="text"
                          onChange={(e) => {
                            setcontactnumber(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="name">Date</div>
                      <div className="value">
                        <input
                          className="input--style-6"
                          type="date"
                          onChange={(e) => {
                            setdate(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  
                   
                    <div className="form-row">
                      <div className="name">Payment Slip</div>
                      <div className="value">
                        <div className="input-group js-input-file">
                          <input
                            className="input-file"
                            type="file"
                            name="file_cv"
                            id="file"
                            onChange={(e) => {
                              setpaymentslip(e.target.value);
                            }}
                          />
                          <label className="label--file" htmlFor="file">
                            Choose file
                          </label>
                          <span className="input-file__info">
                            No file chosen
                          </span>
                        </div>
                        <div className="label--desc">
                          Upload the payment slip in .pdf format. Max file
                          size: 2 MB
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <button
                        className="btn btn--radius-2 btn--blue-2"
                        type="submit"
                      >
                        Pay Now
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