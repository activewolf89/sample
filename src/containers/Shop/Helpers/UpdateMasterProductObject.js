import {Map} from 'immutable';
import FilterProductBySearch from './FilterProductBySearch';
export default function(products,productObject,search){

  var allFilter = []
  // for(var val in category){
  //   var value = category[val]
  //   // console.log(val)
  //   if(Array.isArray(value) && val !=="_products"){
  //     allFilter.unshift({[val]:[...new Set(value)]})
  //   }
  // }

  allFilter.push({'sort':['featured','$lowest','$highest','sale']})
  productObject.filters.all = allFilter;
  productObject.products.all = products

  productObject.products.reveal = FilterProductBySearch(products,search)
  return Map(productObject)

};
