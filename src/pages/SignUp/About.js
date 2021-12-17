import React from 'react'
import {homeObjSeven, homeObjTen} from '../Services/Data';
import { InfoSection } from '../../components';


const About = () => {
    return (
        <>

        <div>
            <h1>Vision</h1>
            <h2>Our vision is to not let any families lose their home just because of nonpayments temporarily! 
                <br />
                We believe everyone should have Axcess to safe home filled with love and joy!</h2>
        </div>
        <InfoSection {...homeObjSeven} />
        <InfoSection {...homeObjTen} />
        </>
    )
}

export default About
