module.exports = {

validateEmail:(email)=> {
  var re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
},
CheckObjectAllNull: (errorObject)=>{
  for (var error in errorObject) {
     if (errorObject[error] !== null){
         return false;
       }
 }
 return true;
},
CheckAddressDetail: (AddressCity,AddressState,AddressStreet,AddressStreet2,AddressZip)=>{

  var obj = {
    AddressCity: false,
    AddressStreet:false,
    AddressStreet2:false,
    AddressState:false,
    AddressZip:false,
    passed: true
  }
  if(AddressZip){
    var zipCodePattern = /^\d{5}$|^\d{5}-\d{4}$/;
   if(!zipCodePattern.test(AddressZip)){
     obj.AddressZip = 'Enter Valid ZipCode'
    obj.passed = false;
   }

 } else {
   obj.AddressZip = 'Enter ZipCode'
   obj.passed = false;
 }
if(!AddressCity || AddressCity === ''){
  obj.AddressCity = 'Enter City'
  obj.passed = false;
}
if(!AddressStreet || AddressStreet === ''){
  obj.AddressStreet = 'Enter Street'
  obj.passed = false;
}
if(!AddressState || AddressState === ''){
  obj.AddressState = 'Enter State'
  obj.passed = false;
}
  return obj
}

}
