/*
 *
 * Bumper reducer
 *
 */
import {fromJS} from 'immutable';
import filterEvents from 'containers/Bumper/Helpers/filterEvents'
import StoreClosures from 'containers/Bumper/Helpers/StoreClosures';

import {
SWAP_MESSAGE,
SWAP_INDEX,
DISABLE_PROMO,
TOGGLE_BUMPER

} from './constants';
var CheckIfEnd = function(date){
  var EndDate = new Date(date);
  var todayDate = new Date();
  EndDate.setDate(EndDate.getDate() + 1);
  if(todayDate > EndDate){
    return false
  }
  return true;
}
var endDate = "05/25/2020"
var filteredEvents = filterEvents([
  {
    name:"Events",
    picture:false,
    month: "May",
    promo:"20% off our jewelry in May(some exclusions apply)-- free shipping for the Stay-At-Home Order",
    category: "Jewelry",
    shopLink:"/shop",
    learnLink:false,
    contact: {name:"email",title:"Contact Us"},
    start: "03/07/2020",
    end: endDate,
    active: CheckIfEnd(endDate)
  },

])
const initialState = fromJS(
  {
    toggle: window.matchMedia("(max-width: 1550px)").matches ? true : false,
    promo: {link:'/shop?onSale=true',match:false,isPercent:false, active: CheckIfEnd(endDate), name:"Stay-At-Home May", code:"2020", comment:"20% off jewelry For May",justSuggestion: "Free Shipping | 20% Off", value:100,
    itemSearch: {"ItemMfg" : 'mothers-day'}
  },
    earlyClosure: StoreClosures(),
    ourMessage: filteredEvents.length > 0 ? false: true,
    eventsChecklist: {
      events: filteredEvents,
      calculated: false,
      index: 0,
    }
  }
);


function BumperReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_BUMPER:
    return state.set('toggle',!state.get('toggle'))
    case DISABLE_PROMO:
    return state.setIn(['promo','active'],false)
    case SWAP_INDEX:
    return state.setIn(['eventsChecklist','index'],action.number)
    case SWAP_MESSAGE:
    var ourMessage = state.get('ourMessage');
    return state.set('ourMessage',!ourMessage);
    default:
      return state;

  }
}

export default BumperReducer;
