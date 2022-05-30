
export default function(vendorId,array){
  var arrayToReturn = []
  array.forEach((obj)=>{
    if(vendorId === obj.vendorId){
      return arrayToReturn = obj.catId
    }
  })
  return arrayToReturn

};
