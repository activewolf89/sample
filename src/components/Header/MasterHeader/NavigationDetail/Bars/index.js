import React from 'react';
import Div from 'shared/Div';
import { CSSTransition } from 'react-transition-group';
import Hamburger from 'hamburger-react'
import styled from 'styled-components';
import FloatFont from 'shared/FloatFont';
const StyledDiv = styled(Div)`
display: none;
  @media only screen and (min-width: 996px) {
  display: block;
  }
`
// -----
const funcC0mp = (props) =>{
  return (
      <Div onClick={()=>{props.onHamburgerClick()}} cursor='pointer' >
        <Div  color='white' cursor='pointer' display='flex' flexDirection='column' alignItems='center'>
          <Hamburger toggled = {props.isHamburgerOpen} rounded color='white'  />
        </Div>
        <CSSTransition
          in={props.isHamburgerOpen ? true:false}
          timeout={0}
          classNames="fadeBackground"
        unmountOnExit>
          <Div  position='fixed' top='0px' left='0px' zIndex='120000' width='100vw' height='100%' opacity='.7' backgroundColor='black'>
          </Div>
        </CSSTransition>
      </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
