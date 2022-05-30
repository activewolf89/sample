import FilterProductBySearch from './FilterProductBySearch';
import { fromJS,} from 'immutable';

export default function(masterProductObject,catId,search,allProducts){
  var unMapped = masterProductObject.toJS()
  if(unMapped[catId].products.all == null){
  unMapped[catId].products.all = allProducts
}
  unMapped[catId].products.reveal = unMapped[catId].products.all === null ? allProducts:FilterProductBySearch(unMapped[catId].products.all,search,catId)
  var attemptToRemap = fromJS(unMapped);

  return attemptToRemap

}
