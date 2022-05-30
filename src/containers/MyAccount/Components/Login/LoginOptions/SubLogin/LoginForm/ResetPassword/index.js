import styled,{css} from 'styled-components';
import React from 'react';
import Div from 'shared/Div';
import OutsideAlerter from "shared/OutsiderAlert";

import ForgotEmailForm from './ForgotEmailForm';
import EmailSent from './EmailSent';
import CloseButton from 'shared/CloseButton';
export const ModalCSS =  styled(Div)`
display: none; /* Hidden by default */
position: fixed; /* Stay in place */
z-index: 20; /* Sit on top */
padding-top: 10px; /* Location of the box */
left: 0;
top: 0%;
width: 100%; /* Full width */
height: 100%; /* Full height */
overflow: auto; /* Enable scroll if needed */
background-color: rgb(0,0,0); /* Fallback color */
background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
${props => props.active && css`
display: block;

`}
`;

const Modal = (props) =>{
  return (

    <ModalCSS active={true}>
      <OutsideAlerter callback = {()=>{props.onClose();}}>

        <Div  maxWidth='600px' width='100%' border='2px solid black' backgroundColor='white' position='absolute' transform='translateX(-50%)' left='50%' top='20%'>
          <CloseButton onClose={()=>{props.onClose()}} />
          {props.isPasswordRequestSuccess ?
            <EmailSent
              email ={props.valueObject.value}
              onClose={props.onClose}
            />:
            <ForgotEmailForm
              serverErrorObjectValue = {props.serverErrorObjectValue}
              forgotEmail
              type={props.type}
              name={props.name}
              value ={props.valueObject.value}
              onInputChange = {props.onInputChange}
              objName={props.objName}
              valueObject = {props.valueObject}
              onSendEmailResetLink = {props.onSendEmailResetLink}
            />
          }
        </Div>
      </OutsideAlerter>
    </ModalCSS>
  )
}
Modal.propTypes = {
}
export default Modal;
