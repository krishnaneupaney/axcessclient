import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { homeObjOne, homeObjSeven} from '../Services/Data';
import Fade from 'react-reveal/Fade';
 
function Services() {
  return (
    <>
      <Fade top>
        <InfoSection {...homeObjOne} />
      </Fade>
 
        <Pricing /> 
   
     
      
      <InfoSection {...homeObjSeven} />
    </>
  );
}

export default Services;
