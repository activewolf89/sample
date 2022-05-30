import { takeEvery,put } from 'redux-saga/effects';
import axios from 'axios';
import {handleUpdateItem,handleUpdateArrayOfImages,itemFailed,handleFetchViews,handleUpdateStyle} from 'containers/Item/actions'
import {handleContactClick} from 'containers/App/actions';
import {
GET_INDIVIDUAL_ITEM,
PULL_STYLE_START,
RECENTLY_VIEWED,
PULL_STATIC_IMAGES
} from './constants';
// Individual exports for testing


function* fetchProduct(object){
  var itemNumber = object.itemNumber
  try {
  const response = yield axios.post('/oneItem/'+ itemNumber)
  if(response.data){
    yield put(handleUpdateItem(response.data))
  } else {
    yield put(handleContactClick('Item Not Found'))
    yield put(itemFailed())
  }

  }
  catch(error){
    console.log(error)
  }

// var product = fetch('/Item Not Found').then(response => response.json()).then(data => console.log(data));

}
function* fetchViewed(object){
  var array = object.array
  try {
  const response = yield axios.post(`/recentlyViewed`,{
    array: array,
  })
  if(response){
    yield put(handleFetchViews(response.data))
  }
  }
  catch(error){
    console.log(error)
  }
}
function* pullStatic(obj){
  try {
    const response = yield axios.post('/pullStatic/'+ obj.itemKey)
  if(response.data){
    yield put(handleUpdateArrayOfImages(response.data))
  }

  }
  catch(error){
    console.log(error)
  }
}
function* fetchStyles(object){
  var itemNumber = object.itemNumber
  var doNotAddArray = object.doNotAddArray
  try {
    const response = yield axios.post('/oneStyle/'+ itemNumber,{
      doNotAddArray: doNotAddArray,
    })

  if(response.data){
    yield put(handleUpdateStyle(response.data.matchingProductStyles,response.data.similarItems))
  } else {
    if(!response.data.matchingProductStyles || !response.data.similarItems){
      yield put(handleContactClick('Item Not Found'))
      yield put(itemFailed())
    }

  }

  }
  catch(error){
    console.log(error)
  }

// var product = fetch('/test').then(response => response.json()).then(data => console.log(data));

}
export default function* watchFetchProduct() {
  // See example in containers/HomePage/saga.js
  yield takeEvery(PULL_STATIC_IMAGES,pullStatic)
  yield takeEvery(RECENTLY_VIEWED,fetchViewed)
  yield takeEvery(GET_INDIVIDUAL_ITEM,fetchProduct)
  yield takeEvery(PULL_STYLE_START,fetchStyles)

}
