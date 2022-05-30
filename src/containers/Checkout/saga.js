import { takeEvery,put,select } from 'redux-saga/effects';
import axios from 'axios';
import {updateCustomerInfo,loadInventory,initiateStripeRedirect} from 'containers/Checkout/actions'

import {
  GET_PRODUCT_INFO_FOR_CART,
  TOGGLE_LOADING,
  PULL_CITY_STATE
} from './constants';
function* sendCheckSettings(obj){
  const getState = (state) => state;
  var currentState = yield select(getState);
  var jSCurrentState = currentState.toJS()
  var custInfo = jSCurrentState.checkout.customerInfo
  var inventoryList = jSCurrentState.checkout.inventoryList
  if(!obj.confirmedPayment){

  try{
    const response = yield axios.post(`/user/checkout/checkSettings`,
      {
        custInfo: custInfo,
        inventoryList:inventoryList,
      }
    )
    if(response){
      yield put (updateCustomerInfo(response.data))
    }
  } catch(error){
    console.log(error)
    // yield put (resetSubmit('login','User/Password Combination Was Not Found'))
  }
} else {
  try{
    const response = yield axios.post(`/user/checkout/checkSettings`,
      {
        custInfo: custInfo,
        inventoryList:inventoryList,
      }
    )
    if(response){
      if(response.data.passed){
        try {
          const response = yield axios.post(`/user/checkout/session`,
            {
              custInfo: custInfo,
              inventoryList:inventoryList,
            }
          )
          if(response.data){


            yield put (initiateStripeRedirect(response.data.sessionId))

          }
        } catch(error){
        }


      } else {
        yield put (updateCustomerInfo(response.data))
      }
    }
  } catch(error){
    console.log(error)
    // yield put (resetSubmit('login','User/Password Combination Was Not Found'))
  }
  //confirming payment, checking and creating the session.
}
}

function* fetchProductInfo(object){
    const {itemKeys} = object
    if(itemKeys !== ""){

    try {
      const response = yield axios.post(`/user/checkout/itemKeys`,
        {
          pathname: '/',
          from: "cart",
          search: '?search=' + itemKeys,
          promoObject: {}
        }


      )
      if(response.data){
        yield put (loadInventory(response.data))
      }
    } catch(error){
      // yield put (resetSubmit('login','User/Password Combination Was Not Found'))
    }
  } else {

    const data = {
      returnedItems: []
    }
    yield put (loadInventory(data))

  }


}
function* pullCityState(object){

  try{
    const response = yield axios.post(`/user/checkout/pullCityState`,
      {
        zipCode: object.value,
      }
    )
    if(response){
      const getState = (state) => state;
      var currentState = yield select(getState);
      var jSCurrentState = currentState.toJS()
      var custInfo = jSCurrentState.checkout.customerInfo
      if(response.data){
        //logistics
        custInfo.logistics.choices.shipping.city.value = response.data.city
        custInfo.logistics.choices.shipping.city.error = ""
        custInfo.logistics.choices.shipping.state.value = response.data.state
        custInfo.logistics.choices.shipping.state.error = ""
        custInfo.logistics.choices.shipping.zipCode.error = ""
        custInfo.logistics.choices.shipping.zipCode.trigged = false
        yield put (updateCustomerInfo(custInfo.logistics.choices.shipping,true))
      } else {
        custInfo.logistics.choices.shipping.city.value = ""
        custInfo.logistics.choices.shipping.city.error = ""
        custInfo.logistics.choices.shipping.state.value = ""
        custInfo.logistics.choices.shipping.state.error = ""
        custInfo.logistics.choices.shipping.zipCode.error = "Not A Valid Zip Code"
        custInfo.logistics.choices.shipping.zipCode.triggered = true
        yield put (updateCustomerInfo(custInfo.logistics.choices.shipping,true))

      }
    }
  } catch(error){
    console.log(error)
    // yield put (resetSubmit('login','User/Password Combination Was Not Found'))
  }
}


export default function* watchFetchProduct() {
  // See example in containers/HomePage/saga.js
  yield takeEvery(TOGGLE_LOADING,sendCheckSettings)
  yield takeEvery(PULL_CITY_STATE,pullCityState)
  // yield takeEvery(CREATE_PENDING_SOLD,onHandleCreatePendingSold)
  yield takeEvery(GET_PRODUCT_INFO_FOR_CART,fetchProductInfo)

}
