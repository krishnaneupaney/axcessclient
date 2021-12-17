import React, {useState} from 'react';
import { InfoSection, Sidebar } from '../../components';
import { homeObjOne, homeObjThree, homeObjNine } from './Data';
import Application from './Signin';

function SignUp() {
  // const [isOpen, setIsOpen] = useState(false)

  // const toggle = () => {
  //     setIsOpen(!isOpen)
  // }
  
  return (
    <>  
      {/* <Sidebar isOpen={isOpen} toggle={toggle}/> */}
      <Application />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjNine} />
    </>
  );
}

export default SignUp;
