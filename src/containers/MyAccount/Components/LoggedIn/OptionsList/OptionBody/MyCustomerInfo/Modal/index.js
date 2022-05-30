import styled,{css} from 'styled-components';
import React from 'react';
import Div from 'shared/Div';

import EntireBody from './EntireBody';

import { CSSTransition } from 'react-transition-group';
import "./styles.css";

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
    <Div>
      <CSSTransition
        in={props.selectedEdit && props.modalObject ? true: false}
        timeout={400}
        classNames="testPage"
      unmountOnExit>
        <Div padding='20px' themed width='100%'  maxWidth='996px' position='fixed' top='0' right='0' height='100%'  zIndex='20'>
          <Div>
            <EntireBody
              selectedEdit = {props.selectedEdit}
              onChangeFocus = {props.onChangeFocus}
              onObjectChange = {props.onObjectChange}
              loginEmail = {props.loginEmail}
              objToEdit = {props.objToEdit}
              onStringInputChange = {props.onStringInputChange}
              messageString = {props.messageString}
              onClose={props.onClose}
              onRemove = {props.onRemove}
              onClearInputs = {props.onClearInputs}
              onAddTemplate = {props.onAddTemplate}
              onUpdateUserProfile = {props.onUpdateUserProfile}
              serverErrorObject = {props.serverErrorObject}
              onCheckIfEmailExists = {props.onCheckIfEmailExists}
            />
          </Div>
        </Div>

      </CSSTransition>

      <CSSTransition
        in={props.selectedEdit && props.modalObject ? true: false}
        timeout={400}
        classNames="fadeBackground"
      unmountOnExit>
        <Div onClick={()=>{props.onClose()}} position='fixed' top='0px' left='0px' zIndex='3' width='100%' height='100%' opacity='.7' backgroundColor='black'>
        </Div>
      </CSSTransition>
    </Div>
      )
      }
      Modal.propTypes = {
      }
      export default Modal;
