import React from 'react';
import Div from 'shared/Div';
import OptionButtons from './OptionButtons';
import OptionBody from './OptionBody';
// -----
const funcC0mp = (props) =>{
  return (
    <Div >
      <Div borderBottom='1px solid gray' >
        <OptionButtons
          active = {props.active}
          options = {props.options}
          onOptionChange = {props.onOptionChange}
        />
      </Div>
      <OptionBody
        serverErrorObject = {props.serverErrorObject}
        onCheckIfEmailExists = {props.onCheckIfEmailExists}
        onEditUser = {props.onEditUser}
        onContactClick = {props.onContactClick}
        options = {props.options}
        userProfile = {props.userProfile}
        active = {props.active}
        history={props.history}
        onUpdateItem = {props.onUpdateItem}
        onAddToWishlist = {props.onAddToWishlist}
      />
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
