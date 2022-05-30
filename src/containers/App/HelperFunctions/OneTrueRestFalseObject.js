import {Map} from 'immutable';

export default function(object,trigger,exception){

  var newObject = {};
  // console.log(trigger)

  for (var item in object){
    if(item === trigger && !object[item]){
      //matches so its on and it was off
      newObject[item] = true;
    } else if(item === trigger && object[item]){
      //doesnt mater so its off
      newObject[item] = false
    } else {
      newObject[item] = false;
    }

  }

  return Map(newObject)
  // return Map(regularNavigationDetailArray)
};
