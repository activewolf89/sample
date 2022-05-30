export default function(historyObject,findVeryRoot){
  var rootString = '';
  var slashCount = 0;
  for(var i = 0; i < historyObject.pathname.length;i++){
    if(historyObject.pathname === "/"){
      slashCount++
    }
    if(slashCount < 2){
      rootString += historyObject.pathname[i]
    }

  }
if(!findVeryRoot){
return rootString
} else {
  return rootString.substring(1,rootString.indexOf('/',1))
}

};
