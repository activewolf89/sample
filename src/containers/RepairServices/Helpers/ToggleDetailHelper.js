import {Map} from 'immutable';

export default function(dropdownObject,trigger){
  var newObject = {}
  dropdownObject.map((value,key)=>{
    newObject[key] = false;
    if(key === trigger && !value){
      newObject[key] = true;
    }
    return value;
  })
   const returnedObject = Map(newObject)
return returnedObject
};
