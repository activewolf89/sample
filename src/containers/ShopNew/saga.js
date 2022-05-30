import { takeEvery,put } from 'redux-saga/effects';
import {loadSpecificItems,searchByItemLoaded,handleResetView,productsLoaded,productsLoading,productsFailed} from 'containers/ShopNew/actions';
import {EmailSearch,CleanSearch} from 'containers/ShopNew/Helpers/AdjustSearchString.js'
import axios from 'axios';
import {
  FETCH_PRODUCTS,
  LOAD_ITEM_NUMBERS,
  PULL_SPECIFIC_ITEM_INFO

} from './constants';
// Individual exports for testing

function* pullSpecificInfo(object){
  try {
  const response = yield axios.post('/products/pullSpecificInfo',{
    itemArrayString: object.itemArrayString
  })
  if(response.data){
    yield put(loadSpecificItems(response.data))
  } else {
  }

  }
  catch(error){
    console.log(error)
  }
}
function* loadItemNumbers(object){
  try {
  const response = yield axios.post('/products/searchByItem')
  if(response.data){
    yield put(searchByItemLoaded(response.data))
  } else {
  }

  }
  catch(error){
    console.log(error)
  }
}
function* fetchProducts(object){
  yield put(productsLoading())
  if(object.reset){
  yield put(handleResetView())
  object.revealedAmount = null
}
  try {
  const response = yield axios.post('/products',{
    promoObject: object.promoObject,
    userEmail: EmailSearch(object.history),
    pathname: object.history.location.pathname,
    limit: 20,
    search: CleanSearch(object.history),
    revealedAmount: object.revealedAmount === null ? 20: object.revealedAmount + 20
  })
  if(response.data){
    yield put(productsLoaded(response.data,object.search))

  } else {
    yield put(productsFailed())
  }

  }
  catch(error){
    console.log(error)
  }

// var product = fetch('/test').then(response => response.json()).then(data => console.log(data));

}

export default function* watchFetchProducts() {
  // See example in containers/HomePage/saga.js
  yield takeEvery(PULL_SPECIFIC_ITEM_INFO,pullSpecificInfo)
  yield takeEvery(LOAD_ITEM_NUMBERS,loadItemNumbers)
  yield takeEvery(FETCH_PRODUCTS,fetchProducts)

}
