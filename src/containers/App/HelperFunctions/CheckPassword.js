import {fromJS} from 'immutable';

export default function(oTC){
  var triggeredOnce = false
for(let key in oTC){
  switch(key){

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
oTC['submit'] = !triggeredOnce
return fromJS(oTC)

};
