import {Map} from 'immutable';
import {validateEmail,CheckObjectAllNull} from 'containers/App/HelperFunctions/Validators'

export default function(contactInfo,type){
  var {fullName,email,comment,errors,date,phone} = contactInfo;
  var newGeneralInfo = {}
  if(fullName === ''){
    errors.fullName = "this field is required"
  } else {
    errors.fullName = null
  }
if(phone === ""){
  errors.phone = "this field is required"
} else {
  errors.phone = null
}
if(email === ''){
  errors.email = "this field is required"
} else {
  if(!validateEmail(email)){
    errors.email = "email format error"
} else {
  errors.email = null
}
}
if(comment === ""){
  errors.comment = "this field is required"
} else {
  errors.comment = null
}
if(type === "appointment" || type === "scheduleAViewing"){
  if(date === ""){
    errors.date = "let us know what date"
  } else {
    errors.date = null
  }
}
if(CheckObjectAllNull(errors)){
  contactInfo.submitRequest = true;
  newGeneralInfo = new Map(contactInfo)
  return newGeneralInfo;
  //no errors
} else {
  contactInfo.submitFailed = true;
  contactInfo.submitRequest = false;
  newGeneralInfo = new Map(contactInfo)
  return newGeneralInfo;

  //errors
}
};
