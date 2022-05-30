import React from 'react';
import Div from 'shared/Div';
import WishlistItems from 'components/Wishlist/WishlistItems';
import { CSSTransition } from 'react-transition-group';

// -----
const funcC0mp = (props) =>{
  return (
    <Div>
      <CSSTransition
        in={props.wishListObject.open}
        timeout={400}
        classNames="shopTheToggle"
      unmountOnExit>
        <WishlistItems
          onViewDetails = {props.onViewDetails}
          wishlistItems = {props.wishlistItems}
          onLoadWishlistItems = {props.onLoadWishlistItems}
          onAddToWishlist = {props.onAddToWishlist}
          onContactClick = {props.onContactClick}
          history={props.history}
          onWishlistClick = {props.onWishlistClick}
          userProfile = {props.userProfile}
        />
      </CSSTransition>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
