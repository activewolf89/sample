import React from 'react';
import Div from 'shared/Div';
import StringInputs from '../Inputs/StringInputs'
// -----
const Name = (props) =>{
  return (
    <Div >

      <StringInputs
        error={props.error}
        label={props.objToEdit.name}
        type='text'
        name={props.name}
        value={props.objToEdit.new}
        onStringInputChange = {props.onStringInputChange}
      />
    </Div>
  )
}
Name.propTypes = {
}
export default Name;
