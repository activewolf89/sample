import { createSelector } from 'reselect';
const selectRepairDomain = (state) => state.get('repairServices');

/**
 * Other specific selectors
 */
 const makeSelectToggle = () => createSelector(
   selectRepairDomain,
   (substate) => substate.get('toggleModal')
 );
 const makeSelectName = () => createSelector(
   selectRepairDomain,
   (substate) => substate.get('name')
 );
 const makeSelectPhone = () => createSelector(
   selectRepairDomain,
   (substate) => substate.get('phone')
 );

 const makeSelectEmail = () => createSelector(
   selectRepairDomain,
   (substate) => substate.get('email')
 );


/**
 * Default selector used by Shop
 */



export {
  makeSelectToggle,
  makeSelectName,
  makeSelectPhone,
  makeSelectEmail
};
