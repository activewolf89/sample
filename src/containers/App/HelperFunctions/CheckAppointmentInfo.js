import {Map,List} from 'immutable';
import {fromJS,toJS} from 'immutable';
import {handleSubmitAppointmentSuccess} from '../actions'
import {validateEmail,CheckObjectAllNull} from 'containers/App/HelperFunctions/Validators'
export default function(appointmentObject){
  var {date,startTime,endTime,errors,submitRequest} = appointmentObject;
  var newAppointmentObject = {}

if(date === ""){
  errors.date = "let us know what date"
} else {
  errors.date = null
}
if(CheckObjectAllNull(errors)){

  appointmentObject.submitRequest = true;
  newAppointmentObject = new Map(appointmentObject)
  return newAppointmentObject;
  //no errors
} else {
  appointmentObject.submitRequest = false;
  newAppointmentObject = new Map(appointmentObject)
  return newAppointmentObject;

  //errors
}
};
