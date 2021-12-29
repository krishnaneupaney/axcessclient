import React, {useState} from 'react'
import { useFormspark } from "@formspark/use-formspark";
import { Buttons } from '../../globalStyles';


const FORMSPARK_FORM_ID = "GpGyK1fs";


const LoanForm = () => {

    const [submit, submitting] = useFormspark({
        formId: FORMSPARK_FORM_ID,
      });
  
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [message, setMessage] = useState("");
    const [address, setAddress] = useState("");
   
    const onSubmit = async (e) => {
      e.preventDefault();
      await submit({ message });
      alert("Form submitted - Come back for updates");
    };

    return (
      <>
        <div>
      <form onSubmit={onSubmit} action="https://submit-form.com/GpGyK1fs" >
        <br />     
        <br />     
    
      
      <h3>  
          <br />
   
          get instant decision on your rate  </h3>  
      <br />
    <h4>First Name                              Last Name</h4>
      <input value={firstName} onChange={(e) => setfirstName(e.target.value)} />
      <input value={lastName} onChange={(e) => setlastName(e.target.value)} />
      <br />
      <br />
      <h4>Phone number</h4>
      <input value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} />
      <br />
      <br />
      <h4>Address</h4>
      <input value={address} onChange={(e) => setAddress(e.target.value)} />
      <br />
      <br />
      <h4>Email</h4>
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
      <br />
      {/* <button type="submit" disabled={submitting}>
        Sign Up
      </button> */}
      <br />
      <br />
      <br />
      <Buttons fontBig type="submit"  >Get My Rate</Buttons>
      
      <br />
      <br />
      <br />
      <br />
    </form> 
        </div>
  </>
    )
};

export default LoanForm;
