import React from 'react'
import Video from '../../Video/axx.mp4'
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

  ServicesIcon,
  PricingCardd
} from '../../components/Pricing/Pricing.elements';

import { Button } from '../../globalStyles';
import { IconContext } from 'react-icons/lib';
  
export const Bills = () => {
  return (
    <div style={{background: "skyblue", textAlign: "center"}}>
      <br />
      <br />
      <h1 >Axcess Portal is all-in-one bills management system</h1>
      <br />
      <h3>Life is busy! We're presented with many task at once and frankly sometime it's impossible to remember to pay all the bills, on-time, all the time.  
       <br />
       <br /> Well, not anymore!
       <br /> 
             </h3>
      <br />
      <video autoPlay loop muted id='video' style={{
          position: "flexible",
          width: "101%",
          height: "85%",
          left: 0,
          top: 0
        }}> 
          <source src={Video} type='video/mp4' />
      </video>
      <div>
           <div>
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Managing Bills with Axcess Portal is Easy & Fast!</PricingHeading>
          <PricingContainer>
            <PricingCardd to='/sign-up'>
              
              <PricingCardInfo>
           
                 
                <PricingCardPlan>Sign In & add your bills</PricingCardPlan>
                 <PricingCardLength>You can add any bills you make monthly payment for</PricingCardLength>
                 <Button primary>Add Bills</Button>

                
                 
              </PricingCardInfo>
            </PricingCardd>
            <PricingCardd to='/form'>
              <PricingCardInfo>
           
                  {/* <ServicesIcon src={Icon2} /> */}
                
                <PricingCardPlan>Choose your prefered payment methods</PricingCardPlan>
      
                <PricingCardLength>You can add other form of payment, split or apply for funding if needed!</PricingCardLength>
                 <Button primary>Methods</Button>
                <br />
              </PricingCardInfo>
            </PricingCardd>
            <PricingCardd to='/form'>
              <PricingCardInfo>
           
                  {/* <ServicesIcon src={Icon3} /> */}
            
                <PricingCardPlan>Automate and Relax</PricingCardPlan>
               
                <br />
                <PricingCardLength>We'll send you email and text reminder so you never miss a payment, thus never pay late or any other nonsense fees.</PricingCardLength>
                
                <Button primary>Automate</Button>

              </PricingCardInfo>
            </PricingCardd>
                
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
          </div>
           
      </div>
      </div>
      
  )
}
