
export default function(arrayOfObjects){
  var organizedObject = {};

  arrayOfObjects.forEach((object)=>{
    organizedObject[object.catId] = {
      designer: [...new Set(object.itVendorId)],
      metalColor: [...new Set(object.itMetalColor)],
      metal: [...new Set(object.itMetalType)],
      style: [...new Set(object.itStyle)],
      shape: [...new Set(object.shape)]
    }
  })

  return organizedObject

};
