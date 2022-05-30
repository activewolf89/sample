import React from 'react';
import Div from 'shared/Div';
import StyleOptions from './StyleOptions';
import ChainInfo from './ChainInfo';
// -----
const FAQ = (props) =>{
  return (
    <Div >
      {
        props.generalId === "metal-options" &&
        <StyleOptions
          detailedId = {props.detailedId}
        />
      }
      {
        props.generalId === "style-options" &&
        <StyleOptions
          detailedId = {props.detailedId}
        />
      }
      {
        props.generalId === "chain-info" &&
        <ChainInfo
          detailedId = {props.detailedId}
        />
      }
    </Div>
  )
}
FAQ.propTypes = {
}
export default FAQ;
