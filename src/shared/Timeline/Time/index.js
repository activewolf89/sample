import React from 'react';
import Div from 'shared/Div';
import Span from 'shared/Span';
import Countdown from 'shared/Countdown';
// -----
const funcC0mp = (props) =>{
  return (
    <Div display='flex' flexDirection='column' alignItems='center'>
      <Span>
        {props.date.title}
      </Span>
      <Span>
        <Countdown  date={props.date.date} />
      </Span>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
