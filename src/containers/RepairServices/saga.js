import { takeEvery,put } from 'redux-saga/effects';
import {LoadSuccess} from 'containers/RepairServices/actions';
import axios from 'axios';
import {
  SUBMIT_REPAIR_FORM,
} from './constants';
// Individual exports for testing


function* submitRepairForm(requestObject){
  var newRequestObject = requestObject.obj
  try {
    yield put(LoadSuccess(newRequestObject.name,newRequestObject.email,newRequestObject.phone))

yield axios.post('/services/form',{
    name: newRequestObject.name,
    phone: newRequestObject.phone,
    email: newRequestObject.email,
    requests: newRequestObject.repairRequests,
  })
  }
  catch(error){
    console.log(error)
  }


}

export default function* watchSubmitRepairForm() {
  yield takeEvery(SUBMIT_REPAIR_FORM,submitRepairForm)

}
