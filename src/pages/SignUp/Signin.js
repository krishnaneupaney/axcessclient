import React, { useState } from "react";
 import { useFormspark } from "@formspark/use-formspark";
 import { Button } from "../../globalStyles";
  
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
     <div style={{ textAlign: "center"}}> 
       
         <form onSubmit={onSubmit}>
        <br />     
        <br />     
    
      
      <h3 style={{ fontSize: "36px"}}> Sign Up & waitlist to be first one to Axcess the
          <br />
   
          Revolutionizing Lending & Bills Management Platform  </h3>  
      <br />
    <h4 style={{ fontSize: "26px"}}>Name</h4>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <br />
      <h5 style={{ fontSize: "26px"}}>Phone number</h5>
      <input value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} />
      <br />
      <br />
      <h6 style={{ fontSize: "26px"}} >Email</h6>
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
    </div>
    </div>
    
   </>
  );
};

export default Application;