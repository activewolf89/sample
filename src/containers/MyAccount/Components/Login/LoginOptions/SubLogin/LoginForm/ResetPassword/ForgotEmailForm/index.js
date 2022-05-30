import React from 'react';
import MasterInput from 'shared/MasterInput';
import NoMPUl from 'shared/NoMPUl';
import Div from 'shared/Div';
import Li from 'shared/Li';
import Button from 'shared/Button';
import {H3} from 'shared/H';
import P from 'shared/P';

// -----
const ForgotEmailForm = (props) =>{
  return (
    <NoMPUl  childrenPadding='10px' >
      <Li>
        <H3 textAlign='center'>
          Forgot Password?
        </H3>
      </Li>
      <Li>
        <P textAlign='center'>
          To reset your password, please enter your email address
        </P>
      </Li>
      <Li>
        <MasterInput
          width='100%'
          serverErrorObjectValue = {props.serverErrorObjectValue}
          forgotEmail
          type={props.type}
          name={props.name}
          value ={props.valueObject.value}
          onInputChange = {props.onInputChange}
          objName={props.objName}
          valueObject = {props.valueObject}
        />
      </Li>
      <Li>
        <Div >
          <Button themed width='100%' onClick={(e)=>{e.preventDefault();props.onSendEmailResetLink(props.valueObject.value)}}>
            Continue
          </Button>
        </Div>
      </Li>
    </NoMPUl>
  )
}
ForgotEmailForm.propTypes = {
}
export default ForgotEmailForm;
