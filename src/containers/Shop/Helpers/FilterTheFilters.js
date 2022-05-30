
export default function(array){
  var arrayOfObjects = []
  array.forEach((object)=>{
    for (var property in object) {
      if(object[property].length >= 2){
        arrayOfObjects.push({[property]:object[property],toggle:false})
      }
    }
    // arrayOfObjects.push

  })
  if(arrayOfObjects.length > 1){
    arrayOfObjects.push({sort:['featured','($)lowest','($)highest'],toggle:false})
  }
return arrayOfObjects

};
