import React from 'react';
import Div from 'shared/Div';
import TimePicker from './TimePicker';

// -----
const funcC0mp = (props) =>{
  return (
    <Div position='absolute' zIndex='10' top='0' left='0'>
      <TimePicker
        onInputChange = {props.onInputChange}
        date = {props.date}
        onCalendarChange = {props.onCalendarChange}
      />
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
