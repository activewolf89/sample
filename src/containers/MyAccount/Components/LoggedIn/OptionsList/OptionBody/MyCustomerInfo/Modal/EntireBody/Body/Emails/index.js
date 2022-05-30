import React from 'react';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import EmailInputs from '../Inputs/EmailInputs'
// -----
const Emails = (props) =>{
  return (
    <NoMPUl childrenPadding='5px 0' display='flex' flexDirection='column'>
      <Li>
        <EmailInputs
          serverErrorObject = {props.serverErrorObject}
          onCheckIfEmailExists = {props.onCheckIfEmailExists}
          error = {props.error}
          onStringInputChange = {props.onStringInputChange}
          name={props.name}
          value={props.objToEdit.new}
        />
      </Li>
    </NoMPUl>
  )
}
Emails.propTypes = {
}
export default Emails;
