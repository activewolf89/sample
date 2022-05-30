import React from 'react';
import Div from 'shared/Div';
import FontAwesome from 'react-fontawesome';

// -----
const TitleFAQ = (props) =>{
  return (
  <Div cursor="pointer" fontWeight={props.isOpen ? "bold":""} display='flex' justifyContent="space-between" alignItems="center" padding="0 10px" borderBottom="1px solid black">
    {props.children}
    <FontAwesome name={props.isOpen ? 'minus':"plus"} />
  </Div>
  )
}
TitleFAQ.propTypes = {
}
export default TitleFAQ;
