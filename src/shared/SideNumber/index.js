import React from 'react';
import Div from 'shared/Div';


// -----
const funcC0mp = (props) =>{
  return (
    <Div position='absolute' left='100%' top='50%'>
      <small  style={{color:'white', fontWeight:'bold'}}>
        ({props.number})
      </small>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
