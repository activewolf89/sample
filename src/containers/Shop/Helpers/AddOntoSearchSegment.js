import DestroySearchSegment from './DestroySearchSegment'
import getParameterByName from './getParameterByName'
import StructureSearchString from './StructureSearchString';
export default function(key,value,history,sendBackString,erasedEntirePathnameSearch){


  var search = history.location.search;
  var pathname = history.location.pathname
  if(erasedEntirePathnameSearch){
    search = erasedEntirePathnameSearch
  }
  var alreadyPushed = false;
  var ArrayOfSearches = search.split('&?');
  var destroy = value === '' ? true: false;
  if(key !=="sort"){

  if(search !==""){
  ArrayOfSearches.forEach((searchString,i)=>{
    if(search.includes(key)){
      //needs to either be removed or added
    var stringsArray =   getParameterByName(key,search).split(',')
    stringsArray.forEach((string,x)=>{
      if(string === value){
        //remove
        if(stringsArray.length < 2){
           destroy = true;
          //just remove the entire string
          return
        } else {
          //remove just one
          stringsArray.splice(x,1)

        }
      } else {

        if(!stringsArray.includes(value)){
          stringsArray[0] = value
        }

      }
    })
    if(!alreadyPushed && searchString.includes(key)){
        alreadyPushed = true;
    var newJoin = stringsArray.join(',')
    searchString = "?" + key + '=' + newJoin;
    ArrayOfSearches[i] = searchString
  }
  } else {
    var whatToPush = '?' + key + '=' + value;
      var dontPush = false
      for(var z = 0; z < ArrayOfSearches.length;z++){
        if(ArrayOfSearches[z] === whatToPush){
          dontPush = true;
        }
      }
      if(!dontPush){
        ArrayOfSearches.push(whatToPush)
      }
  }
  })
    if(!destroy){
      ArrayOfSearches.forEach((search,i)=>{
        if(search.includes('?')){
          ArrayOfSearches[i] = search.split('?').join('')

        }
      })
      if(!sendBackString){
        history.push(pathname +'?'+ ArrayOfSearches.join('&?'))
      } else {
        return pathname +'?'+ ArrayOfSearches.join('&?')
      }
    } else {
      if(!sendBackString){
     DestroySearchSegment(history,key)
   }
    }
} else {
  var newString = '?' + key + '=' + value;
  //nothing in the search
  if(!sendBackString){
  history.push(pathname + newString)
} else {
  return pathname + newString
}
}
} else {
  if(value === 'featured' || search.includes(value)){
    if(!sendBackString){
    DestroySearchSegment(history,key)
  }
  } else {
    var searches = '?sort=' + value

    if(search.includes('sort')){
      ArrayOfSearches.forEach((searchStringYo,r)=>{
        if(searchStringYo.includes('sort')){
          ArrayOfSearches[r] = searches
        }
      })
    } else {
      //nothing there
      ArrayOfSearches.push(searches)
    }

      if(search ===""){
        if(!sendBackString){

          history.push(pathname + ArrayOfSearches.join(''))
        } else {
          return pathname + ArrayOfSearches.join('')

        }
      } else {

        if(!sendBackString){
          history.push(pathname + StructureSearchString(ArrayOfSearches))
        } else {
          return pathname + ArrayOfSearches.join('&')
        }
      }

  }

}

};
