module.exports = {
  ReturnDetailArray: function(value,searchableCategoryObject,pathname){

    var testCatId = ''
    const {categoryDetails} = value
    for(let key in categoryDetails){
      if(pathname.includes(key)){
        //found the key,
        testCatId = categoryDetails[key].catId
      }
    }
    var isInLargerArray = false;
    var catId = testCatId

    const {matchingEdgeKey,matchingEdge} = value
    if(searchableCategoryObject[catId]){

    var arrayToCheck = searchableCategoryObject[catId].jewelry

    for(var i = 0; i < arrayToCheck.length;i++){
      if(arrayToCheck[i].DetailField === matchingEdgeKey){
        for(var z = 0; z < matchingEdge.length;z++){

            if(arrayToCheck[i].categories.includes(matchingEdge[z])){
              isInLargerArray = true;
            }
        }


      }
    }
  }

    return isInLargerArray;

  },
  ReturnNonDetailArray: function(value,searchableCategoryObject){
    var isInLargerArray = false;
    const {catId,matchingEdgeKey,matchingEdge} = value
    if(searchableCategoryObject[catId]){
    var arrayToCheck = searchableCategoryObject[catId].jewelry
    for(var i = 0; i < arrayToCheck.length;i++){
      if(arrayToCheck[i].DetailField === matchingEdgeKey){
        for(var z = 0; z < matchingEdge.length;z++){
            if(arrayToCheck[i].categories.includes(matchingEdge[z])){
              isInLargerArray = true;
            }
        }
      }
    }
  }

    return isInLargerArray;

  }
}
