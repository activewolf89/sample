import React from 'react';
import Div from 'shared/Div';
import A3 from 'shared/A3';

// -----
const funcC0mp = (props) =>{
  return (
    <Div padding = '20px 0'>
      Can't find what your looking for? <A3 onClick={()=>{props.onContactClick('email')}}>Contact us</A3>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
