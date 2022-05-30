import React from 'react';
import Div from 'shared/Div';
import P from 'shared/P';
import Button from 'shared/Button';
import Shipping from './Shipping';
import Pickup from './Pickup';
// -----
const funcC0mp = (props) =>{
  return (
    <Div  >
      {
        props.customerInfo.choice.value === "shipping" ?
          <Shipping />:
          <Pickup />
      }
      <Div textAlign='center' width='100%' onClick={()=>{props.onToggle('confirmation')}}>
        <Button width='100%' add>Next</Button>
      </Div>
    </Div>

  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
