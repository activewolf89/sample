import React from 'react';
import Div from 'shared/Div';
import Shipping from './Shipping';
import AccordianHeader from '../Shared/AccordianHeader';

// -----
const funcC0mp = (props) =>{
  return (
    <Div >
      <AccordianHeader onToggle = {props.onToggle} objKey={'choice'} name='Procurement' canEdit={props.choice.canEdit} expanded={props.active} value={props.choice.value} />
      {
        props.active &&
        <Shipping choice = {props.choice} onChoice = {props.onChoice} />
      }

    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
