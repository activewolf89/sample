import React from 'react';
import Div from 'shared/Div';
import AccordianHeader from '../Shared/AccordianHeader';
import LogisticsQuestions from './LogisticsQuestions'
// -----
const funcC0mp = (props) =>{
  return (
    <Div >
      <AccordianHeader onToggle = {props.onToggle} objKey={'logistics'} canEdit={props.customerInfo.logistics.canEdit} name='Logistics' expanded={props.active} value={props.logistics} />
      {
        props.active &&
        <LogisticsQuestions
          onToggle = {props.onToggle}
          customerInfo = {props.customerInfo}
        />
      }

    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
