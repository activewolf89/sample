import { takeEvery,put,takeLatest} from 'redux-saga/effects';
import {reviewsLoaded,
  passwordResult,
  handleUpdateWishlistItems,
  handleUpdateHighlightedProduct,
  handleCategories,
  loadRotatingBanner,
  serviceFormSuccess,
  loadRotatingBannerSuccess,
  UpdateDesigners,
  shouldShowPasswordCreation,
  handleUpdateDesignerCategories,
  DataReceived,
  generateDailys,
  redirectToAccount,
  searchItemsLoaded} from 'containers/App/actions';
  import CookieString from 'containers/App/HelperFunctions/CookieString';

  import {
    loadUser
  } from 'containers/MyAccount/actions'
import axios from 'axios';
import cookie from 'react-cookies'
import AddToWishlist from 'containers/App/HelperFunctions/AddToWishlist';
import {
  LOAD_INITIALS,
  PULL_CUSTOMER_DATA,
  ADD_TO_WISHLIST,
  LOAD_DESIGNERS,
  RETRIEVE_DESIGNER_CATEGORIES,
  GET_REVIEW,
  SEARCH_CHANGE,
  RETRIEVE_PRODUCT,
  GET_ROTATING_BANNER,
  LOAD_WISHLIST_ITEMS,
  SERVICE_SUBMIT,
  INITIATE_HINT,
  UPDATE_CATEGORY_OPTIONS,
  GET_PASSWORD,
  CHECK_USER_TOKEN,
  SUBMIT_CONTACT_INFO,
  CLEAR_BACKEND_WISHLIST,
  UPDATE_USER_PASSWORD

} from './constants';


// Individual exports for objecting
function* clearBackendWishlist(obj){
  const {email} = obj
  try {
    const response = yield axios.post(`/user/clearBackendWishlist`,{email:email})
    if(response.data){
      yield put (loadUser(response.data))
    }
  } catch(error){
    // yield put (resetSubmit('login','User/Password Combination Was Not Found'))
  }
}
function* checkJTW(token){
  if(!token){
    return false;
  } else {
    const jwt = token;
      var payload;
      payload = jwt.split('.')[1];
      payload = window.atob(payload);
      payload = JSON.parse(payload);
      if(payload.exp >= Date.now() / 1000){
      const res = yield axios.get(`/user/checkToken/${payload.email}/${payload.token}`)
          if(res.data){
            sessionStorage.setItem('aToken', res.data.Emails);
            return true
          } else {
            return false
          }
      } else {
        return false
      }



  }

}


function* checkUserToken(obj){
  if(yield checkJTW(obj.token)){
    yield put(shouldShowPasswordCreation(true))
} else {
  yield put(shouldShowPasswordCreation(false))
}
}

function* startSearch(object){
  if(object.string !== ''){

  try {
    const response =  yield axios.post('/products/search/' + object.string)
    if(response.data){
      yield put(searchItemsLoaded(response.data.results,response.data.from))
    }
  }
  catch(error) {

  }
} else {
  yield put(searchItemsLoaded([],'none'))

}

}

function* submitEmail(object){
  try {
  const response = yield axios.post(`/services/contact`,{
    obj: object.evt,
    choiceKey: object.evt1,
    item: object.evt2,
    images: object.evt3
  })
  if(response.data){
    yield put(DataReceived())
  }
  }
  catch(error){
    console.log(error)
  }
}
function* retriveHighlightedProduct(object){
  try {
    const response =  yield axios.post('/highlightedProducts',{
      catId: object.catId,
      detail: object.detail
    })
    if(response.data){
      yield put(handleUpdateHighlightedProduct(response.data,object.catId,object.detail))
    }

  }
  catch(error){
    console.log(error)
  }
}
function* getReview(){
  try {
    const response =  yield axios.post('/services/review')
    if(response.data){
      var data = response.data[0];
    yield put(reviewsLoaded(data.googleReview,data.yelpReview))
    }

  }
  catch(error){
    console.log(error)
  }

}
function* retrieveCategoryOptions(){
  try {
    const response = yield axios.post('/products/filters')
    if(response) {
      var Obj = response.data.filters;
      Obj.saleName = response.data.saleName;
      yield put(handleCategories(Obj))
    }
    }
  catch(err){
    console.log(err)
  }
}
function*  retrieveRotatingBanner(object){
  yield put(loadRotatingBanner())

  try {

    const response = yield axios.post(`/products/rotatingBanner`,{
      fromItemDetail: object.fromCategory,
      fromDesigner: object.fromDesigner,
      getUnique: object.getUnique,
    })
    if(response){
      yield put(loadRotatingBannerSuccess(response.data))
    }
  } catch(error){
    console.log(error)
  }
}
function* sendServiceForm(object){
  const {email,name,phone,preferredContact,repairRequests} = object.obj
  try {
    const response = yield axios.post(`/services/form`,{
    email: email,
    name: name,
    preferredContact: preferredContact,
    phone: phone,
    requests: repairRequests
    })
    if(response){
      yield put(serviceFormSuccess(object.obj))
    }
  }
  catch(error) {
    console.log(error)
  }
}
function* retrieveDesignerCategories(object){
  try {
    const response = yield axios.get('/products/vendor/' + object.vendorId)
    if(response.data){
      yield put(handleUpdateDesignerCategories({vendorId:object.vendorId,catId:response.data}))
    }
  }
  catch(error){

  }
}
function* retrieveDesigners(object){
  try {
    const response = yield axios.post('/products/designers',{
      designerArray: object.designerArray
    })
    if(response.data){
      yield put(UpdateDesigners(response.data))

    }
  }
  catch(error){
    console.log(error)
  }
}

function* retrieveInitiateHint(object){
  try {
    const response = yield axios.post('/services/sendHint',
{
  object: object.obj,
  itemsToView: object.itemsToView,
  linkToImage: object.linkToImage
}
  )
  if(response.data){

  }
}
  catch(error){
    console.log(error)
  }
}
function* updateUserPassword(object){
  var cookieArray = yield CookieString('wishlistItems').split(',');
  const response = yield axios.post('/service/updatePassword/',{cookieArray:cookieArray,email:object.email,password:object.password})
  if(response){
    yield put(loadUser(response.data))
    yield put(redirectToAccount(true))
  }
  try {

  } catch(error) {
    console.log(error)
  }
}
function* retrievePasswordCheck(object){
  try {
    const response = yield axios.get('/service/password/'+object.password)
  if(response){
  yield put(passwordResult(response.data))

  }
}
  catch(error){
    console.log(error)
  }
}
function* updateUserProfile(obj){
  if(obj.userProfile){
  const {userProfile,itemNumber} = obj;
  if(userProfile.email){
    //we have to sync, check if we are removing from the wishlist or adding..
    const response = yield axios.post('/products/updateWishlist',{userProfile:userProfile,itemNumber:itemNumber})
    if(response.data){
      yield put(loadUser(response.data))
    }
  }
}

}
function* getWishlistItems(object){
  try {
    const response = yield axios.post('/products/wishlist/' + object.itemString)
    if(response.data){
        var cookieArray = false;
        if(cookie.loadAll()['wishlistItems']){
         cookieArray = cookie.loadAll()['wishlistItems'].split(',')
       }
       if(cookieArray && cookieArray.length !== response.data.length){
         var arrayToCompare = []
          response.data.forEach((object)=>{
           arrayToCompare.push(object.itKey)
         })
  var newList = cookieArray.filter(function(word){
     return !arrayToCompare.includes(word);
  })

  newList.forEach((item)=>{

    AddToWishlist({},item)
  })
}
      yield put(handleUpdateWishlistItems(response.data))
    } else {
      yield put(handleUpdateWishlistItems([]))
    }
  }
  catch(error){
    console.log(error)
  }

}
function* pullCustomerData(customerData){
  const payload = JSON.parse(window.atob(sessionStorage.getItem('myToken').split('.')[1]))
  if(payload.email){

  try {
    const response = yield axios.post(`/customer/getInfo`,{email:payload.email})
    if(response.data){
      yield put(loadUser(response.data))
    }
  } catch(error){
  }
}
}
function* initiateInitials(){
  try {
    const response = yield axios.post('/system/loadInitials')
    if(response){
      yield put(generateDailys(response.data))
    } else {
      console.log('no response')
    }
  }
  catch(error){
    console.log(error)
  }
}

export default function* watchSaga() {
  yield takeEvery(LOAD_INITIALS,initiateInitials)
  yield takeEvery(PULL_CUSTOMER_DATA,pullCustomerData)
  yield takeEvery(CLEAR_BACKEND_WISHLIST,clearBackendWishlist)
  yield takeEvery(ADD_TO_WISHLIST,updateUserProfile)
  yield takeEvery(UPDATE_USER_PASSWORD,updateUserPassword)
  yield takeEvery(CHECK_USER_TOKEN,checkUserToken)
  yield takeEvery(GET_PASSWORD,retrievePasswordCheck)
  yield takeEvery(SUBMIT_CONTACT_INFO,submitEmail)
  yield takeEvery(INITIATE_HINT,retrieveInitiateHint)
  yield takeEvery(LOAD_DESIGNERS,retrieveDesigners)
  yield takeEvery(RETRIEVE_DESIGNER_CATEGORIES,retrieveDesignerCategories)
  yield takeEvery(SERVICE_SUBMIT,sendServiceForm)
  yield takeEvery(GET_ROTATING_BANNER,retrieveRotatingBanner)
  yield takeEvery(UPDATE_CATEGORY_OPTIONS,retrieveCategoryOptions)
  yield takeEvery(RETRIEVE_PRODUCT,retriveHighlightedProduct)
  yield takeLatest(SEARCH_CHANGE,startSearch)
  yield takeEvery(GET_REVIEW,getReview)
  yield takeEvery(LOAD_WISHLIST_ITEMS,getWishlistItems)
}
