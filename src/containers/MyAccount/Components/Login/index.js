import React from 'react';
import Div from 'shared/Div';
import LoginOptions from './LoginOptions';
// -----
const LoginComponent = (props) =>{
  return (
    <Div display='flex' flexDirection='column' alignitems='center'>
      <LoginOptions
        onContactClick = {props.onContactClick}
        onToggleDetail = {props.onToggleDetail}
        isPasswordRequestSuccess = {props.isPasswordRequestSuccess}
        serverErrorObject = {props.serverErrorObject}
        onInputSubmit = {props.onInputSubmit}
        loginInfoObject = {props.loginInfoObject}
        registerInfoObject = {props.registerInfoObject}
        onInputChange = {props.onInputChange}
        onCheckIfEmailExists = {props.onCheckIfEmailExists}
        onForgetPassword = {props.onForgetPassword}
        isPasswordRequestReset = {props.isPasswordRequestReset}
        onSendEmailResetLink = {props.onSendEmailResetLink}
        onClose = {props.onClose}
      />
    </Div>
  )
}
LoginComponent.propTypes = {
}
export default LoginComponent;
