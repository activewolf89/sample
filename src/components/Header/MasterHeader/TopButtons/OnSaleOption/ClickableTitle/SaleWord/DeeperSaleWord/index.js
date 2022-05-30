import React from 'react';
import Div from 'shared/Div';
import Countdown from 'shared/Countdown';
// -----
const funcC0mp = (props) =>{
  return (
    <Div >
      {
        props.saleName.ends &&
        <Countdown
          date = {props.saleName.ends}
        />
      }
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
