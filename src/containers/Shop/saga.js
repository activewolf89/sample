import { takeEvery,put } from 'redux-saga/effects';
import {productsLoaded,productsLoading,productsFailed,allProductsFinished} from 'containers/Shop/actions';
import axios from 'axios';
import {
  FETCH_PRODUCTS,

} from './constants';
// Individual exports for testing


function* fetchProducts(object){
  yield put(productsLoading())
  try {
  const response = yield axios.post('/products',{
    catId: object.category,
    limit: 20,
    search: object.search,
    doNotAdd: []
  })
  if(response.data){
    yield put(productsLoaded(response.data,object.category,object.search))
    var doNotAdd = [];
    response.data.forEach((obj)=>{
      doNotAdd.push(obj._id)

    })


    const response2 = yield axios.post('/products',{
      catId: object.category,
      limit: 20000,
      search: '',
      doNotAdd: doNotAdd

    })
    if(response2.data){
      yield put(allProductsFinished(response2.data,object.category,object.search))
    }
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
  yield takeEvery(FETCH_PRODUCTS,fetchProducts)

}
