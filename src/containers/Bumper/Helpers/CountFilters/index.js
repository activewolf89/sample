var CheckHistoryLink = require('../CheckHistoryLink');


module.exports = function(location){
  var TheSplit =  function(search){
    var searchArray = []
      var splitArray = search.split('&?')
      splitArray.forEach((string)=>{
        var subString = string.substring(string.indexOf('?') !== -1 ? string.indexOf('?') + 1:0 ,string.indexOf("="))
        searchArray.push(subString)
      })
  return searchArray
  };



  var result = CheckHistoryLink(location.pathname)
  var split = TheSplit(location.search)
  var count = 0;
  if(result !== "Show All"){
    count += 1
  }
  count += (split.length)
  if(split.length > 0 && split[0] === ""){
    count = count - 1
  }
  return `(${count}) filters`

}
