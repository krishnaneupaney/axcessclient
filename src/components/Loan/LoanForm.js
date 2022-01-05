import React, {useState} from 'react'
import { useFormspark } from "@formspark/use-formspark";
import { Buttons } from '../../globalStyles';
 import LoanApp from '../../pages/SignUp/LoanApp';


 

const LoanForm = () => {
 

    return (
      <>
      <br />
      <br />
      <br />
      <h2>Thank you for your interest at Axcess Fund. We're at early stage of 
        building this platform and on process of completing soon. If you cannot wait and need 
        immediate assistance, please fill the form below and 
        we'll get back to you as soon as possible</h2>
        <br />
        <br />
      <LoanApp/>
      <br />
      <br />
       
  </>
    )
};

export default LoanForm;
