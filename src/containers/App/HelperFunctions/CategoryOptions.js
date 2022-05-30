import ShopCategory from './ShopCategory';
import ShopCategoryName from './ShopCategoryName';

export default function(categoryObject,color){
  var returnedArr = []

  if(categoryObject.searchableCategoryObject){
    const iterateObj = categoryObject.searchableCategoryObject;

      for(let key in iterateObj){

        iterateObj[key].jewelry.forEach((obj)=>{
          if(obj.DetailField === "ItemMetalColor" && obj.categories.includes(color)){
            returnedArr.push({
              name: ShopCategoryName(Number(key)),
              link:ShopCategory(Number(key),true) + '?ItemMetalColor=' + color
            })
          }
        })
      }

      return returnedArr

} else {

  return returnedArr
}
};
