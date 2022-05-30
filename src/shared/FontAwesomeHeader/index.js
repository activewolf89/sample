import React from 'react';
import Div from 'shared/Div';
import FontAwesome from 'react-fontawesome';


// -----
const funcC0mp = (props) =>{
  return (
    <Div padding = '10px 0 0 0' >
      <FontAwesome name={props.name} style={{color:'white'}}  />
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
