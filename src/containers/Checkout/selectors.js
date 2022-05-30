import { createSelector } from 'reselect';
const selectCheckoutDomain = (state) => state.get('checkout');


const makeSelectInventoryCheckout = () => createSelector(
  selectCheckoutDomain,
  (substate) => substate.get('inventoryList').toJS()
)
const makeSelectHasInventoryPUlled = () => createSelector(
  selectCheckoutDomain,
  (substate) => substate.get('hasInventoryPulled')
)
const makeSelectStripeKey = () => createSelector(
  selectCheckoutDomain,
  (substate) => substate.get('stripeKey')
)
const makeSelectCustomerInfo = () => createSelector(
  selectCheckoutDomain,
  (substate) => substate.get('customerInfo').toJS()
)
const makeSelectTriggerClock = () => createSelector(
  selectCheckoutDomain,
  (substate) => substate.get('triggerClock')
)
const makeSelectTriggerCalendar = () => createSelector(
  selectCheckoutDomain,
  (substate) => substate.get('triggerCalendar')
)
const makeSelectLoading = () => createSelector(
  selectCheckoutDomain,
  (substate) => substate.get('loading')
)
const makeSelectPullCityState  = () => createSelector(
  selectCheckoutDomain,
  (substate) => substate.get('pullCityState')
)

export {
  makeSelectPullCityState,
  makeSelectLoading,
  makeSelectTriggerClock,
  makeSelectTriggerCalendar,
makeSelectInventoryCheckout,
makeSelectHasInventoryPUlled,
makeSelectCustomerInfo,
makeSelectStripeKey
};
