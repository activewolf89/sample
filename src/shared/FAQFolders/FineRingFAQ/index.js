import React from 'react';
import Div from 'shared/Div';
import Durability from './Durability';
import RingSizes from './RingSizes';
import StoneOptions from './StoneOptions';
import StyleOptions from './StyleOptions';

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
        props.generalId === "durability" &&
        <Durability
          detailedId = {props.detailedId}
        />
      }
      {
        props.generalId === "ring-sizes" &&
        <RingSizes
          detailedId = {props.detailedId}
        />
      }
      {
        props.generalId === "stone-options" &&
        <StoneOptions
          detailedId = {props.detailedId}
        />
      }
    </Div>
  )
}
FAQ.propTypes = {
}
export default FAQ;
