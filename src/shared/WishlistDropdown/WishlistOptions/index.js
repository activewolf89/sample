import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import Wishlist from './Wishlist';
import OutsiderAlert from 'shared/OutsiderAlert';
import styled from 'styled-components';
// -----
const funcC0mp = (props) =>{
  const StyledDiv = styled(Div)`
    width: 100vw;
    position:fixed;
    @media only screen and (min-width: 996px) {
    width: 300px;
    position: absolute;
    }
  `
  return (
    <OutsiderAlert  callback={()=>{props.onToggle()}}>
      <StyledDiv   right='0' backgroundColor='white' color='black'  border='2px solid black' >
        <NoMPUl childrenPadding='10px 0' display='flex' alignItems='center' flexDirection='column' childrenBorderBottom='1px solid gray'>
          <Li width='100%'>
            {
              Object.keys(props.userProfile).length < 1 &&
              <Div onClick={()=>{props.onContactClick('login')}} textAlign='center' width='100%' cursor='pointer'>
                Login
              </Div>
            }
          </Li>
          <Li width='100%'>
            <Div textAlign='center'>
              <Wishlist
                clearBackendWishlist = {props.clearBackendWishlist}
                onToggle = {props.onToggle}
              />
            </Div>
            </Li>

        </NoMPUl>
      </StyledDiv>
    </OutsiderAlert>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
