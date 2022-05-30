import React from 'react';
import Div from 'shared/Div';
import {H2} from 'shared/H';

// -----
const funcC0mp = (props) =>{
  return (
    <Div themed display='flex' flexDirection='column' flexWrap='wrap' alignItems='center' >

      <H2 fontStyle='italic'>
        {props.subName}
      </H2>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
