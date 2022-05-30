import FilterProductBySearch from './FilterProductBySearch';
import { Map } from 'immutable';

export default function(masterProductObject,catId,search){

  var unMapped = masterProductObject.toJS()
  unMapped[catId].products.reveal =  FilterProductBySearch(unMapped[catId].products.all,search,catId)
return Map(unMapped)

}
