import React from 'react'
import {homeObjSeven, homeObjEleven, homeObjTwelve, homeObjThirteen, homeObjFourteen} from '../Services/Data';
import { InfoSection } from '../../components';
import './About.css'
import { VideoBg } from '../../components/InfoSection/InfoSection.elements';
import Video from '../../Video/chart.mp4'
import '../SignUp/About.css'
 
const About = ({bounce, buttonLabel}) => {
    return (
        <>

        
        <div style={{ textAlign: "center"}}>
             <br />
            <br />
            <br />
            <h1>At Axcess Fund,
                <br />
                 we are breaking the barriers of traditional lending to underprivileged communities!​

​</h1>
            <br />
             <h1>Mission & Vision</h1>
            <h2>To be as pervasive, secure, and convenient as a lending platform for those in need, while delivering a transparent and honest financial products that improve the lives of people we serve!.​ 
                <br />
                <br />
                <h2>Our ultimate vision is to be: The Only All-In-One Financial Solution Platform for Renters & Landlords</h2>
                <br />
                We believe everyone should have Axcess to safe home filled with love and joy!</h2>
                <br />
                <h1> Our Value </h1>

                <h2>The most important thing we value in our business is honesty, integrity, hard work, and 
                    <br />
                    family - never forgetting where we came from!</h2>
                    <b/>
                    <br />
        </div>
        <InfoSection {...homeObjSeven} />
        <div style={{ textAlign: "center"}}>
            <br />
        <h2>Axcess Fund is a leading artificial intelligence (AI) & ML powered lending platform designed to improve the 
           <br /> Axcess to affordable fund borrowing while reducing the risk and costs of lender for our lending partner. 
           <br /> By leveraging AxcessFund's AI platform, Axcess-powered lenders can offer high approval rates and with lowest APR 
           <br /> while experience lower loss rates by simultineously delivering the exceptional all-digital lending experience to their customers in need! </h2>

        <br />
        <br />
        <br />
        <br />
        <h2>
            
            Lending is centuries old, but has changed little over the decades.
            <br />
            <br />
            <h3>So why us?</h3>
            <h4>Traditional lenders use simple FICO-based model to decide who is approved and for what interest rate. <br /> While simple and intuitive, these "scoreboard" methods are limited in their ability to quantify reasonable risk.</h4>

        </h2>
        <br />
        <br />
        <br />
        <h1>Four in five Americans</h1>
        <br />
        <h2>have never defaulted on a credit product, yet less than half have access to prime credit</h2>
        <br />
        <h3>The implication is eye-opening. With a smarter credit modeling focusing on real-data, 
            <br />
            lenders could approve almost twicew as many borrowers, with fewer defaults
          
        </h3>  <br />
        </div>
        <InfoSection {...homeObjTwelve} />
        <div className="system" style={{ textAlign: "center"}}>
            <br />
            <br />
            <h1 >The system improves constantly,</h1>
            <br />
            <h2>learning and optimizing in response to daily loan-level repayment history 
                <br />
                and deliquency data.</h2>
            <br />
            
        <VideoBg autoPlay loop muted src={Video} type='video/.mp4' />    
        <br />
        <br />
        <br />
        <br />
        </div>
        

        <InfoSection {...homeObjEleven} />
        <InfoSection {...homeObjFourteen} />
        </>
    )
}

export default About
