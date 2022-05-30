import React from 'react';
import Div from 'shared/Div';
import LoginForm from './LoginForm'
import A3 from 'shared/A3';
import pauseLoginAsk from 'containers/MyAccount/Helpers/pauseLoginAsk'
// -----
const SubLogin = (props) =>{
  return (
    <Div fontStyle='italic'>

      <LoginForm
        onClose ={props.onClose}
        onForgetPassword ={props.onForgetPassword}
        onInputSubmit = {props.onInputSubmit}
        onInputChange = {props.onInputChange}
        objName = {props.objName}
        loginInfoObject = {props.loginInfoObject}
        serverErrorObject ={props.serverErrorObject}
        isPasswordRequestReset = {props.isPasswordRequestReset}
        onSendEmailResetLink = {props.onSendEmailResetLink}
        isPasswordRequestSuccess = {props.isPasswordRequestSuccess}
        onAskQuestion = {props.onAskQuestion}
        onContactClick = {props.onContactClick}
      />

      <Div display='flex' justifyContent='space-between' padding='10px 0px' fontWeight='bold'>
        <A3 onClick={()=>{props.onToggleDetail('close');pauseLoginAsk()}} >
          No Thanks
        </A3>
      </Div>
    </Div>
  )
}
SubLogin.propTypes = {
}
export default SubLogin;
