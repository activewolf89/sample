import React from 'react';
import Div from 'shared/Div';
import Styles from './Styles';
import Metals from './Metals';
import EarringBacks from './EarringBacks';

// -----
const FAQ = (props) =>{
  return (
    <Div >
      {
        props.generalId === "style-options" &&
        <Styles
          detailedId = {props.detailedId}
        />
      }
      {
        props.generalId === "metal-options" &&
        <Metals
          detailedId = {props.detailedId}
        />
      }
      {
        props.generalId === "earring-backs" &&
        <EarringBacks
          detailedId = {props.detailedId}
        />
      }
    </Div>
  )
}
FAQ.propTypes = {
}
export default FAQ;
