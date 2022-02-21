import React from 'react';
import './landlord.css'
import Slide from 'react-reveal/Slide';
import {
    PricingSection,
    PricingWrapper,
    PricingHeading,
    PricingContainer,
    PricingCard,
    PricingCardInfo,
    PricingCardIcon,
    PricingCardPlan,
    PricingCardCost,
    PricingCardLength,
    PricingCardFeatures,
    PricingCardFeature, 
    ServicesIcon
  } from '../../components/Pricing/Pricing.elements';
  import { Button } from '../../globalStyles';
  import { IconContext } from 'react-icons/lib';
  import Icon1 from '../../images/thumb.png'
  import Icon2 from '../../images/payment.png'
  import Icon3 from '../../images/datai.png'  
  import {homeObjLand} from '../../pages/HomePage/Data';
  import { InfoSection } from '../../components';
import { Link } from 'react-router-dom';
const Landlord = () => {




  return <div className="landlord"> 

       <Slide left>
          <InfoSection {...homeObjLand} />
          
        </Slide>
 <div>
 
 </div>
        <div>
        <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Getting started with Axcess Lending Platform is Easy & Fast!</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              
              <PricingCardInfo>
           
                  <ServicesIcon src={Icon1} />
                
                <PricingCardPlan>Increase your cash flow</PricingCardPlan>
                <PricingCardCost></PricingCardCost>
                <PricingCardLength>See up to 30% increase in on-time rent payments from
                   your tenants. Resident's prefer apartnment with rent reporting as a great benefit.</PricingCardLength>
                
                
                 <br />
                <br />
                <br />
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
           
                  <ServicesIcon src={Icon2} />
                <br />
                <PricingCardPlan>Minimize Eviction</PricingCardPlan>
                <br />
                <PricingCardLength>With AI-powered Instant approval, resident's can apply for rent 
                  relief loan instantly. Save money per prevented Eviction. </PricingCardLength>
                 
            
                 <br />
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
           
                  <ServicesIcon src={Icon3} />
                
                <PricingCardPlan>Easy Integration & Data Axcess</PricingCardPlan>
               
                <br />
                <PricingCardLength>You can Integrate within your system with few/low code. No change to your payments process requires.</PricingCardLength>
                 
           
                 <br />
                <br />
                
              </PricingCardInfo>
            </PricingCard>
              
          </PricingContainer>
        </PricingWrapper>
        
      </PricingSection>
         

    </IconContext.Provider>
        </div> 

        <div> Want to see live in action?
      <Link to="/sign-up">
       <Button>Schedule Demo</Button>    
       </Link>
        </div>
 
  </div>;
  
};

export default Landlord;
