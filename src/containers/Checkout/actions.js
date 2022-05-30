/*
 *
 * Shop actions
 *
 */

 import {
   GET_PRODUCT_INFO_FOR_CART,
 LOAD_INVENTORY,
 HANDLE_RESET_VIEW,
 HANDLE_CHECKOUT,
 HANDLE_REMOVE_ITEM_CART,
 REDIRECT_STRIPE_CART,
 CREATE_PENDING_SOLD,
 CHECK_SETTINGS,
 HANDLE_CHOICE,
 INPUT_CHANGE,
 HANDLE_TOGGLE,
 HANDLE_CALENDAR_CHANGE,
 TOGGLE_LOADING,
 UPDATE_CHECKED_SETTINGS,
 PULL_CITY_STATE

 } from './constants';
 export function updateCustomerInfo(custInfo,avoidGoingToConfirmation){
   return {
     type: UPDATE_CHECKED_SETTINGS,
     custInfo: custInfo,
     avoidGoingToConfirmation:avoidGoingToConfirmation
   }
 }
 export function toggleLoading(confirmedPayment){
   return {
     type: TOGGLE_LOADING,
     confirmedPayment: confirmedPayment
   }
 }
 export function handleCalendarChange(time){
   return {
     type: HANDLE_CALENDAR_CHANGE,
     time: time
   }
 }
export function handleToggle(name){
  return {
    type: HANDLE_TOGGLE,
    name: name
  }
}
export function handleInputChange(choiceKey,specificKey,value,type1){



  if(specificKey === "zipCode" && value.length === 5){
    return [
      {
        type: PULL_CITY_STATE,
        value: value
      },
      {
        type: INPUT_CHANGE,
        choiceKey: choiceKey,
        specificKey: specificKey,
        value: value,
        type1: type1
      }
    ]
  } else {

  return [
    {
      type: INPUT_CHANGE,
      choiceKey: choiceKey,
      specificKey: specificKey,
      value: value,
      type1: type1
    }
  ]
}
}
export function handleChoice(choice){
  return {
    type: HANDLE_CHOICE,
    choice: choice
  }
}
 export function checkSettings(custInfo){
   return {
     type : CHECK_SETTINGS,
     custInfo: custInfo
   }
 }
 export function handleCreatePendingSold(itemArray){
   return {
     type:CREATE_PENDING_SOLD,
     itemArray: itemArray
   }
 }
 export function initiateStripeRedirect(str){
   return {
     type: REDIRECT_STRIPE_CART,
     str: str
   }
 }
 export function handleCheckout(listOfItems){
   return {
     type: HANDLE_CHECKOUT,
     listOfItems: listOfItems
   }
 }
 export function handleRemoveFromCartItem(itemKey){
   return {
     type: HANDLE_REMOVE_ITEM_CART,
     itemKey: itemKey
   }
 }
 export function handleResetView(){
   return {
     type: HANDLE_RESET_VIEW
   }
 }
 export function handlePullCartInfo(itemKeys){
   return {
     type: GET_PRODUCT_INFO_FOR_CART,
     itemKeys: itemKeys
   }
 }
export function loadInventory(data){
  return {
    type: LOAD_INVENTORY,
    data: data
  }
}
