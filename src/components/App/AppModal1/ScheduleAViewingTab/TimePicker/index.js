import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';
//shared
import Title from 'shared/Title';
import TimePicker from 'react-times';
import FontAwesome from 'react-fontawesome';
import {getEarlyTime,getLaterTime} from './getTime.js';

import 'react-times/css/material/default.css';
// or you can use classic theme
import 'react-times/css/classic/default.css';
// -----



const Time = (props) =>{
  return (
    <Div >
      <Title>{props.date.toDateString() + " at " + props.endTime} <FontAwesome name="window-close" onClick={()=>{props.onCalendarClick('erase')}}/></Title>

      <Div  display="flex"  height="200px" border = "1px solid black" color="black" backgroundColor="white">
        <Div width="100%">
          <Title>Time</Title>
          {
            props.date &&
            <TimePicker
              time= {props.endTime.toString() ? props.endTime.toString():getEarlyTime(props.date)}
              theme="classic"
              timeMode="12"
              onTimeChange={(time)=>{props.onTimesChange(time,time.minute,'start')}}
              timeConfig={{
                from:  getEarlyTime(props.date),
                to:  getLaterTime(),
                step: 30,
                unit: 'minute'
              }}
            />
          }
        </Div>
      </Div>
    </Div>
  )
}
Time.propTypes = {
  onTimesChange: PropTypes.func.isRequired,
  onCalendarClick: PropTypes.func.isRequired
}
export default Time;
