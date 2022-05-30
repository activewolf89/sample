
export default function(catId,categoryObject){
  var {searchableCategoryObject} = categoryObject
  const searchableCategory = searchableCategoryObject[catId]
  if(searchableCategoryObject){
return searchableCategory
} else {
searchableCategoryObject = {[catId]:{jewelry:[]}}
return searchableCategoryObject
}
}
