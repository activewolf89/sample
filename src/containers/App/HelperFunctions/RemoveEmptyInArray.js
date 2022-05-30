
export default function(array){
  var newArray = []
  array.forEach((instance)=>{
    if(instance !== ""){
      newArray.push(instance)
    }
  })
  return newArray;
};
