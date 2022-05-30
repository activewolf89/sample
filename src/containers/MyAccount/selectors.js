import { createSelector } from 'reselect';
const selectMyAccountDomain = (state) => state.get('myAccount');

/**
 * Other specific selectors
 */
 const makeSelectHaventLoggedInYet = () => createSelector(
   selectMyAccountDomain,
   (substate) => substate.get('haventLoggedInYet')

 )
 const makeSelectRegisterInfo = () => createSelector(
   selectMyAccountDomain,
   (substate) => substate.get('registerInfo').toJS()
 );
 const makeSelectLoginInfo = () => createSelector(
   selectMyAccountDomain,
   (substate) => substate.get('loginInfo').toJS()
 );
 const makeSelectUserToken = ()=> createSelector(
   selectMyAccountDomain,
   (substate) => substate.get('userToken')
 )
 const makeSelectUserProfile = ()=> createSelector(
   selectMyAccountDomain,
   (substate) => substate.get('userProfile').toJS()

 )
const makeSelectServerErrors = () => createSelector(
  selectMyAccountDomain,
  (substate) => substate.get('serverErrors').toJS()
)
const makeSelectRequestPasswordReset = ()=> createSelector(
  selectMyAccountDomain,
  (substate) => substate.get('requestPasswordReset')
)
const makeSelectRequestPasswordSuccess = ()=> createSelector(
  selectMyAccountDomain,
  (substate) => substate.get('requestPasswordSuccess')
)

export {
  makeSelectHaventLoggedInYet,
  makeSelectRequestPasswordSuccess,
  makeSelectRequestPasswordReset,
  makeSelectServerErrors,
  makeSelectUserProfile,
  makeSelectLoginInfo,
  makeSelectRegisterInfo,
  makeSelectUserToken
};
