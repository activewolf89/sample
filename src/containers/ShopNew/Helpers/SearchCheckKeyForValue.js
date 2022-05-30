import getParameterByName from './getParameterByName.js';
export default function(searchString,key,value){
  var parameters = getParameterByName(key,searchString)
  var parametersArray = []
  var isFound = false


  if(!parameters){
    return false;
  } else {
     parametersArray = parameters.split(',')

    parametersArray.forEach((parameter)=>{
      if(parameter === value){
        isFound = true;
      }
    })
  }
return isFound;
};
