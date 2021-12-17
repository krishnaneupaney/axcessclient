import React, {useState} from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from './Data';
import { InfoSection, Pricing } from '../../components';
import {homeObjSeven } from '../Services/Data';
import Sidebar from '../../components/Sidebar';


function Home() {
  // const [isOpen, setIsOpen] = useState(false)

  //   const toggle = () => {
  //       setIsOpen(!isOpen)
  //   }
  return (
    <>
      {/* <Sidebar isOpen={isOpen} toggle={toggle}/> */}
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjFive} />
      <Pricing />
      <InfoSection {...homeObjFour} />
      <InfoSection {...homeObjSeven} />
    </>
  );
}

export default Home;
