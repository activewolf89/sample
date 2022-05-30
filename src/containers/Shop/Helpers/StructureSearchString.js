
export default function(array){
//meant to structure the array to return a string
array.forEach((string,idx,arr)=>{
  string = string.replace('?','')
  string = string.replace('&','')
  arr[idx] = string
})
var newSearchString = "?" + array.join('&?')
return newSearchString


};
