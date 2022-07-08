import React from 'react';
import { Button } from '../../globalStyles';
import { IconContext } from 'react-icons/lib';
import Icon1 from '../../images/bill.png'
import Icon2 from '../../images/12.svg'
import Icon3 from '../../images/3.svg'

import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,

  ServicesIcon
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Getting started with Axcess Rent is Easy & Fast!</PricingHeading>
          <PricingContainer>
            <PricingCard to='/form'>
              
              <PricingCardInfo>
           
                  <ServicesIcon src={Icon1} />
                
                <PricingCardPlan>Sign In & add your bills</PricingCardPlan>
                <PricingCardCost></PricingCardCost>
                <PricingCardLength>You can add any essential bills you need assistant with</PricingCardLength>
                
                
                <Button primary>More</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/form'>
              <PricingCardInfo>
           
                  <ServicesIcon src={Icon2} />
                
                <PricingCardPlan>Choose how you want to pay your bills</PricingCardPlan>
      
                <PricingCardLength>Select the payment schedule that works for you, than confirm. We'll never charge more than you see before you hit submit</PricingCardLength>
                 
            
                <Button primary>More</Button>
                <br />
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/form'>
              <PricingCardInfo>
           
                  <ServicesIcon src={Icon3} />
                
                <PricingCardPlan>Make easy monthly payments</PricingCardPlan>
               
                <br />
                <PricingCardLength>We'll send you email and text reminder so you never miss a payment.</PricingCardLength>
                 
            
                <Button primary>More</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
