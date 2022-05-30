import React from 'react';
import Div from 'shared/Div';
import RingSize from './RingSize';
import RingStyles from './RingStyles';
import Comfortability from './Comfortability';
import MetalOptions from './MetalOptions';

// -----
const GentsFAQ = (props) =>{
  return (
    <Div >
      {
        props.generalId === "gents-ring-size" &&
        <RingSize
          detailedId = {props.detailedId}
        />
      }
      {
        props.generalId === "gents-ring-styles" &&
        <RingStyles
          detailedId = {props.detailedId}
        />
      }
      {
        props.generalId === "comfortability" &&
        <Comfortability
          detailedId = {props.detailedId}
        />
      }
      {
        props.generalId === "gents-metal-options" &&
        <MetalOptions
          detailedId = {props.detailedId}
        />
      }
    </Div>
  )
}
export default GentsFAQ
GentsFAQ.propTypes = {
}
