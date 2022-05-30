import { createSelector } from 'reselect';
const selectBumperDomain = (state) => state.get('bumper');
const makeSelectEventsChecklist = () => createSelector(
  selectBumperDomain,
  (substate) => substate.get('eventsChecklist').toJS()
)
const makeSelectEarlyClosure = () => createSelector(
  selectBumperDomain,
  (substate) => substate.get('earlyClosure')
)
const makeSelectOurMessage = () => createSelector(
  selectBumperDomain,
  (substate) => substate.get('ourMessage')
)
const makeSelectPromo = () => createSelector(
  selectBumperDomain,
  (substate) => substate.get('promo').toJS()
)
const makeSelectToggle = () => createSelector(
  selectBumperDomain,
  (substate) => substate.get('toggle')
)
export {
  makeSelectToggle,
  makeSelectPromo,
  makeSelectEarlyClosure,
makeSelectOurMessage,
makeSelectEventsChecklist
};
