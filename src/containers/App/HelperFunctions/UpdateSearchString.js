import DestroySearchSegment from 'containers/Shop/Helpers/DestroySearchSegment'

var RemoveAnd = function(string){
  var newString = '';
   for(var i = 0; i < string.length;i++){

    if(string[i] !== "&"){
      newString += string[i]
    }
  }
  return newString;

}
export default function(key,value,historyObject,checkIfSame,sendBack){

  if(value === checkIfSame && !sendBack){
    DestroySearchSegment(historyObject,key)
  } else {
    // console.log(key)
    // console.log(value)
    // console.log(historyObject)
      var pathName = historyObject.location.pathname;
      var searchStr= historyObject.location.search;
      var searchArrayPoint = searchStr.search(key);
      var searchArray = searchStr.split('?')
  //purpose: update the search string and push the new search string out to the history object

  if(searchArrayPoint !== -1){
    //found the key already within the search string, which means must be updated
    for(var i = 0; i < searchArray.length;i++){
      //run through the array of search parameters and update the single one that matches the key
      if(searchArray[i].includes(key)){
        //we found the particular search item that matches our key, and now its time to update this particular string  --- now its time to find the = sign
        var check =  key + '=' + value
        if(searchArray[i] === check){
          searchArray.splice(i,1)
        } else {
          searchArray[i] = key + "=" + value;
        }
      }
    }
    if(searchArray.join('?')){
      var newStringToReturn = ''
      for(i = 0; i < searchArray.length;i++){
        if(i === 0){
          newStringToReturn += searchArray[i] + '?'
        }
        else if(i !== searchArray.length - 1){

          newStringToReturn += RemoveAnd(searchArray[i]) + '&?'

        } else {
          newStringToReturn += searchArray[i]
        }
      }
    }
    if(newStringToReturn !== undefined){
      // alert(newStringToReturn)
      if(sendBack){

        return pathName + newStringToReturn
      } else {

        return historyObject.push(pathName + newStringToReturn)
      }
    }

  }  else {

    //did not find the search string, which means we must add it in.
    if(searchStr){
      // console.log(pathName + searchStr + '&?' + key + '=' + value)
      // alert(pathName + searchStr + '&?' + key + '=' + value)
      if(sendBack){
        return pathName + searchStr + '&?' + key + '=' + value
      } else {
      return historyObject.push(pathName + searchStr + '&?' + key + '=' + value)
    }
    } else {
      // console.log(pathName + searchStr + '?' + key + '=' + value)
      // alert(pathName + searchStr + '?' + key + '=' + value)
      if(sendBack){
        return pathName + searchStr + '?' + key + '=' + value
      } else {
        return historyObject.push(pathName + searchStr + '?' + key + '=' + value)
      }
    }
  }
}
}
