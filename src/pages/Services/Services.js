import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { homeObjOne, homeObjRentnow, homeObjCredit, homeObjSeven} from '../Services/Data';
import { homeObjCashback,  } from '../HomePage/Data';
import Fade from 'react-reveal/Fade';
  
function Services() {
    const style = {
      backgroundColor:'white',
      display:"flex",
      fontSize:'65px',
      textAlign: 'center',
      justifyContent:'center'
    }
  return (
    <><div>
       <Fade bottom>
      <InfoSection {...homeObjRentnow} />
    
   
      </Fade>
         </div>
         <div style={style}>Pay rent on
your own terms.</div>
          <Fade top>
          
          <InfoSection {...homeObjCredit} />
          <InfoSection {...homeObjCashback} />

        <InfoSection {...homeObjOne} />
      </Fade>
 
       
      <InfoSection {...homeObjSeven} />
    <Pricing /> 
    </>
  );
}

export default Services;
