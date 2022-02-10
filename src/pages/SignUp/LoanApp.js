import React from 'react';

import { Widget } from '@typeform/embed-react'

const handleOnReady = () => {
  // eslint-disable-next-line no-console
  console.log('form ready')
}


const LoanApp = () => {
  return (
    <div>
      <div className="App-container">
        <Widget
          id="pRNDP3Op"
          style={{ margin: '0 auto', width: 700, height: 700, color: 'red' }}
          onReady={handleOnReady}
          enableSandbox
        />
      </div>
    </div>
  )
}

export default LoanApp
