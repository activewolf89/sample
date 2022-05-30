import React from 'react';
import Div from 'shared/Div';
import cookie from 'react-cookies'
import StyledLink from 'shared/StyledLink';
import FontAwesome from 'react-fontawesome';
import Button from 'shared/Button';
// -----
var CheckString = function(){
  let cookieString = cookie.loadAll()['wishlistItems']

  return cookieString
}
const funcC0mp = (props) =>{
  return (
    <Div flexWrap='nowrap' display='flex'>
      <Button width='100%' padding='3px' themed >

        {
          CheckString() !== undefined ?
            <StyledLink to={"/shop?ItemKey=" + CheckString()} color='white'>
              <FontAwesome style={{color:'red'}} name="heart" />
              Wishlist: {CheckString().split(',').length} Items
            </StyledLink>:
            <Div onClick={props.onWishlistCLick}>
              <FontAwesome style={{color:'gray'}}  name="heart" />
              No Items
            </Div>

        }
      </Button>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
