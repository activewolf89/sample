/*
 *
 * Shop reducer
 *
 */
import {fromJS} from 'immutable';
import {
  SPECIFIC_ITEMS,
  LOAD_PRODUCTS_WAITING,
  LOAD_PRODUCTS_SUCCESSFUL,
  RESET_VIEW,
  ONLY_EXTEND,
  UPDATE_EXACT_PATH,
  ALTERNATE_SHOW_ITEM_LIST,
  LOAD_ITEM_NUMBERS_SUCCESS,
  ADJUST_MORE_FILTERS,
  OPEN_FILTER_QUESTION

} from './constants';

const initialState = fromJS(
  {
  exactPath: "",
  searchByItem: false,
  masterProductArray: [],
  search: "",
  totalCount: null,
  revealedAmount: null,
  loading: true,
  onlyExtend: false,
  ItemKeys: [],
  specificItems: [],
  currentOpen: '',
  moreFilters: false
}
)
function ShopNewReducer(state = initialState, action) {
switch (action.type) {
  case ADJUST_MORE_FILTERS:
  return state.set('moreFilters',!state.get('moreFilters'))
  case OPEN_FILTER_QUESTION:
  return state.set('currentOpen',action.currentOpen);
  case SPECIFIC_ITEMS:
  return state
  .set('specificItems',action.items)
  case UPDATE_EXACT_PATH:
  return state
  .set('exactPath',action.path)
  case ALTERNATE_SHOW_ITEM_LIST:
  return state.set('searchByItem',!state.get('searchByItem'))
  case LOAD_ITEM_NUMBERS_SUCCESS:
  return state
  .set('searchByItem',true)
  .set('ItemKeys',fromJS(action.arrayOfItemNumbers))
  case RESET_VIEW:
  return state
  .set('masterProductArray',fromJS([]))
  .set('totalCount',null)
  .set('search','')
  .set('revealedAmount',null)
  .set('loading',true)
  .set('onlyExtend',false)

  case ONLY_EXTEND:
  return state
  case LOAD_PRODUCTS_WAITING:
  // var masterProductArray = state.get('masterProductArray').toJS();
  var onlyExtend = state.get('onlyExtend')

  return state.set('loading',(onlyExtend ? false:true))
  case LOAD_PRODUCTS_SUCCESSFUL:
    var newArray = state.get('masterProductArray').toJS()
     onlyExtend = state.get('onlyExtend')
  newArray.push.apply(newArray, action.products)

      return state
      .set('onlyExtend',true)
      .set('masterProductArray',fromJS(newArray))
      .set('loading',false)
      .set('search',action.search)
      .set('revealedAmount',newArray.length)
      .set('totalCount',action.totalCount +1)
      default:
      return state
}
}

export default ShopNewReducer;
