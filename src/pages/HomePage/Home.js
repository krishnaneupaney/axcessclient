import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from './Data';
import { InfoSection, Pricing } from '../../components';
import {homeObjSeven } from '../Services/Data';

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjFive} />
      <Pricing />
      <InfoSection {...homeObjFour} />
      <InfoSection {...homeObjSeven} />
    </>
  );
}

export default Home;