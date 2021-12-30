import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useFormspark } from "@formspark/use-formspark";
import signin from '../SignUp/signin.css'
import { Buttons } from "../../globalStyles";
import { FormInput } from "../../components/Footer/Footer.elements";

const FORMSPARK_FORM_ID = "iNlNSMf3";

const Applications = () => {
    const [submit, submitting] = useFormspark({
      formId: FORMSPARK_FORM_ID,
    });

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [message, setMessage] = useState("");
  const [address, setAddress] = useState("");
  const [dateofBirth, setdateofBirth] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    await submit({ message });
    alert("We coulldn't get you instant result - no worries, we'll email/text you when rate is available");
  };
  
  return (
            <>
     <div style={{ background: "white", border:'212px solid white' }}>  
         <form onSubmit={onSubmit}>
        <br />     
        <br />     
    
      
      <h2> 
          <br />
   
          Get your instant result!  </h2>  
      <br />
      <br />
    <h4  >First Name     </h4>         
      <input style={{height: "32px", width:'180px'}} value={firstName} onChange={(e) => setfirstName(e.target.value)} required />
      <br />
      <br />
    <h4> Last Neupaney</h4>
      <input style={{height: "32px", width:'180px'}} value={lastName} onChange={(e) => setlastName(e.target.value)} />
      <br />
      <br />
      <h5>Phone number</h5>
      <input style={{height: "32px", width:'180px'}} value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} required />
      <br />
      <br />
      <h5>Email</h5>
      <input style={{height: "32px", width:'180px'}}value={message} onChange={(e) => setMessage(e.target.value)} required />
      <br />
      <br />
      <h5>Address</h5>
      <input style={{height: "26px", width:'220px'}} value={address} onChange={(e) => setAddress(e.target.value)} required />
      <br />
      <br />
      <h5>DOB</h5>
      <input style={{height: "32px", width:'100px'}} value={dateofBirth} onChange={(e) => setdateofBirth(e.target.value)} required/>
      <br />
      <br />
      <br />
      <br />
      <Buttons style={{border:'12px solid green'}} fontBig type="submit" disabled={submitting}>Get My Rate</Buttons>
      <br />
      <br />
      <br />
      <br />
    </form> 
    </div>
    
   </>
  );
};

export default Applications;