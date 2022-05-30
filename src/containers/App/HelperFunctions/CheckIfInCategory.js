export default function(defaultToReturn,arrayOfOptions,pathname){
  var found = false;
  arrayOfOptions.forEach((option)=>{
    if(pathname.includes(option)){
      console.log(option)
      found = option
      return option
    }
  })
return found ? found: defaultToReturn

};
