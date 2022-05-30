import getParameterByName from './getParameterByName.js';
export default function(defaultValue,searchString,key,object,array,incrementBy){
  //this function requires the max value the range can have,


  var parameterValues = getParameterByName(key,searchString)
  if(!parameterValues){
    return defaultValue;
  } else {
    var parameterValuesArray = parameterValues.split(',');
    if(searchString.includes('%20')){
      parameterValuesArray.forEach((value,idx)=>{

        if(value.includes('%20')){
          value = value.replace(/%20/g, " ");
          parameterValuesArray[idx] = value

        }
      })
    }
      var range1 = array.indexOf(parameterValuesArray[0]) * incrementBy
      var range2 = (array.indexOf(parameterValuesArray[parameterValuesArray.length-1]) * incrementBy)

      range2 = range2 >=100 ? 100: range2;
      return [range1,range2]

  }
};
