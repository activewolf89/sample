import { createSelector } from 'reselect';

const selectShopDomain = (state) => state.get('ShopNew');

 const masterProductArray = () => createSelector(
   selectShopDomain,
   (substate) => substate.get('masterProductArray').toJS()
 )
 const makeSelectRevealedAmount = () => createSelector(
   selectShopDomain,
   (substate) => substate.get(`revealedAmount`)
 )
 const makeSelectTotalCount = () => createSelector(
   selectShopDomain,
   (substrate) => substrate.get('totalCount')
 )
 const makeSelectSpecificItems = () => createSelector(
   selectShopDomain,
   (substrate) => substrate.get('specificItems')

 )
 const makeSelectMoreFilters = () => createSelector(
   selectShopDomain,
   (substrate) => substrate.get('moreFilters')
 )
 const makeSelectLoading = () => createSelector(
   selectShopDomain,
   (substrate) => substrate.get('loading')
 )
 const makeSelectItemKeys = () => createSelector(
   selectShopDomain,
   (substrate) => substrate.get('ItemKeys').toJS()
 )
 const makeSelectSearchByItem = () => createSelector(
   selectShopDomain,
   (substrate) => substrate.get('searchByItem')
 )
 const makeSelectPath = () => createSelector(
   selectShopDomain,
   (substrate) => substrate.get('exactPath')
 )
 const makeSelectCurrentOpen = ()=> createSelector(
   selectShopDomain,
   (substrate) => substrate.get('currentOpen')
 )
export {
  makeSelectMoreFilters,
  makeSelectCurrentOpen,
  makeSelectSpecificItems,
  makeSelectPath,
  makeSelectSearchByItem,
  makeSelectItemKeys,
  makeSelectLoading,
  masterProductArray,
  makeSelectTotalCount,
  makeSelectRevealedAmount
};
