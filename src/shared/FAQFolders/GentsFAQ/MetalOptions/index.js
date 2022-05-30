import React from 'react';
import Div from 'shared/Div';
import Q1 from './Q1';
import Q2 from './Q2';
import Q3 from './Q3';
import Q4 from './Q4';
import Q5 from './Q5';
import Q6 from './Q6';

// -----
const MetalOptions = (props) =>{
  return (
    <Div >
      {
        props.detailedId ==="q1" &&
        <Q1 />
      }
      {
        props.detailedId ==="q2" &&
        <Q2 />
      }
      {
        props.detailedId ==="q3" &&
        <Q3 />
      }
      {
        props.detailedId ==="q4" &&
        <Q4 />
      }
      {
        props.detailedId ==="q5" &&
        <Q5 />
      }
      {
        props.detailedId ==="q6" &&
        <Q6 />
      }
    </Div>
  )
}

export default MetalOptions;
