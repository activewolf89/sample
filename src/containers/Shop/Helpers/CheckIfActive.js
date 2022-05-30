
import getParameterByName from './getParameterByName'

export default function(key,value,searchHistory,isShowAll,isSort){
  if(isSort){
    if(!searchHistory.includes(key)){
      if(value === "featured"){
        return true;
      } else {
        return false
      }
    } else {
      if(searchHistory.includes(value)){
        return true;
      } else {
        return false;
      }
    }
  } else {

    if(!searchHistory && isShowAll){
      return true
    }
    if(!searchHistory && !isShowAll){
      return false;
    }

  if(!searchHistory.includes(key) && isShowAll){
    //you know for sure it isnt a part of the search query, and can immediately return
    return true;
  } else {
    //the verbage is there that the searchHistory includes it.
    if(isShowAll && searchHistory.includes((key + '=showAll'))){
      return true;
    }

    var searchArray = getParameterByName(key,searchHistory)
    if(searchArray === null){
      return false;
    } else {
      var checked = false;
      searchArray.split(',').forEach((search)=>{
        if(search === value){
          checked = true
        }
      })
      if(checked){
        return true;
      } else {
        return false;
      }
    }
  }

    //here we find we have a search line, and now we need to organize the strings.

  }
};
