import React, {useState} from 'react'
import { useFormspark } from "@formspark/use-formspark";
import { Button } from '../../globalStyles';


const FORMSPARK_FORM_ID = "GpGyK1fs";


const LoanForm = () => {

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
        <div>
            <form onSubmit={onSubmit}>
        <br />     
        <br />     
    
      
      <h3> Share few information and 
          <br />
   
          get your rate  </h3>  
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
        </div>
    )
};

export default LoanForm;
