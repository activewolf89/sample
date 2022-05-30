import React from 'react';
import Div from 'shared/Div';
import Span from 'shared/Span';

// -----
const funcC0mp = (props) =>{
  return (
    <Div display='flex'  flexWrap='nowrap'>
      <Span>
        {props.part1} /
      </Span>
      <Span>
        {props.part2} /
      </Span>
      <Span>
        {props.part3}
      </Span>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
