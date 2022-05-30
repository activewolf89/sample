
export default function(search){
  var searchArray = []
    var splitArray = search.split('&?')
    splitArray.forEach((string)=>{
      var subString = string.substring(string.indexOf('?') !== -1 ? string.indexOf('?') + 1:0 ,string.indexOf("="))
      searchArray.push(subString)
    })
return searchArray
};
