
export default function(productId){
  var catObject = {
    "100,140": "/shop/engagement-rings",
    "110":"/shop/mens-bands",
    "115":"/shop/ladies-bands",
    "150,'130',165,170,500,999":"/shop/fine-jewelry",
    "190":"/shop/loose-diamonds",
  }
  if(typeof productId === "number"){
      for(let key in catObject){
        if(key.includes(productId)){
          return catObject[key]
        }
      }
  } else {
    var catId = productId.split('-')[1];

    for(let key in catObject){
      if(key.includes(catId)){
        return catObject[key]
      }
    }
  }
};
