import React from 'react';
import Div from 'shared/Div';
// -----
const TitleFAQ2 = (props) =>{
  return (
  <Div cursor="pointer" fontWeight={props.isOpen ?"bold":""} clickable display='flex' justifyContent="space-between" alignItems="center" padding="0 10px" borderBottom="1px solid black">
    {props.children}
  </Div>
  )
}
TitleFAQ2.propTypes = {
}
export default TitleFAQ2;
