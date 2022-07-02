import React, {useState} from 'react'
import { Buttonn } from '../../globalStyles';
import { MultiStepForm } from '../MultiStepForm';
 

 

const LoanForm = () => {
 

    return (
      <>
       <div style={{ background: "white", fontSize: "24px", textAlign: "center"}}>Thank you for your interest at Axcess Fund!
      <br />
      <br />
    <a
      href="javascript:void(
        window.open(
          'https://form.jotform.com/221059210645145',
          'blank',
          'scrollbars=yes,
          toolbar=no,
          width=700,
          height=500'
        )
      )
    ">
      <Buttonn>Apply</Buttonn>
      <br />
      <br />
      <br />
      
    </a>
      {/* <MultiStepForm /> */}
    </div>       
  </>
    )
};

export default LoanForm;
