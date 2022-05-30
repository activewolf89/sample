/*
 *
 * Shop reducer
 *
 */
import {fromJS} from 'immutable';
import UpdateCategoryDropdown from 'containers/Shop/Helpers/UpdateCategoryDropdown.js'
import OrganizeProduct from 'containers/Shop/Helpers/OrganizeProduct.js'
import OrganizeUnlistedProducts from 'containers/Shop/Helpers/OrganizeUnlistedProducts';
import FilterProductBySearch from 'containers/Shop/Helpers/FilterProductBySearch.js'

import {
  DEFAULT_ACTION,
  TOGGLE_FILTER,
  TOGGLE_FILTER_DETAIL,
  LOAD_PRODUCTS_WAITING,
  LOAD_PRODUCTS_SUCCESSFUL,
  PRODUCTS_LOADED_FAILED,
  SAVE_SEARCH_QUERY,
  REORGANISE_PRODUCTS,
  EXTEND_PRODUCT,
  RESET_VIEW,
  ALL_PRODUCTS_LOADED,
  INITIATE_LOAD

} from './constants';

var Immutable = require('immutable');
const initialState = fromJS(
  {
    isFilterOpen: window.matchMedia('(min-width:996px)').matches ? true: false,
    masterProductObject: {

      "140": {
        loadRest: false,
        id: '140',
        title: 'Engagement Rings',
        name: "engagement-rings",
        description: 'All engagement rings displayed are in-stock, ready to view, and can be special ordered in any color or with any centerstone',
        filters: {
          all: [],
          reveal: ['ItemVendorName','itStyle','itMetalType','itMetalColor','itVendorId','itMetalWeight','itLength','itRetailPrice','sort','onSale'],
          active: ''
        },
        products: {
          all: null,
          reveal: null,
        }
      },
      "110": {
        loadRest: false,
        id: '110',
        name: "mens-band",
        title: 'Mens Bands',
        description: 'View our mens band colletion ranging from Japanese Mokume designs & Meteorite, to traditional styles classic throughout time',
        filters: {
          all: [],
          reveal: ['ItemVendorName','itStyle','itMetalType','itMetalColor','itVendorId','itLength','itRetailPrice','sort','onSale'],
          active: ''
        },
        products: {
          all: null,
          reveal: null,
        }
      },
      "115": {
        loadRest: false,
        id: '115',
        name: "ladies-band",
        title: 'Ladies Bands',
        description: 'View our ladies wedding & anniversary bands styled to either match the desired engagement ring exactly, or to stand a part to give a different appearance',
        filters: {
          all: [],
          reveal: ['ItemVendorName','itStyle','itMetalType','itMetalColor','itVendorId','itMetalWeight','itLength','itRetailPrice','sort','onSale'],
          active: ''
        },
        products: {
          all: null,
          reveal: null,
        }
      },
      "190": {
        loadRest: false,
        id: '190',
        name: "diamond",
        title: 'Diamonds',
        description: 'View our diamonds ',
        filters: {
          all: [],
          reveal: ['ItemVendorName','shape','caret','color','clarity','cut','itRetailPrice','lab','onSale'],
          active: ''
        },
        products: {
          all: null,
          reveal: null,
        }
      },
      "150": {
        loadRest: false,
        id: '150',
        name: "earring",
        title: 'Earrings',
        description: 'View our earring ',
        filters: {
          all: [],
          reveal: ['ItemVendorName','itStyle','itMetalType','itMetalColor','itVendorId','itMetalWeight','itLength','itRetailPrice','sort','onSale'],
          active: ''
        },
        products: {
          all: null,
          reveal: null,
        }
      },
      "999": {
        loadRest: false,
        id: '999',
        name: "other",
        title: 'Other',
        description: 'View our other ',
        filters: {
          all: [],
          reveal: ['ItemVendorName','itStyle','itMetalType','itMetalColor','itVendorId','itMetalWeight','itLength','itRetailPrice','sort','onSale'],
          active: ''
        },
        products: {
          all: null,
          reveal: null,
        }
      },
      "170": {
        loadRest: false,
        id: '170',
        name: "bracelet",
        title: 'Bracelets',
        description: 'View our bracelets ',
        filters: {
          all: [],
          reveal: ['ItemVendorName','itStyle','itMetalType','itMetalColor','itVendorId','itMetalWeight','itLength','itRetailPrice','sort','onSale'],
          active: ''
        },
        products: {
          all: null,
          reveal: null,
        }
      },
      "130": {
        loadRest: false,
        id: '130',
        name: "fine-ring",
        title: 'Fine Rings',
        description: 'View our rings ',
        filters: {
          all: [],
          reveal: ['ItemVendorName','itStyle','itMetalType','itMetalColor','itVendorId','itMetalWeight','itLength','itRetailPrice','sort','onSale'],
          active: ''
        },
        products: {
          all: null,
          reveal: null,
        }
      },
      "500": {
        loadRest: false,
        id: '500',
        name: "watch",
        title: 'Watches',
        description: 'View our watch ',
        filters: {
          all: [],
          reveal: ['ItemVendorName','itStyle','itMetalType','itMetalColor','itVendorId','itMetalWeight','itLength','itRetailPrice','sort','onSale'],
          active: ''
        },
        products: {
          all: null,
          reveal: null,
        }
      },
      "165": {
        loadRest: false,
        id: '165',
        name: "necklace",
        title: 'Necklaces',
        description: 'View our necklaces ',
        filters: {
          all: [],
          reveal: ['itStyle','itMetalType','itMetalColor','itVendorId','itMetalWeight','itLength','itRetailPrice','sort','onSale'],
          active: ''
        },
        products: {
          all: null,
          reveal: null,
        }
      },
    },
    filter: true,
    masterProducts: {
      "140":null,
      "110":null,
      "115":null,
    },
    searchPath: null,
    saveSearchQuery: 'initial',
    loading: true,
    revealAmount: 20,
    triggeredRevealMore:4
}
);


function ShopReducer(state = initialState, action) {
  switch (action.type) {

    case INITIATE_LOAD:
    return state
    .set('loading',true)
    case RESET_VIEW:
    return state
    .set('masterProductObject',OrganizeProduct(state.get('masterProductObject'),action.catId.toString(),''))

    case EXTEND_PRODUCT:
    if(action.evt){
      return state.set('revealAmount',action.evt)
    } else {
      return state
      .set('revealAmount',(state.get('revealAmount')+20))

    }
    case SAVE_SEARCH_QUERY:
      return state.get('saveSearchQuery') === 'initial' ? state.set('saveSearchQuery',action.searchQuery):'';
    case TOGGLE_FILTER_DETAIL:
  return state.set('masterProductObject',
  UpdateCategoryDropdown(action.evt,action.evt1,state.get('masterProductObject').toJS())
)
    case TOGGLE_FILTER:
    if(action.evt === true){
      return state.set('isFilterOpen',true);

    }
    else if(action.evt === false){
      return state.set('isFilterOpen',false);

    }
    else {
      return state.set('isFilterOpen',!state.get('isFilterOpen'));

    }
    case LOAD_PRODUCTS_WAITING:
    return state.set('loading',true);
    case DEFAULT_ACTION:
      return state;
      case PRODUCTS_LOADED_FAILED:
      return state
      .set('loading',false)
    case REORGANISE_PRODUCTS:
    if(state.getIn(['masterProductObject',action.catId.toString(),'products','all']) === null){
      return state
    } else {
    return state
    .set('masterProductObject',OrganizeProduct(state.get('masterProductObject'),action.catId.toString(),action.search))
    .set('loading',false)
  }
    case LOAD_PRODUCTS_SUCCESSFUL:
      var products = action.products;
      var test = state.getIn(['masterProductObject',action.catId]);
      if(Immutable.Iterable.isIterable(test) && test.toJS().products.all === null){
        return state
        .set('loading',false)
        .setIn(['masterProductObject',action.catId,'products','all'],fromJS(products))
        .setIn(['masterProductObject',action.catId,'products','reveal'],fromJS(FilterProductBySearch(products,action.search,action.catId)))
      } else {
        return state
        .set('masterProductObject',OrganizeUnlistedProducts(state.get('masterProductObject'),action.catId.toString(),action.search,action.products))
        .set('loading',false)
      }
      case ALL_PRODUCTS_LOADED:
       products = action.products;
      var currentProducts = state.getIn(['masterProductObject',action.catId,'products','reveal']).toJS()
      return state
      .setIn(['masterProductObject',action.catId,'products','all'],fromJS(currentProducts.concat(products)))
      .setIn(['masterProductObject',action.catId,'products','reveal'],fromJS(FilterProductBySearch(products,action.search,action.catId,currentProducts)))
      .setIn(['masterProductObject',action.catId,'loadRest'],true)
    default:
      return state;
  }
}

export default ShopReducer;
