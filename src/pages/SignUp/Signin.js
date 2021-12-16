import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useFormspark } from "@formspark/use-formspark";
import signin from '../SignUp/signin.css'

const FORMSPARK_FORM_ID = "iNlNSMf3";

const Application = () => {
    const [submit, submitting] = useFormspark({
      formId: FORMSPARK_FORM_ID,
    });

  const [name, setName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    await submit({ message });
    alert("Form submitted - Come back for updates");
  };
  
  return (
            <>
     <div> 
         <form onSubmit={onSubmit}>
        <br />     
        <br />     
        <br />     
        <br />     
        <br />
      
      <h3> Sign Up & waitlist to be first one to Axcess the
          <br />
          <br />
          Revolutionizing Lending Platform  </h3>  
      <br />
    <h4>Name</h4>
      <textarea value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <br />
      <h5>Phone number</h5>
      <textarea value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} />
      <br />
      <br />
      <h5>Email</h5>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      <br />
      <button type="submit" disabled={submitting}>
        Sign Up
      </button>
      <br />
    </form> 
    </div>
    
   </>
  );
};

export default Application;