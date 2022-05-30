import React from 'react';
import Div from 'shared/Div';
import StyleOptions from './StyleOptions';
import MetalOptions from './MetalOptions';
import SafetyChains from './SafetyChains';

// -----
const FAQ = (props) =>{
  return (
    <Div >
      {
        props.generalId === "style-options" &&
        <StyleOptions
          detailedId = {props.detailedId}
        />
      }
      {
        props.generalId === "metal-options" &&
        <MetalOptions
          detailedId = {props.detailedId}
        />
      }
      {
        props.generalId === "safety-chains" &&
        <SafetyChains
          detailedId = {props.detailedId}
        />
      }
    </Div>
  )
}
FAQ.propTypes = {
}
export default FAQ;
