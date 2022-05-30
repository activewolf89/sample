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
  INITIATE_LOAD
} from './constants';

export function handleResetView(catId){
  return {
    type:RESET_VIEW,
    catId: catId
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
export function fetchProducts(category,search,isTreasureChest,isFilterAlsoByCategory) {
  return {
    type: FETCH_PRODUCTS,
    category:category,
    search: search,
    isTreasureChest: isTreasureChest,
    isFilterAlsoByCategory: isFilterAlsoByCategory
  };
}
export function productsLoading(){
  return {
    type: LOAD_PRODUCTS_WAITING
  }
}
export function handleProductsLoading(){
  return {
    type: LOAD_PRODUCTS_WAITING
  }
}
export function productsLoaded(products,catId,search){

  return {
    type: LOAD_PRODUCTS_SUCCESSFUL,
    products: products,
    catId: catId,
    search: search,

  }
}
