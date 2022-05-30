/*
 *
 * Shop actions
 *
 */

import {
INPUT_SUBMIT,
INPUT_FIELD,
SUBMIT_USER_INPUT,
LOG_OUT,
CLEAR_USER_INPUT,
PULL_CUSTOMER_DATA,
LOAD_USER,
ATTEMPT_LOG_IN,
FORGOT_PASSWORD,
CHECK_IF_EMAIL_EXISTS,
RESET_SUBMIT,
HANDLE_CLOSE,
RESET_LINK_SENT,
SEND_EMAIL_LINK,
EDIT_USER,
} from './constants';

export function handleEditUser(key,obj,custId){
  return {
    type: EDIT_USER,
    key: key,
    obj: obj,
    custId: custId
  }
}
export function handleClose(){
  return{
    type: HANDLE_CLOSE
  }
}
export function resetLinkSent(){
  return{
    type: RESET_LINK_SENT
  }
}
export function handleForgetPassword(){
  return {
    type: FORGOT_PASSWORD
  }
}

export function handleCheckIfEmailsExists(email){
  return {
    type: CHECK_IF_EMAIL_EXISTS,
    email:email
  }
}
export function handleSendEmailResetLink(email){
  return {
    type: SEND_EMAIL_LINK,
    email: email
  }
}
export function resetSubmit(key,stringError){
  return {
    type: RESET_SUBMIT,
    key: key,
    stringError:stringError
  }
}
export function loadUser(obj,history){
  var wishlist = obj.userProfile._Customer._Wishlist;
  var stringToReturn = '/shop?ItemKey='
  if(history){

  if(wishlist.length > 0){
    wishlist.forEach((wish,idx,arr)=>{
      stringToReturn += wish.WishlistItemKey + (idx === arr.length - 1 ? "":',')
    })
    history.push(stringToReturn)
  }
}

  return {
    type:LOAD_USER,
    userProfile: obj,
    history: history
  }
}
export function handleLogOut(){
  return {
    type:LOG_OUT
  }
}
export function handleAttemptLogin(userObj,checkIfDirect,history){
  return {
    type:ATTEMPT_LOG_IN,
    userObj: userObj,
    checkIfDirect: checkIfDirect,
    history: history
  }
}
export function handlePullSessionData(custDataString){
  return {
    type:PULL_CUSTOMER_DATA,
    custDataString: custDataString
  }
}
export function handleInputChange(objName,name,val) {

  return {
    type: INPUT_FIELD,
    objName: objName,
    name: name,
    val: val
  };
}
export function handleInputSubmit(objName){
  return {
    type: INPUT_SUBMIT,
    objName: objName
  }
}
export function handleDataToSend(userRequest,userObject){

  return {
    type: SUBMIT_USER_INPUT,
    userRequest: userRequest,
    userObject:userObject
  }
}

export function clearUserInput(){
  return {
    type:CLEAR_USER_INPUT
  }
}
