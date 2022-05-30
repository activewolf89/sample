import {put,takeEvery,takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {EDIT_USER,SEND_EMAIL_LINK,SUBMIT_USER_INPUT,PULL_CUSTOMER_DATA,ATTEMPT_LOG_IN,CHECK_IF_EMAIL_EXISTS } from './constants';
import {resetLinkSent,resetSubmit,clearUserInput,loadUser} from 'containers/MyAccount/actions';
import CookieFunction from 'containers/App/HelperFunctions/CookieString';



function* checkIfEmailExists(obj){
  try{
    const response = yield axios.get('/user/checkEmailExists/'+ obj.email)
    if(response.data){
      yield put (resetSubmit('registerExistingEmail','Email Address already exists'))
    } else {
      yield put (resetSubmit('registerExistingEmail',''))
    }
  }
  catch(error){
  }
}

function* sendEmailLink(obj){
  try{
    const response = yield axios.get('/user/sendEmailLink/'+ obj.email)
    if(response.data){
      yield put(resetLinkSent())
      yield put (resetSubmit('forgottenEmail',''))
    } else {
      yield put (resetSubmit('forgottenEmail','Email Address does not exist'))
    }
  }
  catch(error){
  }
}
function* submitUserRequest(requestObject){
  var CookieString = CookieFunction('wishlistItems')
  var cookieArray = []
  if(CookieString){
     cookieArray = CookieString.split(',');
  }
  var {userObject,userRequest} = requestObject
  userObject.cookieArray = cookieArray;
  try {
const response = yield axios.post(`/user/${userRequest}`,userObject)
if(response.data){
  yield put(clearUserInput());
  yield put (loadUser(response.data))
} else {
  if(response.data.error === 'registerExistingEmail'){
    yield put (resetSubmit('registerExistingEmail','Email Address already exists'))
  } else {
    yield put (resetSubmit('register','Error In Submitting'))

  }
}
  }
  catch(error){
  }
}

function* pullCustomerData(customerData){
  const payload = JSON.parse(window.atob(sessionStorage.getItem('myToken').split('.')[1]))
  try {
    const response = yield axios.post(`/customer/getInfo`,{email:payload.email})
    if(response.data){
      yield put(loadUser(response.data))
    }
  } catch(error){
  }
}

function* submitLoginRequest(customerData){
  var CookieString = CookieFunction('wishlistItems')
  var cookieArray = []
  if(CookieString){
     cookieArray = CookieString.split(',');
  }
  const {email,password,name} = customerData.userObj;
  const directConnect = customerData.checkIfDirect ? customerData.checkIfDirect: false
  yield put (resetSubmit('login','reset'))
  try {
    const response = yield axios.post(`/user/existingUser`,
      {email:email.value.toLowerCase(),
        password:password.value,
        name:name.value,
        cookieArray:cookieArray,
        directConnect: directConnect
      },
      )
    if(response.data){
      yield put (loadUser(response.data,customerData.history))
    }
  } catch(error){
    console.log(error);
    yield put (resetSubmit('login','Error Logging in'))
  }
}
function* submitEditUser(editUser){
  const payload = JSON.parse(window.atob(sessionStorage.getItem('myToken').split('.')[1]))
  const {key,obj,custId} = editUser
  try {
    const response = yield axios.post(`/user/updateUser`,{key:key,obj:obj,custId:custId,userId:payload._id})
    if(response.data){
      yield put (loadUser(response.data))
    }
  } catch(error){
    // yield put (resetSubmit('login','User/Password Combination Was Not Found'))
  }
}


export default function* watchSubmitUserRequest() {
  yield takeEvery(EDIT_USER,submitEditUser)
  yield takeEvery(SEND_EMAIL_LINK,sendEmailLink)
  yield takeEvery(CHECK_IF_EMAIL_EXISTS,checkIfEmailExists)
  yield takeLatest(ATTEMPT_LOG_IN,submitLoginRequest)
  yield takeEvery(SUBMIT_USER_INPUT,submitUserRequest)
  yield takeEvery(PULL_CUSTOMER_DATA,pullCustomerData)
}
