import React from 'react';
import Div from 'shared/Div';


// -----
const funcC0mp = (props) =>{
  return (
    <Div padding='5px'
      cursor='pointer'
      style={{writingMode:'vertical-rl',textOrientation:'mixed'}}
      left='100%'
      height='100%'
      onClick = {props.onToggle}
    >
      {props.children}
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
