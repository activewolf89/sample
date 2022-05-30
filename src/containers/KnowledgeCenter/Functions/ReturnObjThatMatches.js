module.exports = function(arr,path){
var returnedObj = arr[0];
  arr.forEach((obj,idx)=>{
    if(path.includes(obj.clickTo)){
      returnedObj = obj
    } else {
    }
  })
  return returnedObj
}
