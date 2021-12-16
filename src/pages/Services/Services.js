import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { homeObjOne, homeObjSeven} from './Data';

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
