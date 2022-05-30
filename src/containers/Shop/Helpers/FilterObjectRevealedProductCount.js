import getParameterByName from './getParameterByName'
import SplitArrayByMarkers from './SplitArrayByMarkers'
export default function(products,filterObject,search){
  console.log(products)
  for(let key in filterObject){
    filterObject[key].forEach((obj)=>{
      const {DetailField,DetailName} = obj
      var {categories} = obj
      for(var i = 0; i < categories.length;i++){
        let newName = categories[i];
        if(typeof newName === 'string'){
        categories[i] = {
          name:newName,
          count: findCount(DetailField,products,search)
        }
      }
      }
    })

}

return 'got it'

};


function findCount(DetailField,products,search){
  var count = 0;

  products.forEach((product,idx)=>{
    //within this filtered products, we need to find what it could be if this particular key was clicked..

  })


  return count;

}
