import React from 'react';
import Div from 'shared/Div';
import Calendar from 'react-calendar';
import ClosedDate from 'components/App/HelperFunctions/ClosedDate';
import ShippingDate from 'components/App/HelperFunctions/ShippingDate';
import GenerateShippingEstimate from 'containers/Checkout/Helpers/GenerateShippingEstimate'


// -----
const funcC0mp = (props) =>{
  return (
    <Div position='absolute' zIndex='10' top='0' left='0' >
      {
        props.fromAppointment ?
          <Div >
            <Calendar
              className = "calendar"
              tileDisabled = {(date) => ClosedDate(date,14)}
              minDate= {new Date()}
              onClickDay = {(day)=>{props.onCalendarChange();props.onInputChange(props.choiceKey,'receivedDay',GenerateShippingEstimate(day,'fromCalendar','appointment'))}}
            />
          </Div>:
          <Calendar
            className = "calendar"
            tileDisabled = {(date) => ShippingDate(date)}
            minDate= {new Date()}
            onClickDay = {(day)=>{props.onCalendarChange();props.onInputChange(props.choiceKey,'receivedDay',GenerateShippingEstimate(day,'fromCalendar'))}}
          />
      }

    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
