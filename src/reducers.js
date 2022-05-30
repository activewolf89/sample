/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

import globalReducer from 'containers/App/reducer';
import ShopReducer from 'containers/Shop/reducer';
import ShopNewReducer from 'containers/ShopNew/reducer';
import repairServiceReducer from 'containers/RepairServices/reducer';
import ItemReducer from 'containers/Item/reducer';
import MyAccountReducer from 'containers/MyAccount/reducer';
import bumperReducer from 'containers/Bumper/reducer';
import CheckoutReducer from 'containers/Checkout/reducer';

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@5
 *
 */

// Initial routing state
const routeInitialState = fromJS({
  location: null,
});

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        location: action.payload,
      });
    default:
      return state;
  }
}

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
  return combineReducers({
    checkout: CheckoutReducer,
    route: routeReducer,
    bumper: bumperReducer,
    global: globalReducer,
    Shop: ShopReducer,
    ShopNew: ShopNewReducer,
    repairServices: repairServiceReducer,
    Item: ItemReducer,
    myAccount: MyAccountReducer
  });
}
