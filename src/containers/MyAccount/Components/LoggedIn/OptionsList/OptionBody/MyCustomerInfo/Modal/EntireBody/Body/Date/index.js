import React from 'react';
import Div from 'shared/Div';
import StringInputs from '../Inputs/StringInputs'
// -----
const Date = (props) =>{
  return (
    <Div >
      <StringInputs
        error={props.error}
        label="New Date"
        type='date'
        name={props.name}
        value={props.objToEdit.new ? props.objToEdit.new.substring(0,10):''}
        onStringInputChange = {props.onStringInputChange}
      />
    </Div>
  )
}
Date.propTypes = {
}
export default Date;
