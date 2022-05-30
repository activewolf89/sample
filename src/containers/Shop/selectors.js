import { createSelector } from 'reselect';

const selectShopDomain = (state) => state.get('Shop');

 const makeSelectFilterOpen = () => createSelector(
   selectShopDomain,
   (substate) => substate.get('isFilterOpen')
 )
 const makeSelectMasterProductObject = () => createSelector(
   selectShopDomain,
   (substate) => substate.get('masterProductObject').toJS()
 )
 const makeSelectSearchPath = () => createSelector(
   selectShopDomain,
   (substate) => substate.get('searchPath')
 )


 const makeSelectToggle = () => createSelector(
   selectShopDomain,
   (substate) => substate.get('filter')
 )
 const makeSelectSearchQuery = () => createSelector(
   selectShopDomain,
   (substate) => substate.get('saveSearchQuery')

 )
const makeSelectShop = () => createSelector(
  selectShopDomain,
  (substate) => substate.toJS()
);
const makeSelectLoading = () => createSelector(
  selectShopDomain,
  (substate) => substate.get('loading')
);
const makeSelectPulledProducts = () => createSelector(
  selectShopDomain,
  (substate) => substate.get('pulledProducts')
)

const makeSelectMasterProducts = () => createSelector(
  selectShopDomain,
  (substate) => substate.get(`masterProducts`).toJS()
)
const makeSelectRevealedAmount = () => createSelector(
  selectShopDomain,
  (substate) => substate.get(`revealAmount`)
)
export {
  makeSelectFilterOpen,
  makeSelectRevealedAmount,
  makeSelectMasterProductObject,
  makeSelectMasterProducts,
  makeSelectSearchPath,
  makeSelectSearchQuery,
  makeSelectPulledProducts,
  selectShopDomain,
  makeSelectShop,
  makeSelectToggle,
  makeSelectLoading,
};
