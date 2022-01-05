import React, {useState} from 'react';
import { InfoSection, Sidebar } from '../../components';
import { homeObjOne, homeObjThree, homeObjNine } from './Data';
import Application from './Signin';

function SignUp() {

  
  return (
    <>  
    <br />
    <br />
    <br />
      <Application />
 
      <br />
  
      <br />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjNine} />
    </>
  );
}

export default SignUp;
