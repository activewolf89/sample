module.exports = function(key,value){
  var newArrayToSend = []
  if(value.length > 0){

  value.forEach((obj,idx)=>{
    let newObj = {index:idx,value:''};

  if(key === 'Addresses'){
    if(obj.PairValue){
newObj.value = obj.PairValue.AddressStreet
    }
  } else if(key === 'Emails'){
    if(obj.PairValue){
newObj.value = obj.PairValue.EmailEmail
    }
  } else if(key ==='Phones'){
    if(obj.PairValue){
      newObj.value = obj.PairValue.PhonePhone
    }
  }
  newArrayToSend.push(newObj)
})
}

  return newArrayToSend


}
