
module.exports = {

  EmailSearch: function(history){
    const {search} = history.location
    var email = getParameterByName('user',search);

    return email;
  },
  CleanSearch: function(history){
    const {search} = history.location
    var newSearch = search
    if(search.includes('user')){
      newSearch = Destroy(history,'user',true)
    }

    return newSearch;
  }
}

var Destroy =  function(history,key,returnString,justSearchPart){
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

var getParameterByName =   function(name,url){
      if (!url) url = window.location.href;
      name = name.replace(/[\]]/g, '\\$&');
      // name = name.replace(/[\[\]]/g, '\\$&');

      var indexOfName = url.indexOf(name)
      if(indexOfName === -1){
        //could not find
        return ''
      } else {
        indexOfName = indexOfName + name.length + 1;
        var valueToFind = ''
        //indexofName is the beginning now we need to find the end.
        for(var i = indexOfName; i < url.length;i++){
          if(url[i] === '&' && url[i+1] === '?'){

            break;
          } else {
            valueToFind += url[i]

          }
        }
        return valueToFind
      }

}
