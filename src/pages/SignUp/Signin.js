import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useFormspark } from "@formspark/use-formspark";
import signin from '../SignUp/signin.css'
import { Button } from "../../globalStyles";
import { FormInput } from "../../components/Footer/Footer.elements";
 import Auth from "./Auth";
 
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
      <div > 
      
       </div>
       <br />
       <br />
       <br />
     <div> 
       
         <form onSubmit={onSubmit}>
        <br />     
        <br />     
    
      
      <h3> Sign Up & waitlist to be first one to Axcess the
          <br />
   
          Revolutionizing Lending Platform  </h3>  
      <br />
    <h4>Name</h4>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <br />
      <h5>Phone number</h5>
      <input value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} />
      <br />
      <br />
      <h5>Email</h5>
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
      <br />
      {/* <button type="submit" disabled={submitting}>
        Sign Up
      </button> */}
      <br />
      <Button fontBig type="submit" disabled={submitting}>Sign Up</Button>
      <br />
      <br />
    </form> 
    <div>
    <Auth/>
    </div>
    </div>
    
   </>
  );
};

export default Application;