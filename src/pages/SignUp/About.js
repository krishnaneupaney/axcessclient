import React from 'react'
import {homeObjSeven, homeObjEleven, homeObjTwelve} from '../Services/Data';
import { InfoSection } from '../../components';
import '../SignUp/About.css'

const About = () => {
    return (
        <>

        <div>
            <h1>Vision</h1>
            <h2>Our vision is to not let any families lose their home just because of nonpayments! 
                <br />
                We believe everyone should have Axcess to safe home filled with love and joy!</h2>
        </div>
        <InfoSection {...homeObjSeven} />
        <h2>Axcess Fund is a leading artificial intelligence (AI) & ML powered lending platform designerd to improve the 
            Axcess to affordable fund borrowing while reducing the risk and costs of lender for out lending partner. 
            By leveraging AxcessFund's AI platform, Axcess-powered lenders can offer high approval rates and with lowest APR 
            while experience lower loss rates by simultineously delivering the exceptional all-digital lending experience to their customers in need! </h2>

        <br />
        <br />
        <br />
        <br />
        <h2>
            
            Lending is centuries old, but has changed little over the decades.
            <br />
            <br />
            <h3>So why us?</h3>
            <h4>Traditional lenders use simple FICO-based model to decide who is approved and for what interest rate. While simple and intuitive, these "scoreboard" methods are limited in their ability to quantify reasonable risk.</h4>

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
        </h3>
        <InfoSection {...homeObjTwelve} />
        <InfoSection {...homeObjEleven} />
        </>
    )
}

export default About
