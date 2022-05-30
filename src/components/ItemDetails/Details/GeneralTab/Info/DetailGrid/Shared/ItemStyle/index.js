import React from 'react';
import Div from 'shared/Div';
import Span from 'shared/Span';


// -----
const funcC0mp = (props) =>{
  return (
    <Div >
      {props.name}:   <Span fontStyle='italic'>{props.value}</Span>

    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
