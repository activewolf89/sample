import styled,{css} from 'styled-components';
import React from 'react';
import Div from 'shared/Div';


export const ModalCSS =  styled(Div)`
display: none; /* Hidden by default */
position: fixed; /* Stay in place */
z-index: 10000; /* Sit on top */
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
    <ModalCSS active={props.active} onMouseOver={()=>{props.onHoverNavigation && props.onHoverNavigation(false)}}/>
  )
}
Modal.propTypes = {
}
export default Modal;
