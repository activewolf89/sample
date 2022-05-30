import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Div from 'shared/Div';
import LandingPage from './LandingPage';
// -----
import styled from 'styled-components';
import OutsiderAlert from 'shared/OutsiderAlert';
import FontAwesome from 'react-fontawesome'
import WishlistDropdown from 'shared/WishlistDropdown';
import Button  from 'shared/Button';
import slightImage from 'images/veins.jpg'
import LoginDropdown from 'shared/LoginDropdown';
import ShoppingDropdown from 'shared/ShoppingDropdown';
import ClickableTitle from './ClickableTitle';

const StyledDiv = styled(Div)`
  width: 33vw;
  padding: 10px 5px;
  height: 45px;

  border-right: 1px solid gray;
  text-align:center;
`
const StyledButton = styled(Button)`
  color: white;
  overflow: hidden;

  background: url(${slightImage}) no-repeat;
          cursor:pointer;
          border: none;
          height: 45px;
`
const ReachOption = (props) =>{
  return (
    <Div>

      <OutsiderAlert callback={()=>{props.onSaleToggle()}}>
        <Div display='flex'>
          <StyledDiv backgroundColor='pink' onClick={()=>{props.onSaleToggle()}}>
            <WishlistDropdown
              history={props.history}
              mobile
              onContactClick={props.onContactClick}
              userProfile = {props.userProfile}
              clearBackendWishlist = {props.clearBackendWishlist}
              onWishlistClick = {props.onWishlistClick}
            />
          </StyledDiv>
          <StyledDiv backgroundColor='white' onClick={()=>{props.onSaleToggle()}} backgroundColor='lightGray' >
            <LoginDropdown
              onLogOut = {props.onLogOut}
              onContactClick={props.onContactClick}
              userProfile = {props.userProfile}
            />
          </StyledDiv>
          <StyledDiv backgroundColor='darkGray' color='white'>
            <ShoppingDropdown
              checkoutString = {props.checkoutString}
            color='white' />
          </StyledDiv>
        </Div>
      </OutsiderAlert>
    </Div>
  )
}
ReachOption.propTypes = {
}
export default ReachOption;
