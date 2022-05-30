import {Map,List} from 'immutable';

export default function(dropdownArray,trigger,trigger1){

  for(var i = 0; i < dropdownArray.length;i++){
      dropdownArray[i][trigger] ? dropdownArray[i]['toggle'] ? dropdownArray[i]['toggle'] = false: dropdownArray[i]['toggle'] = true: dropdownArray[i]['toggle'] = false
      if(trigger1){
        dropdownArray[i]['isOpen'] = false
      } else {

        dropdownArray[i]['isOpen'] = true
      }
  }
return List(dropdownArray)
};
