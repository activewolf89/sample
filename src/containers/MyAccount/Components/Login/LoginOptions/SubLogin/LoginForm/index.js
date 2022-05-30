import React from 'react';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import MasterInput from 'shared/MasterInput';
import Button from 'shared/Button';
import Span from 'shared/Span';
import Div from 'shared/Div';
import P from 'shared/P';

// -----
const LoginForm = (props) =>{
  return (
    <Div width='100%'>
      <NoMPUl childrenPadding='5px'>
        <Li>
          <MasterInput
            autocomplete
            name='name'
            label="Your Name"
            type='text'
            valueObject = {props.loginInfoObject.name}
            onInputChange = {props.onInputChange}
            objName = {props.objName}
            temporaryReadOnly
          />
        </Li>
        <Li>
          <MasterInput
            autocomplete
            name='email'
            label="Email Address"
            type='email'
            valueObject = {props.loginInfoObject.email}
            onInputChange = {props.onInputChange}
            objName = {props.objName}
            temporaryReadOnly
          />
        </Li>

        {props.serverErrorObject.login && props.serverErrorObject.login !== "reset" &&
          <Li>
            <Div maxWidth='300px'>
              <Span color='red'>
                {props.serverErrorObject.login}
              </Span>
            </Div>
          </Li>
        }
        <Li>
          <P>
            Signing  in will sync your L T Denny Jewelers account if you have one
          </P>
        </Li>
        <Li>
          <Button
            onClick={(e)=>{e.preventDefault(); props.onInputSubmit(props.objName)}}
            width='100%'
            type='submit'
          >Submit</Button>
        </Li>
      </NoMPUl>
    </Div>
      )
      }
      LoginForm.propTypes = {
}
export default LoginForm;
