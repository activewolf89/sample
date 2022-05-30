import {validateEmail} from 'containers/App/HelperFunctions/Validators'

export default function(key,obj){
  const {value} = obj[key]
  switch(key){
    case 'name':
    if(!value){
      return true;
    }
    return false
    case 'comment':
    if(!value){
      return true;
    }
    return false;
    case 'address':
    if(!value){
      return true;
    }
    return false;
    case 'zipcode':
    if(!value){
      return true;
    }
    return false;
    case 'date':
    if(!value){
      return true
    }
    break;
    case 'time':
    if(!value){
      return true
    }
    break;
    case 'email':
    if(obj.email.preference){

    if(!value){
      return true
    }
    else if(!validateEmail(value)){
    return true
  } else {
    return false
  }
} else {
  return false
}
case 'text':
if(obj.text.preference){

if(!value){
  return true
}
else if(!value.length === 14 || value.endsWith(' ')){
return true
} else {
return false
}
} else {
return false
}
case 'call':
if(obj.call.preference){

  if(!value){
    return true
  }
  else if(!value.length === 14 || value.endsWith(' ')){
  return true
  } else {
  return false
  }
} else {
return false
}

    default:
    return false;

  }

};
