
export default function(products,key,objectKey){
  var uniqueItems = [...new Set(objectKey)]
    var newArray = []
    for(var i = 0; i < products.length;i++){
      var productKey = products[i][key];
      if(Number(productKey)){
        productKey = Math.floor(productKey)
      }
      if(uniqueItems.includes(productKey)){
        newArray.push(productKey)
      }
    }
return newArray
};
