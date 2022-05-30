import { createSelector } from 'reselect';

const selectItemDomain = (state) => state.get('Item');

const makeSelectItem = () => createSelector(
  selectItemDomain,
  (substate) => substate.get('item')
)
const makeSelectRecentlyViewed = () => createSelector(
  selectItemDomain,
  (substate) => substate.get('recentlyViewed')
)
const makeSelectRedirect = () => createSelector(
  selectItemDomain,
  (substate) => substate.get('redirect')
)
const makeSelectMatching = () => createSelector(
  selectItemDomain,
  (substate) => substate.get('matching')
)
const makeSelectSimilar = () => createSelector(
  selectItemDomain,
  (substate) => substate.get('similar')
)
const makeSelectDetailItemObject = () => createSelector(
  selectItemDomain,
  (substate) => substate.get('detailItemObject').toJS()
)
export {
  makeSelectRecentlyViewed,
  makeSelectDetailItemObject,
  makeSelectMatching,
  makeSelectSimilar,
  makeSelectRedirect,
  selectItemDomain,
  makeSelectItem
};
