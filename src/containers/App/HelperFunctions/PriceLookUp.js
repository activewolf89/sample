export const LowerBound = (searchStr,key) =>{


  var searchStrArray = searchStr.split('&?');;
  for(let i = 0; i < searchStrArray.length;i++){
    if(searchStrArray[i].includes(key)){
      searchStr = searchStrArray[i].split('=')[1];
    var lowerStr = '';
    for(let i = 0; i < searchStr.length;i++){

        if(searchStr[i] === '-'){
          break;
        } else {
          if(searchStr[i] !== "&"){
          lowerStr += searchStr[i]
        }
        }

    }
    return Number(lowerStr)
  }
}
}

export const UpperBound = (searchStr,key) =>{
  var searchStrArray = searchStr.split('&?');
for(let i = 0; i < searchStrArray.length;i++){
    if(searchStrArray[i].includes(key)){
      searchStr = searchStrArray[i].split('=')[1];

    var upperStr = '';
    var triggeredDash = false;
    for(let i = 0; i < searchStr.length;i++){
      if(triggeredDash){
        if(searchStr[i] !== "&"){

        upperStr += searchStr[i]
      }
      }
      if(searchStr[i] === '-'){
        triggeredDash = true;
      }
    }
    return Number(upperStr)
  }
}

}
export const LowerBoundRange = (lowerBound,maxValue) =>{


  return Math.ceil(lowerBound/maxValue * 100)
}
export const UpperBoundRange = (upperBound,maxValue) =>{




  return Math.ceil(upperBound/maxValue * 100)
}
