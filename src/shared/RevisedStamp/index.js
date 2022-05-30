import React from 'react';
import Div from 'shared/Div';
import {H2} from 'shared/H';

// -----
const funcC0mp = (props) =>{
  return (
    <Div color='red'>
      <H2>
        Revised on:
        {props.revised}
      </H2>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
