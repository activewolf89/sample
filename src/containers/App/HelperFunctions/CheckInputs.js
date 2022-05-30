var {validateEmail,CheckAddressDetail} = require('containers/App/HelperFunctions/Validators')

module.exports = {
  CheckPassword: function(Password,title){
    var masterObj = {
      passed: true,
      passwords:[{password:'',conformPassword:''}]
    }
    if(Password.new !== Password.confirmNew){
      masterObj.passed = false;
      masterObj.passwords =  [{confirmPassword:"Did Not Match"}]
    }
    if(!Password.new || Password.new === ''){
      masterObj.passed = false;
      masterObj.passwords =  [{password:"Enter New Password"}]
    }
    return masterObj
  },
  CheckPhone: function(phones,title,ogPhones){

     var phoneno = /^\d{10}$/;
     var masterObj = {
       passed: true,
       phones:[]
     }
     if(JSON.stringify(phones) === JSON.stringify(ogPhones)){
       masterObj.passed = false;
       masterObj.error = 'Nothing has Updated';

     }
     if(phones.length > 0){
     phones.forEach((phone)=>{
       var obj = {
         passed: false,
         phones: []
       }
       const {PhonePhone} = phone.PairValue;

       if(PhonePhone){

       if(PhonePhone.match(phoneno)){
         obj  = {
          passed: true,
          errorObj:{
            PhonePhone:""
          }
        }
       } else {
         obj  = {
          passed: false,
          errorObj:{
            PhonePhone:"Incorrect Phone Format"
          }
        }
       }
     } else {
       obj  = {
        passed: false,
        errorObj:{
          PhonePhone:"Enter Phone"
        }
      }
     }
       if(!obj.passed){
         masterObj.passed = false;
       }
       masterObj.phones.push(obj)

     })
   }
     return masterObj;
  },
  CheckDate: function(date,title,ogDate){
    function isValidDate(dateString) {

  var regEx = /^\d{4}-\d{2}-\d{2}$/;
  if(!dateString.match(regEx)) return false;  // Invalid format
  var d = new Date(dateString);
  var dNum = d.getTime();
  if(!dNum && dNum !== 0) return false; // NaN value, Invalid date
  return d.toISOString().slice(0,10) === dateString;
}

    var obj = {
      passed: true,
      error: ""
    }
      if(date){
        if(date.length > 10){
          date = date.substring(0,10)
        }
    if(!isValidDate(date)){
      obj.passed = false;
      obj.error = "Invalid Date"
    }
    if(date === ogDate){
      obj.passed = false;
      obj.error = "Nothing has Updated"
    }
  }

    return obj;
  },
  CheckName: function(name, title,ogName){
var obj = {
  passed: true,
  error: ""
}
var regName = /^[A-Za-z]+$/;
if(!name || name === ''){
  obj.error = title + " Required"
  obj.passed = false;
}
else if(!regName.test(name)){
  obj.error = 'Only Alphabetic characters'
  obj.passed = false;
} else if(name.toLowerCase() === ogName.toLowerCase()){
  obj.error = 'Nothing has Updated'
  obj.passed = false;
}

return obj
},
CheckEmail: function(email,title,ogEmail){
  var obj = {
    passed: true,
    error: ""
  }
  if(!email || email === ''){
    obj.passed = false;
    obj.error = title + " Required"
  }
  else if(!validateEmail(email)){

    obj.passed = false;
    obj.error = "Valid Email Required"
  } else if(ogEmail.toLowerCase() === email.toLowerCase()){
    obj.passed = false;
    obj.error = "Nothing has Updated"
  }
var re = /\S+@\S+\.\S+/
  if(!re.test(email.toLowerCase())){
    obj.passed = false;
    obj.error = "Valid Email Required"
  }
  return obj

},
CheckAddress: function(addresses,title,ogAddresses){

  
  var masterObj = {
    passed: true,
    addresses: [],
    error: ''
  }
  if(JSON.stringify(addresses) === JSON.stringify(ogAddresses)){
    masterObj.passed = false;
    masterObj.error = 'Nothing has Updated';

  }
  if(addresses.length > 0){
  addresses.forEach((address)=>{
    const {AddressCity,AddressState,AddressStreet,AddressStreet2,AddressZip} = address.PairValue;
    var result = CheckAddressDetail(AddressCity,AddressState,AddressStreet,AddressStreet2,AddressZip)
      var obj =  {
        passed: result.passed,
        errorObj: {
          AddressCity: result.AddressCity,
          AddressStreet:result.AddressStreet,
          AddressStreet2:result.AddressStreet2,
          AddressState:result.AddressState,
          AddressZip:result.AddressZip,
        }
      }
      if(!result.passed){
        masterObj.passed = false;
      }
    masterObj.addresses.push(obj)
  })
}

  return masterObj
}

}
