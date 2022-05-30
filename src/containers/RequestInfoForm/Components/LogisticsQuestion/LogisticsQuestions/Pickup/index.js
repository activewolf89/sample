import React from 'react';
import Div from 'shared/Div';
import Question from 'containers/RequestInfoForm/Components/Shared/Question';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import P from 'shared/P';
import PickupInformation from './PickupInformation'
import Span from 'shared/Span';
import CheckCalendar from 'containers/RequestInfoForm/Components/CheckCalendar'
import CheckClock from 'containers/RequestInfoForm/Components/CheckClock';
import OutsiderAlert from 'shared/OutsiderAlert';
// -----
const funcC0mp = (props) =>{
  var Convert = function(dateString){
    dateString = dateString.slice(dateString.indexOf('/') -2,dateString.length - 1)
    var dayToLookup = new Date(dateString);
    return dayToLookup
  }
  return (
    <Div >
      <NoMPUl childrenBorderBottom='1px solid gray'>
        <Li>
          <Question  question={'Please enter your name and date'}  />
          <PickupInformation
            onInputChange={props.onInputChange}
            choiceKey={props.choiceKey}
            shippingObject = {props.choices[props.choiceKey]}
          />
        </Li>
        <Li>

          <P fontStyle='italic'>
            Your appointment date is <Span fontWeight='bold'>{props.choices[props.choiceKey].receivedDay.value + "  " + props.choices[props.choiceKey].receivedTime.value }</Span>
          </P>
          <Div >
            <Span cursor='pointer' textDecoration='underline' fontWeight='bold' color='black' onClick={()=>{props.onCalendarChange()}}>Change Date</Span>
            /
            <Span cursor='pointer' textDecoration='underline' fontWeight='bold' color='black' onClick={()=>{props.onCalendarChange(true)}}>Change Time</Span>
          </Div>

          <Div position='relative'>
            {
              props.triggerCalendar &&
              <OutsiderAlert callback={()=>{props.onCalendarChange()}}>
                <CheckCalendar
                  fromAppointment
                  onCalendarChange = {props.onCalendarChange}
                  onInputChange={props.onInputChange}
                  choiceKey = {props.choiceKey}
                />
              </OutsiderAlert>
            }
            {
              props.triggerClock &&
              <OutsiderAlert callback={()=>{props.onCalendarChange(true)}}>
                <CheckClock
                  onCalendarChange = {props.onCalendarChange}
                  onInputChange={props.onInputChange}
                  date = {Convert(props.choices.pickup.receivedDay.value)}
                />
              </OutsiderAlert>
            }
          </Div>
        </Li>
      </NoMPUl>

    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
