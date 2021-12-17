import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { homeObjOne, homeObjSeven} from '../Services/Data';

function Services() {
  return (
    <>
      <Pricing />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjSeven} />
    </>
  );
}

export default Services;
