import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import Phone from '../Clickables/Phone';
import Schedule from '../Clickables/Schedule';
import WishlistLink from '../Clickables/WishlistLink';
import ShoppingLink from '../Clickables/ShoppingLink';
import AccountLink from '../Clickables/AccountLink';
import FontAwesome from 'react-fontawesome';
import StyledLink from 'shared/StyledLink';
import styled from 'styled-components';

const StyledNoMPUl = styled(NoMPUl)`
  display: flex;
  justify-content: space-around;
  width: 100vw;
  max-width: 1500px;

  align-items: center;
  cursor: pointer;
  @media only screen and (min-width: 996px) {

  }
`

const StyledLi = styled(Li)`
  order: 2;
  @media only screen and (min-width: 996px) {
  order: 1;
  }
`
const StyledLi2 = styled(Li)`
  order: 1
@media only screen and (min-width: 996px) {
  order: 2;
}
`

// -----
const funcC0mp = (props) =>{
  console.log(props)
  return (
    <Div padding = '10px 0'>
      <StyledNoMPUl >
        <Li order='0' >
        <Div  height='100%' position='relative'   bordered = {props.history.location.pathname == '/event-planner-front-end'}>

        <StyledLink to='/event-planner-front-end'>
          <Div
            color='white'
            textAlign='center'
            position='relative'
            fontWeight='bold'
            height='100%'
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexDirection='column'
          >
              <FontAwesome style={{color:'white'}} size='lg'  name="street-view" />
              <span>
              Event FrontEnd
              </span>
            </Div>
            </StyledLink>

        </Div>
        </Li>
        <Li order='1'>
        <StyledLink to='/event-planner-back-end'>
          <Div
            color='white'
            textAlign='center'
            position='relative'
            fontWeight='bold'
            height='100%'
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexDirection='column'
            bordered = {props.history.location.pathname == '/event-planner-back-end'}
          >
              <FontAwesome style={{color:'white'}} size='lg'   name="street-view" />
              <span>
              Event Backend
              </span>
            </Div>
            </StyledLink>
        </Li>
        <Li order='2'>
        <StyledLink to='/user-front-end'>
          <Div
            bordered = {props.history.location.pathname == '/user-front-end'}
            color='white'
            textAlign='center'
            position='relative'
            fontWeight='bold'
            height='100%'
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexDirection='column'
          >
              <FontAwesome style={{color:'white'}} size='lg'  name="user" />
              <span>
              User Frontend
              </span>
            </Div>
            </StyledLink>
        </Li>
        <Li order='3'>
        <StyledLink to='/snapshot-links'>
          <Div
            bordered = {props.history.location.pathname == '/snapshot-links'}
            color='white'
            textAlign='center'
            position='relative'
            fontWeight='bold'
            height='100%'
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexDirection='column'
          >
              <FontAwesome style={{color:'white'}} size='lg'  name="th-large" />
              <span>
              Snapshots/Links
              </span>
            </Div>
            </StyledLink>

        </Li>
      </StyledNoMPUl>
    </Div>

  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
