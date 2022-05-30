import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li'
import MasterInput from 'shared/MasterInput';
import Button from 'shared/Button'
// -----
const funcC0mp = (props) =>{
  return (
    <Div maxWidth='900px'>
      <NoMPUl childrenPadding='10px'>
        <Li>
          <MasterInput
            name='password'
            label = 'New Password'
            type='password'
            error={props.newPasswordObject.password}
            valueObject={props.newPasswordObject.password}
            onInputChange = {props.onInputChange}
          />
        </Li>
        <Li>
          <MasterInput
            name='confirmPassword'
            label='Confirm Password'
            type='password'
            error={props.newPasswordObject.confirmPassword}
            valueObject={props.newPasswordObject.confirmPassword}
            onInputChange = {props.onInputChange}

          />
        </Li>
        <Li>
          <Button themed width='100%' onClick={(e)=>{e.preventDefault();props.onResetPassword()}}>Reset Password</Button>
        </Li>
      </NoMPUl>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
