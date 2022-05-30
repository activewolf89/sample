/*
 *
 * Shop actions
 *
 */

import {
  DEFAULT_ACTION,
  TOGGLE_FILTER,
  TOGGLE_FILTER_DETAIL,
  FETCH_PRODUCTS,
  LOAD_PRODUCTS_SUCCESSFUL,
  SAVE_SEARCH_QUERY,
  PRODUCTS_LOADED_FAILED,
  LOAD_PRODUCTS_WAITING,
  EXTEND_PRODUCT,
  REORGANISE_PRODUCTS,
  RESET_VIEW,
  ALL_PRODUCTS_LOADED,
  LOAD_ITEM_NUMBERS,
  INITIATE_LOAD,
  LOAD_ITEM_NUMBERS_SUCCESS,
  UPDATE_EXACT_PATH,
  ALTERNATE_SHOW_ITEM_LIST,
  PULL_SPECIFIC_ITEM_INFO,
  SPECIFIC_ITEMS,
  ADJUST_MORE_FILTERS,
  OPEN_FILTER_QUESTION
} from './constants';
export function handleAdjustMoreFilters(){
  return {
    type: ADJUST_MORE_FILTERS
  }
}
export function handleOpenFilterQuestion(currentOpen){
  return {
    type: OPEN_FILTER_QUESTION,
    currentOpen: currentOpen
  }
}
export function handleToggleSearchByItem(){
  return{
    type: ALTERNATE_SHOW_ITEM_LIST
  }
}
export function PullSpecificInfo(e){
  return {
    type: PULL_SPECIFIC_ITEM_INFO,
    itemArrayString: e.split(',')
  }
}
export function loadSpecificItems(items){
  return {
    type: SPECIFIC_ITEMS,
    items: items
  }
}
export function handleLoadItemNumbers(){
  return {
    type: LOAD_ITEM_NUMBERS
  }
}
export function updateExactPath(path){
  return {
    type: UPDATE_EXACT_PATH,
    path: path
  }
}
export function searchByItemLoaded(arrayOfItemNumbers){
  return {
    type: LOAD_ITEM_NUMBERS_SUCCESS,
    arrayOfItemNumbers: arrayOfItemNumbers
  }
}
export function handleResetView(){
  return {
    type:RESET_VIEW,
  }
}
export function initiateLoading(){
  return {
    type: INITIATE_LOAD
  }
}
export function handleReorganizeProducts(catId,search){
  return {
    type: REORGANISE_PRODUCTS,
    catId: catId,
    search: search,
  }
}
export function handleExtendProduct(evt){
  return {
    type: EXTEND_PRODUCT,
    evt: evt
  }
}
export function allProductsFinished(products,catId,search){

  return {
    type: ALL_PRODUCTS_LOADED,
    products: products,
    catId: catId,
    search: search,

  }
}
export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function toggleFilter(evt) {
  return {
    type: TOGGLE_FILTER,
    evt:evt
  };
}

export function handleToggleDetail(evt,evt1) {

  return {
    type: TOGGLE_FILTER_DETAIL,
    evt: evt,
    evt1: evt1
  };
}
export function saveSearchQuery(evt){
  return {
    type: SAVE_SEARCH_QUERY,
    searchQuery: evt
  };
}
export function productsFailed(){
  return {
    type: PRODUCTS_LOADED_FAILED
  }
}
export function fetchProducts(history,revealedAmount,reset,promoObject) {
  return {
    type: FETCH_PRODUCTS,
    history:history,
    promoObject: promoObject,
    revealedAmount: revealedAmount,
    reset: reset
  };
}
export function productsLoading(reset){
  return {
    type: LOAD_PRODUCTS_WAITING,
    reset: reset
  }
}
export function handleProductsLoading(){
  return {
    type: LOAD_PRODUCTS_WAITING
  }
}
export function productsLoaded(obj,search){
  return {
    type: LOAD_PRODUCTS_SUCCESSFUL,
    products: obj.returnedItems,
    search: search,
    totalCount: obj.totalCount,
  }
}
