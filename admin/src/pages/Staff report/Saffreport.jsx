import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import './staffreport.css'

export default function Staffreport(){
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
      <div className="newstaff">
          <button onClick={handlePrint}>Print this out!</button>
      
    <div className="scroll-bgn">
      <div className="scroll-divn">
      <div className="scroll-objectn">
      <div className="wrapper-flex ">
        
      <div ref={componentRef}>
        <h1>Monthly Emplooye Salary Report</h1>
        </div>
        </div>
        </div>
        </div>
    </div>
    </div>
  );
};