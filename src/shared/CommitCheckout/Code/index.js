import React from 'react';
import Div from 'shared/Div';
import Span from 'shared/Span';
// -----
const funcC0mp = (props) =>{
  return (
    <Div  >
      <Div display='flex' justifyContent='space-between' padding='5px 0'>
        <small>
          {props.name1}
        </small>
        <Div fontWeight='bold'>
          {props.title}  - <Span color='green'>Applied!</Span>
        </Div>
      </Div>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
