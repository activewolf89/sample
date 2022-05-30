/*
 *
 * Shop reducer
 *
 */

import {fromJS } from 'immutable';
import AddToRecentlyViewed from './Helpers/AddToRecentlyViewed';
import {
UPDATE_INDIVIDUAL_ITEM,
UNMOUNT,
ITEM_FAILED,
PULL_STYLE_START,
UPDATE_STYLE,
DETAIL_CLICK,
RECENTLY_BROWSED,
GET_INDIVIDUAL_ITEM,
ARRAY_OF_RECENTLY_VIEWED_ITEMS,
UPDATE_ITEM_PRICE_PROMO,
SUCCESSFULLY_UPDATED_IMAGES
} from './constants';

const initialState = fromJS(
{
  item: null,
  redirect: false,
  similar: null,
  matching: null,
  recentlyViewed: null,
  detailItemObject: {
    general: true,
    similar:true,
    recentlyViewed:true,
    helpfulArticles:true,
    gaurantee: true,
    cert: true
  }
}
);

function ItemReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_ITEM_PRICE_PROMO:
    var nItem = state.get('item')
    var {ItemSpecialPrice} = nItem;
    if(ItemSpecialPrice){
      console.log('trigged')

    } else {
      nItem.ItemRetailPrice = 2000
      nItem.ItemCurrentPrice = 2000
      console.log('full retail')
    }
    //ItemCurrentPrice / ItemSpecialPrice
    return state.set('item',nItem);
    case SUCCESSFULLY_UPDATED_IMAGES:
    var newItem = state.get('item');
    newItem["_Vision360Static"] = action.array
    return state
    .set('item',newItem)
    case PULL_STYLE_START:
    return state
    .set('matching',null)
    .set('similar',null)
    .set('loadingStyle',true)
    case GET_INDIVIDUAL_ITEM:
    return state.set('item',null)
    case ARRAY_OF_RECENTLY_VIEWED_ITEMS:
    return state
    .set('recentlyViewed',action.array)
    case RECENTLY_BROWSED:
    AddToRecentlyViewed(action.string,action.rootPath)
    return state;
    case DETAIL_CLICK:
    return state
    .setIn(['detailItemObject',action.string],!state.getIn(['detailItemObject',action.string]))

    case UPDATE_STYLE:
    return state
    .set('matching',action.matching)
    .set('similar',action.similar)
    case ITEM_FAILED:
    return state.set('redirect',true)
    case UNMOUNT:
    return state
    .set('item',null)
    .set('recentlyViewed',null)
    .set('similar',null)
    .set('matching',null)
    .set('redirect',false)
    case UPDATE_INDIVIDUAL_ITEM:
    return state
    .set('item',action.item)
    ;
    default:
      return state;
  }
}

export default ItemReducer;
