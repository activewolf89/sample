import React from 'react';
import Div from 'shared/Div';
import StyleOptions from './StyleOptions';
import StrapOptions from './StrapOptions';
import SmartOptions from './SmartOptions';
import AutomaticVsQuartz from './AutomaticVsQuartz';

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
        props.generalId === "strap-options" &&
        <StrapOptions
          detailedId = {props.detailedId}
        />
      }
      {
        props.generalId === "automatic-vs-quartz" &&
        <AutomaticVsQuartz
          detailedId = {props.detailedId}
        />
      }
      {
        props.generalId === "smart-options" &&
        <SmartOptions
          detailedId = {props.detailedId}
        />
      }
    </Div>
  )
}
FAQ.propTypes = {
}
export default FAQ;
