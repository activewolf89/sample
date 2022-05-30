import React from 'react';
import Div from 'shared/Div';
import AccordianHeader from '../Shared/AccordianHeader';
import LogisticsQuestions from './LogisticsQuestions'
import CapitalizeFirstLetter  from 'containers/App/HelperFunctions/CapitalizeFirstLetter';
// -----
const funcC0mp = (props) =>{
  var choiceKey = props.customerInfo.choice.value;
  var foundValue = '';
  if(choiceKey !== ""){
     foundValue = CapitalizeFirstLetter(props.customerInfo.logistics.choices[choiceKey].firstName.value) + " " + CapitalizeFirstLetter(props.customerInfo.logistics.choices[choiceKey].lastName.value);
    var words = choiceKey === "shipping" ? "recipient":"for"
  }
  return (
    <Div >
      <AccordianHeader
        onToggle = {props.onToggle} objKey={'logistics'}
        canEdit={props.customerInfo.logistics.canEdit}
        name='Logistics'
        expanded={props.active}
        value={foundValue ? (words + " " + foundValue):'fill in'}
      />
      {
        props.active &&
        <LogisticsQuestions
          isPullCityState = {props.isPullCityState}
          isLoading = {props.isLoading}
          onLoadConfirmation = {props.onLoadConfirmation}
          onInputChange={props.onInputChange}
          onToggle = {props.onToggle}
          triggerClock = {props.triggerClock}
          customerInfo = {props.customerInfo}
          onCalendarChange = {props.onCalendarChange}
          triggerCalendar = {props.triggerCalendar}
        />
      }

    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
