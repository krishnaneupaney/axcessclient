import React, {useState} from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from './Data';
import { InfoSection, Pricing } from '../../components';
import {homeObjSeven } from '../Services/Data';
import Data from '../SignUp/FAQ';
import Faq from "react-faq-component";
import '../SignUp/FAQ.css'
import '../HomePage/Home.css'
import {  NavIconn } from '../../components/Navbar/Navbar.elements';
  
function Home() {
  
  const [rows, setRowsOption] = useState(null);
  const data = {
    title: "Frequently Asked Question! (How it works)",
    rows: [
      {
        title: "What is Axcess Fund and what can I expect,",
        content: `Our mission moves us FORWARD - to deliver genuine financial products that improves lives
        Why? Because home matters. Home is where families thrive. But money is also a fundamental ingredient of life, and unlesss you're one of the few percent of Americans with significant wealth, the ability to borrow affects you everyday. Throughout history, affordable lending has been central to unlocking mobility and opportunity - especially for thoise in need!
        At AxcessFund, you get instant axcess to fund you need to pay your bill
        just by providing some few detail. You'll be able to pay right here through the platform`
      },
      {
        title: "Different kind of funds I can borrow?",
        content:
          "You can borrow for your essential needs: such as for rent, mortgage payment, utilities bill, insurace or car payment. For any essential bills you've need assistant with, you can get instant funding through Axcess Platform!ß"
      },
      {
        title: "Difference between an Interest Rate and an APR?",
        content: `The interest rate is only one factor of the cost of the loan. The total cost can be understood by the APR which is the annual cost of a loan inclusive both of interest rate and all other associated fees. For example, the cost of an origination fee is included in the APR. When comparing loan products, it is important to compare the APR of each product. 
          `
      },
      {
        title: "How soon can I get funded?",
        content: <p>Funds are available immediately to make your timely bill payment. However, it can take up to one budiness day for it to post it and process!</p>
      },
      {
        title: "Will checking affect my credit score?",
        content: <p> Checking your rate on AxcessFund will not affect your credit score. If you proceed with your application after receiving a rate your credit score may be impacted. When you check your rate, we make a "soft credit inquiry." Soft credit inquiries on your report do not lower your credit score, but you may see when you view your report that this inquiry was made. If you are offered a loan and proceed with the application, a "hard credit inquiry" will be completed to verify the accuracy of your application. 
          This action will be recorded as an inquiry on your report and it may impact your credit score. But don't worry, after 2-3 months of good payment history, score will go up! </p>
      },
      {
        title: "Can I pay a fee if I pay off my loan early?",
        content: <p>   here is no prepayment penalty for paying off a loan on AxcessFund early. You may pay off part of all of the loan at any time with no fee. 
          By prepaying, you will pay less overall interest because the loan is outstanding for a shorter time.</p>
      }
    ]
  };

  return (
    <>
      
      <InfoSection {...homeObjOne} />
      <h5><NavIconn />Checing won't affect your credit score<sup>1</sup></h5>
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjFive} />
      <Pricing />
      <InfoSection {...homeObjFour} />
      <InfoSection {...homeObjSeven} />
    <div>
      
    <Faq data={data} getRowOptions={setRowsOption} />
      <br />
      <br />
      <br />
     </div>
    
         
    </>
  );
}

export default Home;
