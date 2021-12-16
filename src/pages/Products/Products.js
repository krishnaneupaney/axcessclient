import React from 'react';
import { InfoSection } from '../../components';
import { homeObjOne, homeObjTwo, homeObjEig } from './Data';

function Products() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      {/* <InfoSection {...homeObjEig} /> */}
    </>
  );
}

export default Products;
