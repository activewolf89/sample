import React from 'react';
import Div from 'shared/Div';
import UpcomingHoliday from '../UpcomingHoliday';
// -----
const funcC0mp = (props) =>{
  return (
    <Div  overflow='hidden' >
      <UpcomingHoliday
        onContactClick = {props.onContactClick}
      />
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
