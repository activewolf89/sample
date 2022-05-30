import React from 'react';
import Div from 'shared/Div';
import Q1 from './Q1';

// -----
const SafetyChains = (props) =>{
  return (
    <Div >
      {
        props.detailedId ==="q1" &&
        <Q1 />
      }
    </Div>
  )
}
SafetyChains.propTypes = {
}
export default SafetyChains;
