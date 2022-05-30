import React from 'react';
import Div from 'shared/Div';
import Button from 'shared/Button';
import FontAwesome from 'react-fontawesome';
import {H3} from 'shared/H';
// -----
const funcC0mp = (props) =>{
  return (
    <Div >
      <Div alignItems='center' display='flex' justifyContent='space-around'>
        <Div padding='10px'>
          <Button width='300px' add={props.choice.value === "shipping"} onClick={()=>{props.onChoice('shipping')}}>
            <FontAwesome name='arrow-circle-right' />
            Schedule A Shipment
          </Button>
        </Div>
        <H3>
          -or-
        </H3>
        <Div padding='10px'>
          <Button width='300px' add={props.choice.value === "pickup"} onClick={()=>{props.onChoice('pickup')}}>
            <FontAwesome name='calendar' />
            Schedule A Pickup
          </Button>
        </Div>
      </Div>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
