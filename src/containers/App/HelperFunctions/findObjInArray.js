
export default function(StringToMatch,ArrayToLookAt){
  var indexToReturn = 0;
  ArrayToLookAt.forEach((obj,idx)=>{
    if(obj.name === StringToMatch){
      indexToReturn = idx
    }
  })
  return ArrayToLookAt[indexToReturn]

};
