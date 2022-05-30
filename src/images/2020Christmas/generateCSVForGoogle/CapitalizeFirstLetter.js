module.exports = function(string){
  string = string.toLowerCase().split('-').join(' ')
  if(string.length < 1){
      return ''
  } else {

    var newString = ''
    var triggerSpace = true;
    for(var i = 0; i < string.length;i++){
      if(triggerSpace){
        newString += string[i].toUpperCase()
        triggerSpace = false;
      } else {
        if(string[i] === ' '){
          triggerSpace = true
        }
        newString += string[i]
      }
    }
return newString
}
};
