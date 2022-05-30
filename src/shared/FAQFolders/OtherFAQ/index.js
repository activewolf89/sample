import React from 'react';
import Div from 'shared/Div';
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
    </Div>
  )
}
FAQ.propTypes = {
}
export default FAQ;
