import React from 'react';
import Div from 'shared/Div';
import Q1 from './Q1';

// -----
const MetalOptions = (props) =>{
  return (
    <Div >
      {
        props.detailedId ==="q1" &&
        <Q1 />
      }

    </Div>
  )
}
MetalOptions.propTypes = {
}
export default MetalOptions;
