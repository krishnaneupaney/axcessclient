import React from 'react'
import { Link } from 'react-router-dom';
import { div } from './SidebarElements';

const Sidebar = () => {
    return (
           <div style={{backgroundColor: 'white'}}>
               <h6 style={{backgroundColor: 'white'}}>
        1 When you check your rate, we check your credit report. This initial (soft) inquiry will not affect your credit score. If you accept your rate and proceed with your application, we do another (hard) credit inquiry that will impact your credit score. If you take out a loan, repayment information will be reported to the credit bureaus.

2 Approval numbers compare the 2020 loan approval rate by the Axcess Fund model and a hypothetical traditional credit decision model. The APR calculation compares the two models based on the average APR offered to borrowers up to the same approval rate. The hypothetical traditional model used in AxcessFund’s analyses was developed in connection with the CFPB No Action Letter access-to-credit testing program, is trained on AxcessFund platform data, uses logistic regression and considers traditional application and credit file variables.

3 Neither AxcessFund nor its bank partners have a minimum educational attainment requirement in order to be eligible for a loan.

4 The majority of borrowers on the AxcessFund platform are able to complete the application process automatically without providing additional supporting documents, however final approval is conditioned upon passing the hard credit inquiry. Loan processing may be subject to longer wait times if additional documentation is required for review.

5 If you accept your loan by 5pm EST (not including weekends or holidays), your funds will be sent on the next business day. Loans used to fund education related expenses are subject to a 3 business day wait period between loan acceptance and funding in accordance with federal law.

The full range of available rates varies by state. The average 5-year loan offered across all lenders using the AxcessFund platform will have an APR of 5.70% and 60 monthly payments of $5.70 per $1,000 borrowed. For example, the total cost of a $10,000 loan would be $11,906 including a $207 origination fee. APR is calculated based on 5-year rates offered in the last 1 month. There is no downpayment and no prepayment penalty. Your APR will be determined based on your credit, income, and certain other information provided in your loan application. Not all applicants will be approved.

Images are not actual customers, but their stories are real.

Use of funds must be in accordance with AxcessFund's Acceptable Use Policy.
</h6>

<h6>Payment options through AxcessFund are provided by these lending partners: axcessfund.com/lenders. Your rate will be 0–30% APR based on credit, and is subject to an eligibility check. 
    Options depend on your purchase amount, and a down payment may be required. AxcessFund savings accounts are held with {}, Member FDIC. Axcess Fund, Inc., NMLS ID 2281463. 
    Axcess Loan Services, LLC, NMLS ID 2281463. California residents: Axcess Loan Services, LLC is (to be) licensed by the Department of Financial Protection and Innovation. Loans are made or arranged pursuant to California Financing Law license 60DBO-111681.</h6>
    <h5> Use of these fund must be compliance with our <Link to='/acceptableuseofpolicy' >Acceptable Use of Policy</Link> </h5>
    <Link to='/lender'>Lenders</Link>      <Link to='/privacy'>Privacy</Link>              <Link to='/terms'>Terms</Link>                        <Link to='/licenses'>Licenses</Link>                                          <h6> @Axcess Fund Inc. All Rights Reserved. </h6>
</div>
    )
}

export default Sidebar;
