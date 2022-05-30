import React from 'react';
import Div from 'shared/Div';
import cookie from 'react-cookies'
import StyledLink from 'shared/StyledLink';
import FontAwesome from 'react-fontawesome';
import A from 'shared/A';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import ClearWishlist from 'containers/ClearWishlist';
// -----
var CheckString = function(){
  let cookieString = cookie.loadAll()['wishlistItems']

  return cookieString
}
const funcC0mp = (props) =>{
  return (
    <Div flexWrap='nowrap' display='flex' >
      {
        CheckString() !== undefined ?
          <NoMPUl display='flex' flexDirection='column' childrenBorderBottom='1px solid gray' childrenPadding='5px 0' alignItems='center'>
            <Li onClick={props.onToggle}>
              <StyledLink to={"/shop?ItemKey=" + CheckString()}  color='black'>
                <Div  width='100%'>
                  <A color='maroon' fontWeight='bold'>
                    Search Your Wishlist
                  </A>
                </Div>
              </StyledLink>
            </Li>
            <Li >
              <ClearWishlist
                clearBackendWishlist = {props.clearBackendWishlist}
                onToggle = {props.onToggle}
              />

            </Li>
          </NoMPUl>:
          <Div onClick={props.onWishlistCLick}  width='100%'>
            <FontAwesome style={{color:'gray'}}  name="heart" />
            No Items
          </Div>

      }
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
