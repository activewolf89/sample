/*
 *
 * Shop actions
 *
 */

import {
GET_INDIVIDUAL_ITEM,
UPDATE_INDIVIDUAL_ITEM,
ITEM_FAILED,
UNMOUNT,
PULL_STYLE_START,
UPDATE_STYLE,
DETAIL_CLICK,
RECENTLY_BROWSED,
RECENTLY_VIEWED,
PULL_STATIC_IMAGES,
UPDATE_ITEM_PRICE_PROMO,
SUCCESSFULLY_UPDATED_IMAGES,
ARRAY_OF_RECENTLY_VIEWED_ITEMS,
} from './constants';

// import {itemLoad,itemFailed} from 'containers/Item/actions'
export function handleApplyPromo(value,isPercent){
  return {
    type: UPDATE_ITEM_PRICE_PROMO,
    isPercent: isPercent,
    value: value
  }
}
export function handleUpdateArrayOfImages(array){
  return {
    type: SUCCESSFULLY_UPDATED_IMAGES,
    array: array
  }
}
export function PullStaticImages(itemKey){
  return {
    type:PULL_STATIC_IMAGES,
    itemKey:itemKey
  }
}
export function handleFetchViews(arrayOfItems){
  return {
    type: ARRAY_OF_RECENTLY_VIEWED_ITEMS,
    array: arrayOfItems
  }
}
export function handlePullRecentlyViewed(array){
  return {
    type: RECENTLY_VIEWED,
    array: array
  }
}
export function handleRecentlyBrowsed(rootPath,string){
  return {
    type: RECENTLY_BROWSED,
    rootPath: rootPath,
    string: string
  }
}
export function handleDetailClick(string){
  return {
    type: DETAIL_CLICK,
    string: string
  }
}

export function handleUpdateStyle(matching,similar){
  return {
    type: UPDATE_STYLE,
    matching: matching,
    similar:similar

  }
}

export function itemFailed(){
  return {
    type: ITEM_FAILED,
  }
}
export function handleUnmount(){
  return {
    type: UNMOUNT
  }
}
export function handlePullStyle(string,array){
  return {
    type: PULL_STYLE_START,
    itemNumber: string,
    doNotAddArray: array

  }
}
export function handleGetItem(string){
  return {
    type: GET_INDIVIDUAL_ITEM,
    itemNumber: string
  }
}
export function handleUpdateItem(obj){
  return {
    type: UPDATE_INDIVIDUAL_ITEM,
    item: obj
  }
}
