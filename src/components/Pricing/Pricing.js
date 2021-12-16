import React from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import Icon1 from '../../images/2.svg'
import Icon2 from '../../images/12.svg'
import Icon3 from '../../images/3.svg'

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
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Getting fund with AxcessFund is Easy</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
           
                  <ServicesIcon src={Icon1} />
                
                <PricingCardPlan>Sign In & add your bills</PricingCardPlan>
                {/* <PricingCardCost></PricingCardCost> */}
                <PricingCardLength>You can add any essential bills you need assistant with</PricingCardLength>
                {/* <PricingCardFeatures>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                </PricingCardFeatures> */}
                <br />
                <Button primary>More</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
           
                  <ServicesIcon src={Icon2} />
                
                <PricingCardPlan>Choose how you want to pay your bills</PricingCardPlan>
                {/* <PricingCardCost></PricingCardCost> */}
                <br />
                <PricingCardLength>Select the payment schedule that works for you, than confirm. We'll never charge more than you see before you hit submit</PricingCardLength>
                {/* <PricingCardFeatures>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                </PricingCardFeatures> */}
            
                <Button primary>More</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
           
                  <ServicesIcon src={Icon3} />
                
                <PricingCardPlan>Make easy monthly payments</PricingCardPlan>
                {/* <PricingCardCost></PricingCardCost> */}
                <br />
                <PricingCardLength>We'll send you email and text reminder so you never miss a payment.</PricingCardLength>
                {/* <PricingCardFeatures>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                </PricingCardFeatures> */}
            
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
