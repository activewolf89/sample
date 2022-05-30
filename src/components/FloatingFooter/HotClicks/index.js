import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import ClickableTitle from './ClickableTitle';
import styled from 'styled-components';
// -----
const StyledDiv = styled(Div)`
  display: block;
  @media only screen and (min-width: 996px) {
    display: none;
  }
`
var StyledLi = styled(Li)`
  width: 25vw;
  border-top: 1px solid white;
`
const HotClicks = (props) =>{
  return (
    <Div >

      <StyledDiv  themed  >
        <NoMPUl  display='flex'   childrenBorderRight='1px solid white'>
          <StyledLi  onClick={props.onWishlistClick}>
            <Div position='relative' height='100%'>
              <ClickableTitle
                name='Wishlist'
                awesome = 'heart'
                color="red"
                wishlistItems = {props.wishlistItems}
              />
            </Div>
          </StyledLi>

          <StyledLi   onClick={props.onReachClick}>
            <Div height='100%' >
              <ClickableTitle
                name='Contact'
                awesome = 'bullhorn'
                color="white"
              />
            </Div>
          </StyledLi>
          <StyledLi >
            <Div height='100%' >
              <ClickableTitle
                active = {props.userProfile.fName}
                name={`${props.userProfile.fName ? props.userProfile.fName :'Account'}`}
                awesome = 'user'
                theLink = "/my-account"
                color={props.userProfile.fName ? 'black':"white"}
              />
            </Div>

          </StyledLi>
          <StyledLi >
            <Div  display='flex' flexDirection='column' alignItems='center' justifyContent='space-between' height='100%' >
              <Div></Div>
              Text
            </Div>

          </StyledLi>
        </NoMPUl>
      </StyledDiv>
    </Div>

  )
}
HotClicks.propTypes = {
}
export default HotClicks;
