import React from 'react'
import {homeObjSeven, homeObjTen} from '../Services/Data';
import { InfoSection } from '../../components';


const About = () => {
    return (
        <>

        <div>
            <h1>About US</h1>
            <h2>We are we?</h2>
        </div>
        <InfoSection {...homeObjSeven} />
        <InfoSection {...homeObjTen} />
        </>
    )
}

export default About
