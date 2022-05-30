/*
 *
 * Checkout reducer
 *
 */
import {fromJS} from 'immutable';
import AddToCheckout from 'containers/App/HelperFunctions/AddToCheckout';
import GenerateShippingEstimate from 'containers/Checkout/Helpers/GenerateShippingEstimate'
import GenerateAvailabilityDay from 'containers/Checkout/Helpers/GenerateAvailabilityDay';

import {
LOAD_INVENTORY,
HANDLE_RESET_VIEW,
REDIRECT_STRIPE_CART,
HANDLE_REMOVE_ITEM_CART,
CREATE_PENDING_SOLD,
HANDLE_CHOICE,
INPUT_CHANGE,
HANDLE_TOGGLE,
HANDLE_CALENDAR_CHANGE,
TOGGLE_LOADING,
UPDATE_CHECKED_SETTINGS

} from './constants';

var RemoveItemFromCart = function(ArrayOfItems,ItemKey){
  var newArray = []
  ArrayOfItems.forEach((i,idx,arr)=>{
    if(i.ItemKey !== ItemKey){
      newArray.push(i)
    }
  })
  return fromJS(newArray)
}

const initialState = fromJS(
  {
    pullCityState: false,
    triggerCalendar: false,
    triggerClock: false,
    inventoryList: [],
    stripeKey: false,
    hasInventoryPulled: false,
    loading: false,
    customerInfo: {
      choice: {title: "Delivery Method", value:'',passed:false,active: true,canEdit: true},
      logistics: {
        choices:{
          shipping: {
            giftWrap:{title:"Gift Wrap",value:false,error:"",triggered: false},
            firstName:{title:"First Name",value:"",error:"",triggered: false},
            lastName:{title:"Last Name",value:"",error:"",triggered: false},
            comment:{title:"Comments",value:"",error:"",triggered: false},
            address1: {title:"Address1",value:"",error:"",triggered: false},
            address2: {title:"Address2",value:"",error:"",triggered: false},
            zipCode: {title:"Zip Code",value:"",error:"",triggered: false},
            city: {title:"City",value:"",error:"",triggered: false},
            state:{title:"State",value:"",error:"",triggered: false},
            receivedDay: {title:"Delivery Date",value:GenerateShippingEstimate(),error:"Please Enter Day",triggered: false},
            passed: false,
            error: ""
          },
          pickup: {
            giftWrap:{title:"Gift Wrap",value:false,error:"",triggered: false},
            firstName:{title:"First Name",value:"",error:"",triggered: false},
            lastName:{title:"Last Name",value:"",error:"",triggered: false},
            comment:{title:"Comments",value:"",error:"",triggered: false},
            receivedDay:{title:"Appointment Date",value:GenerateAvailabilityDay(),error:"",triggered: false},
            receivedTime: {title:"Appointment Time",value:"11AM",error:"",triggered: false},
            passed: false,
            error: ""

          },
        },
      passed:false,
      active: false,
      canEdit: false
    },
      confirmation: {taxableRate:'', value:'',passed:false,active: false,canEdit: false},
    }
  }
);

function CheckoutReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CHECKED_SETTINGS:
    if(action.custInfo.passed){
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const {rate} = action.custInfo.salesTaxObject;
      if(action.avoidGoingToConfirmation){

        return state
        .setIn(['customerInfo','confirmation','taxableRate'],rate)
        .set('pullCityState',false)
        .set('loading',false)
        .setIn(['customerInfo','logistics','choices',state.getIn(['customerInfo','choice','value'])],fromJS(action.custInfo))
      } else {

      return state
      .setIn(['customerInfo','confirmation','taxableRate'],rate)
      .set('pullCityState',false)
      .setIn(['customerInfo','choice','active'],false)
      .setIn(['customerInfo','logistics','active'],false)
      .setIn(['customerInfo','confirmation','active'],true)
      .set('loading',false)
      .setIn(['customerInfo','logistics','choices',state.getIn(['customerInfo','choice','value'])],fromJS(action.custInfo))
    }
    } else {
      return state
      .set('pullCityState',false)
      .set('loading',false)
      .setIn(['customerInfo','logistics','choices',state.getIn(['customerInfo','choice','value'])],fromJS(action.custInfo))
    }
    case TOGGLE_LOADING:
    return state.set('loading',!state.get('loading'))
    case HANDLE_CALENDAR_CHANGE:
    const {time} = action;
    if(time){
      return state
      .set('triggerClock',!state.get('triggerClock'))
      .set('triggerCalendar',false)
    } else {
      return state
      .set('triggerCalendar',!state.get('triggerCalendar'))
      .set('triggerClock',false)
    }
    case HANDLE_TOGGLE:
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const {name} = action;
    var confirmation = false;
    var logistics = false;
    var choice = false;

      if(name === 'logistics'){
        logistics = true;
      } else if(name === "confirmation"){
        confirmation = true;
      } else {
        choice = true;
      }
    return state
    .setIn(['customerInfo','choice','active'],choice)
    .setIn(['customerInfo','logistics','active'],logistics)
    .setIn(['customerInfo','confirmation','active'],confirmation);
    case INPUT_CHANGE:
    var {choiceKey,specificKey,value} = action
     logistics = state.getIn(['customerInfo','logistics']).toJS();
    var triggerCityState = false;
      if(specificKey === "zipCode" && value.length === 5){
        triggerCityState = true

      }
      logistics.choices[choiceKey][specificKey].value = value;
      if(triggerCityState){
        return state
        .setIn(['customerInfo','logistics'],fromJS(logistics))
        .set('pullCityState',true)
      } else {

        return state
        .set('pullCityState',false)
        .setIn(['customerInfo','logistics'],fromJS(logistics))
      }
    case HANDLE_CHOICE:
    return state
    .setIn(['customerInfo','logistics','passed'],true)
    .setIn(['customerInfo','logistics','active'],true)
    .setIn(['customerInfo','logistics','canEdit'],true)
    .setIn(['customerInfo','choice','value'],action.choice)
    .setIn(['customerInfo','choice','passed'],true)
    .setIn(['customerInfo','choice','active'],false)
    .setIn(['customerInfo','choice','canEdit'],true);

    case CREATE_PENDING_SOLD:
    AddToCheckout('remove',true)
    return state
    .set('inventoryList',fromJS([]))
    .set('stripeKey',false)
    .set('hasInventoryPulled',false);
    case REDIRECT_STRIPE_CART:
    return state.set('stripeKey', action.str)
    case HANDLE_REMOVE_ITEM_CART:
    //remove key from inventory list
    return state.set('inventoryList',RemoveItemFromCart(state.get('inventoryList').toJS(),action.itemKey));
    case HANDLE_RESET_VIEW:
    return state.set('hasInventoryPulled',false);
    case LOAD_INVENTORY:
    return state
    .set('inventoryList',fromJS(action.data.returnedItems))
    .set('hasInventoryPulled',true);

    default:
      return state;

  }
}

export default CheckoutReducer;
