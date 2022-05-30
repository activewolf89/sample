import React from 'react';
import Div from 'shared/Div';
import WishlistItems from './WishlistItems';

// -----
const Wishlist = (props) =>{
  return (
    <Div minHeight='500px'>
      <WishlistItems
        wishlistPage
        onContactClick = {props.onContactClick}
        wishlistItems = {props.wishlistItems}
        onLoadWishlistItems = {props.onLoadWishlistItems}
        onAddToWishlist = {props.onAddToWishlist}
        history={props.history}
      />
    </Div>
  )
}
Wishlist.propTypes = {
}
export default Wishlist;
