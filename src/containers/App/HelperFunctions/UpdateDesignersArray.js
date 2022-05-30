

export default function(catId,categoryObject){
  var obj = categoryObject.vendorCategoryObject
  var newArr = []
  for(let key in obj){
    newArr.push(obj[key])
  }
  return newArr
}
