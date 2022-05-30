import convertDashToTitle from './convertDashToTitle';
export default function(masterProductObject,arrayOfNames,historyObject,getId){

  const {location} = historyObject
  var categoryName = ''
  arrayOfNames.forEach((name)=>{

    //check all the names in the array for a match
    if(location.pathname.includes(name)){
      categoryName = name
    }
  })
  if(categoryName === ''){
    categoryName = arrayOfNames[0]
  }
  if(getId){
    var categoryId = ''
    for(let val in masterProductObject){
      if(masterProductObject[val].name === categoryName){
        categoryId = masterProductObject[val].id
      }
    }
    if(categoryId === ''){
      for(let val in masterProductObject){

        if(masterProductObject[val].name === arrayOfNames[0]){
          categoryId = masterProductObject[val].id
        }
      }
    }
    return categoryId
  } else {
  return convertDashToTitle(categoryName)
}

};
