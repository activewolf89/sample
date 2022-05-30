import React from 'react';
import Div from 'shared/Div';
import Q1 from './Q1';
import Q2 from './Q2';

// -----
const EarringBacks = (props) =>{
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

    </Div>
  )
}
EarringBacks.propTypes = {
}
export default EarringBacks;
