import React from 'react';
import Div from 'shared/Div';
import AccordianHeader from '../Shared/AccordianHeader';
import ConfirmationQuestions from './ConfirmationQuestions'
// -----
const funcC0mp = (props) =>{
  return (
    <Div>
      <AccordianHeader onToggle = {props.onToggle} objKey={'confirmation'} canEdit={props.customerInfo.confirmation.canEdit} name='Confirmation' expanded={props.active} value={props.confirmation} />
      {
        props.active &&
        <ConfirmationQuestions
          isLoading={props.isLoading}
          choiceKey = {props.choiceKey}
          onInputChange={props.onInputChange}
          onToggle = {props.onToggle}
          onRemoveItem = {props.onRemoveItem}
          onRemoveFromCartItem = {props.onRemoveFromCartItem}
          inventoryList = {props.inventoryList}
          customerInfo = {props.customerInfo}
          textValue = {props.customerInfo.logistics.choices[props.choiceKey].comment.value}
          onLoadConfirmation = {props.onLoadConfirmation}
        />
      }

    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
