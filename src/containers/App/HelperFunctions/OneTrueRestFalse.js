import {List} from 'immutable';

export default function(navigationDetailArray,trigger){

  var regularNavigationDetailArray = navigationDetailArray.toJS()

  regularNavigationDetailArray.forEach((object,index,array)=>{
    var key = Object.keys(array[index])[0];
    if(trigger === ''){

      array[index][key].open = false;
    } else {

    if(array[index][key].open && trigger === key){

      //turn off
      array[index][key].open = false;
    }
    else if(!array[index][key].open && trigger === key){
      array[index][key].open = true
    } else {
      array[index][key].open = false
    }

  }
  })


  return List(regularNavigationDetailArray)
};
