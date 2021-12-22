import React, {useState} from 'react';
import { InfoSection } from '../../components';
import { homeObjOne, homeObjTwo } from './Data';
import { IconContext } from 'react-icons/lib';
import { useFormspark } from "@formspark/use-formspark";

import './Products.css'
import { Button, Buttoner } from '../../globalStyles';
import Icon1 from '../../images/2.svg'
import Icon2 from '../../images/12.svg'
import Icon3 from '../../images/3.svg'
import Icon4 from '../../images/network.png'
import Icon5 from '../../images/mortgage.png'
import Icon6 from '../../images/rent.png'
import Icon7 from '../../images/utilities.png'
import Icon8 from '../../images/student.png'
import Icon9 from '../../images/api.png'
import {
  PricingCards,
  PricingCardInfos,
  PricingCardPlan,
  ServicesIcon,
  PricingSections,
  PricingWrappers,
  PricingHeadings,
  PricingContainers,
  ServicesIcons,
  PricingCardLengths,
  PricingCardPlans,
  PricingCardFeaturess,
  PricingCardFeaturesss,
  PricingSectionser,
  PricingWrapperser,
  PricingCardser,
  PricingCardInfoser,
  ServicesIconser,
  PricingCardPlanser,
  PricingCardLengthser,
  PricingHeadingser,
  PricingContainerser
} from '../../components/Pricing/Pricing.elements';

const FORMSPARK_FORM_ID = "iNlNSMf3";


function Lenders() {
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

const [name, setName] = useState("");
const [phonenumber, setPhonenumber] = useState("");
const [message, setMessage] = useState("");
const [yourmessage, setYourmessage] = useState("");

const onSubmit = async (e) => {
  e.preventDefault();
  await submit({ message });
  alert("Form submitted - Come back for updates");
};
  return (
    <>
      <InfoSection {...homeObjOne} />
    <br />
      <div class="better">
        <br />
        <br />
        <br />
       <h1> At Axcess Fund - Realize dramatically better customer payment to you </h1>
      <br />
      <h2>We plan to make our platform 89% fewer defaults at same customer approval rates</h2>
      <br />
      <h2>6x more accurate predictive than just FICO score</h2>
      <br />
      <h2>92+ NPS vs less than 30 NPS at top-tier banks</h2>
      <br />
      <br />
      <Button primary>Request Info</Button>
    <br />
     <br />
     <br />
     <br />
      </div>
     
      <IconContext.Provider value={{ color: '#ff', size: 64 }}>
      <PricingSections>
        <PricingWrappers>
          <PricingHeadings>How you benefit!</PricingHeadings>
          <PricingContainers>
            <PricingCards to='/sign-up'>
              <PricingCardInfos>
           
                  <ServicesIcons src={Icon1} />
                
                <PricingCardPlans>Grow your customer paying portrfolio</PricingCardPlans>
                <PricingCardLengths>Grow your payment-conversion and profibility</PricingCardLengths>
                <PricingCardLengths>Deepen customer relationship</PricingCardLengths>
                <PricingCardLengths>Acquire more customer through affordable payment options powered by Axcess Fund Platform</PricingCardLengths>

                <Button primary>How?</Button>
              </PricingCardInfos>
            </PricingCards>
            <PricingCards to='/sign-up'>
              <PricingCardInfos>
           
                  <ServicesIcons src={Icon2} />
                
                <PricingCardPlans>Lend more and give flexibility to more creditworthy customers safely</PricingCardPlans>

                <PricingCardLengths>Know the price and predict risk accurately </PricingCardLengths>

                <PricingCardLengths>Increase well deserving loyal customers to well-paying customers </PricingCardLengths>

                <PricingCardLengths>Of-course maintain 100% control of your own policy</PricingCardLengths>
          
            
                {/* <Button primary>But How?</Button> */}
              </PricingCardInfos>
            </PricingCards>
            <PricingCards to='/sign-up'>
              <PricingCardInfos>
           
                  <ServicesIcons src={Icon3} />
                
                <PricingCardPlan>Deliver 100% all-digital AI/ML-driven smooth experience</PricingCardPlan>
                <PricingCardLengths>Let your customer borow and pay anytime - anywhere </PricingCardLengths>
                <PricingCardLengths>Lend in minutes than in days like bank does</PricingCardLengths>
                <PricingCardLengths>Absolutely minimize risk and fraud rate</PricingCardLengths>
                <Button primary> Learn More</Button>
              </PricingCardInfos>
            </PricingCards>
          </PricingContainers>
          
        </PricingWrappers>
      </PricingSections>
    </IconContext.Provider>
      <InfoSection {...homeObjTwo} />
      {/* <InfoSection {...homeObjEig} /> */}











      <IconContext.Provider value={{ color: '#ff', size: 64 }}>
      <PricingSectionser>
        <PricingWrapperser>
          <PricingHeadingser>Axcess Fund Solutions (coming soon)</PricingHeadingser>
          <PricingContainerser>
            <PricingCardser to='/sign-up'>
              <PricingCardInfos>
           
                  <ServicesIconser src={Icon4} />
                
                {/* <PricingCardPlans>Grow your customer paying portrfolio</PricingCardPlans>
                <PricingCardLengths>Grow your payment-conversion and profibility</PricingCardLengths>
                <PricingCardLengths>Deepen customer relationship</PricingCardLengths>
                <PricingCardLengths>Acquire more customer through affordable payment options powered by Axcess Fund Platform</PricingCardLengths>

                <Button primary>How?</Button> */} <h1>Referral Network</h1>
              </PricingCardInfos>
            </PricingCardser>
           
            <PricingCardser to='/sign-up'>
              <PricingCardInfos>
           
                  <ServicesIconser src={Icon5} />
                
                {/* <PricingCardPlans>Lend more and give flexibility to more creditworthy customers safely</PricingCardPlans>

                <PricingCardLengths>Know the price and predict risk accurately </PricingCardLengths>

                <PricingCardLengths>Increase well deserving loyal customers to well-paying customers </PricingCardLengths>

                <PricingCardLengths>Of-course maintain 100% control of your own policy</PricingCardLengths>
          
             */}
                {/* <Button primary>But How?</Button> */} <h1>Mortgage Assistant Lending</h1>
              </PricingCardInfos>
            </PricingCardser>
            <PricingCardser to='/sign-up'>
              <PricingCardInfos>
           
                  <ServicesIconser src={Icon6} />
{/*                 
                <PricingCardPlan>Deliver 100% all-digital AI/ML-driven smooth experience</PricingCardPlan>
                <PricingCardLengths>Let your customer borow and pay anytime - anywhere </PricingCardLengths>
                <PricingCardLengths>Lend in minutes than in days like bank does</PricingCardLengths>
                <PricingCardLengths>Absolutely minimize risk and fraud rate</PricingCardLengths>
                <Button primary> Learn More</Button> */} <h1>Rent Assistant Lending</h1>
              </PricingCardInfos>
              
            </PricingCardser>
            
          </PricingContainerser>
                  <PricingContainers>
            <PricingCardser to='/sign-up'>
              <PricingCardInfoser>
           
                  <ServicesIconser src={Icon7} />
                
                {/* <PricingCardPlanser>Grow your customer paying portrfolio</PricingCardPlanser>
                <PricingCardLengthser>Grow your payment-conversion and profibility</PricingCardLengthser>
                <PricingCardLengthser>Deepen customer relationship</PricingCardLengthser>
                <PricingCardLengthser>Acquire more customer through affordable payment options powered by Axcess Fund Platform</PricingCardLengthser>

                <Button primary>How?</Button> */} <h1>Utilities Assistant Lending</h1>
              </PricingCardInfoser>
            </PricingCardser>
            <PricingCardser to='/sign-up'>
              <PricingCardInfoser>
           
                  <ServicesIconser src={Icon8} />
                
                {/* <PricingCardPlanser>Lend more and give flexibility to more creditworthy customers safely</PricingCardPlanser>

                <PricingCardLengthser>Know the price and predict risk accurately </PricingCardLengthser>

                <PricingCardLengthser>Increase well deserving loyal customers to well-paying customers </PricingCardLengthser>

                <PricingCardLengthser>Of-course maintain 100% control of your own policy</PricingCardLengthser>
          
             */}
                {/* <Button primary>But How?</Button> */} <h1>Axcess Fund for Student Loan Assistant</h1>
              </PricingCardInfoser>
            </PricingCardser>
            <PricingCardser to='/sign-up'>
              <PricingCardInfoser>
           
                  <ServicesIconser src={Icon9} />
                
                {/* <PricingCardPlanser>Deliver 100% all-digital AI/ML-driven smooth experience</PricingCardPlanser>
                <PricingCardLengthser>Let your customer borow and pay anytime - anywhere </PricingCardLengthser>
                <PricingCardLengthser>Lend in minutes than in days like bank does</PricingCardLengthser>
                <PricingCardLengthser>Absolutely minimize risk and fraud rate</PricingCardLengthser>
                <Button primary> Learn More</Button> */} <h1>Instant Decision Credit API Technology</h1>
                <br />
                <br />
                <br />
              
              </PricingCardInfoser>
            </PricingCardser>
          </PricingContainers>  
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Buttoner primary>Request Info</Buttoner>
        </PricingWrapperser>
      </PricingSectionser>
    </IconContext.Provider>

    

    <div className="lenders"> 
         <form onSubmit={onSubmit}>
        <br />     
        <br />     
    
      
      <h1> Request Information </h1>  
      <h3>Learn how you can convert more payment from your customers bill paying by providing more ways to borrow money as from <br /> 
      Axcess Fund within your own credit policy approving more funding using <br /> 
      Axcess Lending Platform while simultaneously providing a modern, all-digital experience!</h3>
      <br />
    <h4>First & Last Name</h4>
      <input placeholder="Your first and last name"
       value={name} onChange={(e) => setName(e.target.value)} 
       style={{width: "150px", height: "40px"}}/>
      <br />
      <br />
      <h5>Phone number</h5>
      <input placeholder="your cell phone number" 
      value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)}
      style={{width: "140px", height: "40px"}} />
      <br />
      <br />
      <h5>Work Email</h5>
      <input placeholder="your work email" value={message}
       onChange={(e) => setMessage(e.target.value)} 
       style={{width: "130px", height: "30px"}}/>
      <br />
      <br />
      <h5>Message</h5>
      <input value={yourmessage} placeholder="Share your goals: (growing existing customer into paying customer, 
        drasticially improve digital process, provide better decision with AI/ML..." 
        onChange={(e) => setYourmessage(e.target.value)} style={{width: "200px", height: "80px"}} />
      {/* <button type="submit" disabled={submitting}>
        Sign Up
      </button> */}
      <br />
      <br />
      <Button fontBig type="submit"  disabled={submitting}>Sign Up</Button>
      
      <br />
      <br />
    </form> 
    </div>




    </>
  );
}

export default Lenders;
