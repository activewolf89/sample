export default function(history,key,returnString,justSearchPart){
  var originalSearchArray = history.location.search.split('&?');
  originalSearchArray.forEach((searchString,index)=>{
    if(searchString.includes(key)){
      originalSearchArray.splice(index,1)
    }
  })

  originalSearchArray.forEach((search,i)=>{
    if(search.includes('?')){
      originalSearchArray[i] = search.split('?').join('')
    }
  })
  if(!returnString){
  history.push(history.location.pathname + '?' + originalSearchArray.join('&?'))
} else {
  if(justSearchPart){
    var smallReturnString = originalSearchArray.join('&?');
    if(smallReturnString.length > 0){
      return  '?' + smallReturnString
    } else {
      return ''
    }
  } else {

  var searchString = history.location.pathname + '?' + originalSearchArray.join('&?');
  if(searchString[searchString.length -1] === '?'){
    return searchString.substring(0, searchString.length-1)
  } else {
    return searchString
  }
}
}
};
