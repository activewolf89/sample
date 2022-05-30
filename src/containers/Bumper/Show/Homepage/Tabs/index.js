import React from 'react';
import Div from 'shared/Div';
import Button from 'shared/Button';

// -----
const funcC0mp = (props) =>{
  return (
    <Div >
      <Button themed grayedOut={!props.ourMessage}  width='50%' onClick={()=>{props.onSwapMessage()}}>
        Our Vibe
      </Button>
      <Button themed grayedOut={props.ourMessage} width='50%' onClick={()=>{props.onSwapMessage()}}>
        Events
      </Button>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
