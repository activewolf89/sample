import React from 'react';
import Div from 'shared/Div';
import MyWishlist from './MyWishlist';
import MyCustomerInfo from './MyCustomerInfo';
// -----
const OptionBody = (props) =>{
  return (
    <Div width='100vw' maxWidth='996px' >
      
      {
        props.active === 'My Wishlist' ?
          <MyWishlist
            edgeWishlist = {props.userProfile._Customer._Wishlist}
            userProfile = {props.userProfile}
            history={props.history}
            onContactClick={props.onContactClick}
            onUpdateItem = {props.onUpdateItem}
            onAddToWishlist = {props.onAddToWishlist}
          />:
          <MyCustomerInfo
            serverErrorObject = {props.serverErrorObject}
            onCheckIfEmailExists = {props.onCheckIfEmailExists}
            onEditUser = {props.onEditUser}
            onContactClick = {props.onContactClick}
            userProfile = {props.userProfile}
          />
      }

    </Div>
  )
}
OptionBody.propTypes = {
}
export default OptionBody;
