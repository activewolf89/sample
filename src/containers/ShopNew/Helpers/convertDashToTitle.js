
export default function(string){

  var newTitle = ''
  var nextLetter= false;
  for(var m = 0; m < string.length;m++){
    if(m === 0 || nextLetter){
      newTitle += string[m].toUpperCase()
      nextLetter = false;
    } else {
    if(string[m] === "-"){
      newTitle += " "
      nextLetter = true
    } else {
      newTitle += string[m]
    }

  }
}
return newTitle.replace(/-/g, "")
};
