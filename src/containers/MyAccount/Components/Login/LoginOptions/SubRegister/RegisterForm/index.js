import React from 'react';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import Button from 'shared/Button';
import MasterInput from 'shared/MasterInput';
import Span from 'shared/Span';
import Div from 'shared/Div';
import A3 from 'shared/A3';
import styled from 'styled-components';

var StyledDiv = styled(Div)`
  display: block;
  @media only screen and (min-width: 996px) {
  display: none;
  }
`
// -----
const RegisterForm = (props) =>{
  return (
    <form>
      <NoMPUl childrenPadding='5px'>

        <Li>
          <MasterInput
            onInputChange = {props.onInputChange}
            name='fName'
            objName = {props.objName}
            label='First name'
            type='text'
            valueObject = {props.registerInfoObject.fName}
          />
        </Li>
        <Li>
          <MasterInput

            onInputChange = {props.onInputChange}
            name='lName'
            objName = {props.objName}
            label='Last name'
            type='text'
            valueObject = {props.registerInfoObject.lName}

          />
        </Li>
        <Li>
          <MasterInput
            registerExistingEmailError = {props.serverErrorObject.registerExistingEmail}
            onCheckIfEmailExists = {props.onCheckIfEmailExists}
            onInputChange = {props.onInputChange}
            objName = {props.objName}
            name='email'
            temporaryReadOnly
            label="Email Address"
            type='email'
            valueObject = {props.registerInfoObject.email}

          />
        </Li>
        <Li>
          <MasterInput
            onInputChange = {props.onInputChange}
            register
            objName = {props.objName}
            name='password'
            label="Password"
            type='password'
            valueObject = {props.registerInfoObject.password}
          />
        </Li>
        <Li>
          <MasterInput
            onInputChange = {props.onInputChange}
            register
            name='confirmPassword'
            label="Confirm Password"
            objName = {props.objName}
            type='password'
            valueObject = {props.registerInfoObject.confirmPassword}

          />
        </Li>
        <StyledDiv>
          <Div fontWeight = 'bold' padding='0 10px'>
            <A3 onClick={()=>{props.onAskQuestion()}}>
              Login Instead
            </A3>
          </Div>
        </StyledDiv>
        {props.serverErrorObject.register &&
          <Li>
            <Div maxWidth='300px'>
              <Span color='red'>
                {props.serverErrorObject.register}
              </Span>
            </Div>
          </Li>
        }

        <Li>
          <Button
            width='100%'
            themed type='submit'
            onClick={(e)=>{e.preventDefault();props.onInputSubmit(props.objName)}}
          >
          Continue</Button>
        </Li>
      </NoMPUl>
  </form>
  )
}
RegisterForm.propTypes = {
}
export default RegisterForm;
