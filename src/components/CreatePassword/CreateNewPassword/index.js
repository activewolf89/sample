import React from 'react';
import Div from 'shared/Div';
import {H2,H3} from 'shared/H';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li'
import NewPasswordSelection from './NewPasswordSelection'
// -----
const funcC0mp = (props) =>{
  return (
    <Div padding='20px'>
      <NoMPUl childrenPadding='10px 0'>
        <Li>
          <H2 >
            Reset Password
          </H2>
        </Li>
        <Li>
          <H3>
            Choose a new password
          </H3>
        </Li>
      </NoMPUl>
      <NewPasswordSelection
        onResetPassword = {props.onResetPassword}
        newPasswordObject = {props.newPasswordObject}
        onInputChange = {props.onInputChange}

      />


    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
