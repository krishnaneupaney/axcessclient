import React, {Component} from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from './Data';
import { InfoSection, Pricing } from '../../components';
import {homeObjSeven } from '../Services/Data';
import Data from '../SignUp/FAQ';


function Home() {

  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjFive} />
      <Pricing />
      <InfoSection {...homeObjFour} />
      <InfoSection {...homeObjSeven} />
    <div>
       {/* <Data /> */}
    </div>
    
         
    </>
  );
}

export default Home;
