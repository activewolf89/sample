import React from 'react';
import Div from 'shared/Div';
import TopRotater from './TopRotater'

// -----
const funcC0mp = (props) =>{
  return (
    <Div >
      <TopRotater
        history={props.history}
        hideDetailOptions
      />
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
