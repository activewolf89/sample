export default function(filter,filterOption,historyObject){
  //purpose of this function is to adjust the search string if it exists, and if there isnt one add onto it.
  var NewStringFilter = filter + '=' + filterOption;
  var NewPath = '';
  var pathName = historyObject.location.pathname;
  var searchPath = historyObject.location.search;
  var searchPathArray = searchPath.split('?');
  if(searchPathArray[0] === ''){
    searchPathArray.shift();
  }

  if(searchPath.includes(filter)){
    //if searchPath already has this in it, we have to cut it out and replace with the new string
    var i = 0;
    for(i; i < searchPathArray.length;i++){
      if(searchPathArray[i].includes(filter)){
        break;
      }
    }
      var removed = searchPathArray.splice(i,1);

      if(removed[0] === NewStringFilter){
        searchPathArray.push(filter + '=showAll');
        NewPath = searchPathArray.join('?');
        historyObject.push(pathName + '?' + NewPath)

      } else {
        searchPathArray.push(NewStringFilter)
        NewPath = searchPathArray.join('?');
        historyObject.push(pathName + '?' + NewPath)
      }

  } else {
    historyObject.push(pathName + '?' + filter + '=' + filterOption + searchPath)
  }
}
