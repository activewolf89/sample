import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import FontAwesome from 'react-fontawesome';
import Calendar from 'react-calendar';
import ClosedDate from 'components/App/HelperFunctions/ClosedDate';

import TimePicker from './TimePicker';
import Error from 'shared/Error';
import Span from 'shared/Span';

require('./Calendar.css')
// -----
const AppointmentQuestion = (props) =>{
  return (
    <Div  >

      <NoMPUl display='flex' flexDirection='column' childrenPadding='5px 0' height='100%'>
        <Div width='100px' whiteSpace='nowrap'>
          Appointment Time
          <Span color='red'>*</Span>
        </Div>
        <Div display='flex' flexWrap='nowrap'>

          {
            props.preferredContact.date.showError &&
            <Error>
              {props.preferredContact.date.error}
            </Error>
          }
          {
            props.preferredContact.time.showError && props.preferredContact.date.showError &&
            <Div>
              { " & "}
            </Div>
          }
        </Div>
        <Div  flexWrap='nowrap' error={props.preferredContact.date.showError}>
          {
            props.preferredContact.date.value &&
            <Div display='flex' flexWrap='nowrap' fontWeight='bold' alignItems='center'>
              {props.preferredContact.date.value.toDateString() }
              <FontAwesome onClick={props.onCancelAppointment} name='close' style={{color:'red', cursor:'pointer',padding:'0 5px'}} />
            </Div>
          }
        </Div>
        <Li height='100%'>
          <Div  height='100%' >
            {
              !props.preferredContact.date.value &&
              <Div   >
                <Calendar
                  className = "calendar"
                  tileDisabled = {(date) => ClosedDate(date)}
                  minDate= {new Date()}
                  onClickDay = {(day)=>{props.onInputChange('preferredContact','date',day)}}
                />
              </Div>
            }
            {
              props.preferredContact.date.value  &&
              <TimePicker
                time =  {props.preferredContact.time.value}
                date = {props.preferredContact.date.value}
                onInputChange = {props.onInputChange}
              />
            }
          </Div>
        </Li>
      </NoMPUl>
    </Div>

  )
}
AppointmentQuestion.propTypes = {
  preferredContact: PropTypes.object.isRequired,
  onInputChange: PropTypes.func.isRequired
}
export default AppointmentQuestion;
