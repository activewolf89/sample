var {fromJS } = require('immutable');
var {validateEmail} = require('containers/App/HelperFunctions/Validators')


module.exports = {
CheckForLoginErrors: function(obj){
var  oTC = obj.toJS();
var triggeredOnce = false

for(let key in oTC){
  switch(key){
    case 'name':
      oTC[key].value === '' ? oTC[key].error =  "enter name":oTC[key].error = '';
      if(oTC[key].error !== ''){
        triggeredOnce = true
      }
      break;
    case 'email':
    oTC[key].value === '' ? oTC[key].error =  "enter email":!validateEmail(oTC[key].value) ? oTC[key].error = 'enter valid email':oTC[key].error = '';
    if(oTC[key].error !== ''){
      triggeredOnce = true
    }
    break;
    default:
    break;
  }
}
oTC['submit'] = !triggeredOnce;
  oTC = fromJS(oTC)
return oTC
},
CheckForRegisterErrors: function(obj){
var  oTC = obj.toJS();
var triggeredOnce = false
  for(let key in oTC){
    switch(key){
      case 'fName':
        oTC[key].value === '' ? oTC[key].error =  "enter first name":oTC[key].error = '';
        if(oTC[key].error !== ''){
          triggeredOnce = true
        }
        break;
      case 'lName':
        oTC[key].value === '' ? oTC[key].error =  "enter last name":oTC[key].error = '';
        if(oTC[key].error !== ''){
          triggeredOnce = true
        }
        break;
      case 'email':
        oTC[key].value === '' ? oTC[key].error = "enter email":!validateEmail(oTC[key].value) ? oTC[key].error = 'enter valid email':oTC[key].error = '';
        if(oTC[key].error !== ''){
          triggeredOnce = true
        }
        break;
      case 'password':
        oTC[key].value === '' ? oTC['password'].error = 'enter password':oTC[key].error = '';
        if(oTC[key].error !== ''){
          triggeredOnce = true
        }
        break;
      case 'confirmPassword':
        oTC['confirmPassword'].value === '' ? oTC['confirmPassword'].error = 'confirm password': oTC['password'].value !== oTC['confirmPassword'].value ? oTC[key].error = 'passwords do not match':oTC[key].error = '';
        if(oTC[key].error !== ''){
          triggeredOnce = true
        }
        break;
      default:
        break;
    }
  }
  oTC['submit'] = !triggeredOnce;
  oTC = fromJS(oTC)
  return oTC

}
}
