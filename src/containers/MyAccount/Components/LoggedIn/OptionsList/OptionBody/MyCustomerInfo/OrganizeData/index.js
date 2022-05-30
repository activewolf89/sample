import OrganizeField from './OrganizeField'
export default function(state){
var newArray = [];
for(let key in state){

  if(key !=='modal' && key !=='selectedEdit'){

  let newObj = {key:key,fieldName:state[key].name,fieldValue:'',actions:'Update'}
  if(typeof state[key].new === 'string'){
    newObj.fieldValue = state[key].original
      newObj.actions = 'Update'
    if(isValidDate(new Date(state[key].original))){
      var stringToWorkWith = state[key].original
      if(state[key].original.length >10){
        var newString = state[key].original.substring(0,10);
        stringToWorkWith = newString;
      }
      var splitArray = stringToWorkWith.split('-');
      var temp = splitArray[0]
      splitArray[0] = splitArray[2];
      splitArray[2] = temp;
       temp = splitArray[0];
      splitArray[0] = splitArray[1];
      splitArray[1] = temp
      newObj.fieldValue = splitArray.join('-')

    }
  } else if(Array.isArray(state[key].original)){
    newObj.fieldValue = OrganizeField(key,state[key].original)

  } else {
    newObj.fieldValue = null
  }


  newArray.push(newObj)
}
}

return newArray;
}
function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}
