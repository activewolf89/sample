import { createSelector } from 'reselect';

const selectRoute = (state) => state.get('route');
const selectGlobal = (state) => state.get('global');

const makeSelectRotatingBannerArrayTac = () => createSelector(
  selectGlobal,
  (substate) => substate.get('rotatingBannerArrayTac').toJS()
)
const makeSelectEventsChecklist = () => createSelector(
  selectGlobal,
  (substate) => substate.get('eventsChecklist').toJS()

)
const makeSelectDetailHamburger = () => createSelector(
  selectGlobal,
  (substate) => substate.get('isDetailOpen')
)
const makeSelectDailys = () => createSelector(
  selectGlobal,
  (substate) => substate.get('dailys')
)
const makeSelectEarlyClosure = () => createSelector(
  selectGlobal,
  (substate) => substate.get('earlyClosure')
)
const makeSelectOurMessage = () => createSelector(
  selectGlobal,
  (substate) => substate.get('ourMessage')
)
const makeSelectCheckOutCookie = () => createSelector(
  selectGlobal,
  (substate) => substate.get('checkOutCookie')
)
const makeSelectPromo = () => createSelector(
  selectGlobal,
  (substate) => substate.get('promo').toJS()
)
const makeSelectToggle = () => createSelector(
  selectGlobal,
  (substate) => substate.get('toggle')
)
const makeSelectSecondaries = () => createSelector(
  selectGlobal,
  (substate) => substate.get('secondaries')
)

const makeSelectPasswordCheck = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('passwordCheck')
)
const makeSelectWishlistItems = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('wishlistItems').toJS()
)

const makeSelectKnowledgeObject = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('knowledge').toJS()
)
const makeSelectPrimaryCategoryChoices = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('primaryCategoryChoices').toJS()
)
const makeSelectOriginalComment = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('originalComment')
)
const makeSelectOnSaleToggle = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('onSaleToggle')
)
const makeSelectUserData = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('userData')
)
const makeSelectNewPasswordObject = () =>createSelector(
  selectGlobal,
  (globalState) => globalState.get('newPasswordObject').toJS()

)
const makeSelectOnShopToggle = ()=>createSelector(
  selectGlobal,
  (globalState) => globalState.get('onShopToggle')
)
const makeSelectRedirectToAccount = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('redirectToAccount')
)
const makeSelectPasswordCreation = () =>createSelector(
  selectGlobal,
  (globalState) => globalState.get('passwordCreation')

)
const makeSelectFaqObject = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('faqClickObject').toJS()
)
const makeSelectOnSaleObject = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('onSaleObject').toJS()
)
const makeSelectYelpReviewObject = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('yelpReviewObject').toJS()
)
const makeSelectReachToggle = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('reachToggle')
)
const makeSelectKnowledgeToggle = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('knowledgeToggle')
)
const makeSelectDesignerCategories = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('designerCategories').toJS()
)
const makeSelectServiceObject = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('serviceObject').toJS()
)
const makeSelectHighlightedProducts = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('highlightedProducts')
)
const makeSelectCategoryObjects = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('categoryObjects').toJS()
)
const makeSelectSearchableCategoryObjects = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('searchableCategoryObject')
)
const makeSelectRotatingBannerArray = ()=> createSelector(
  selectGlobal,
  (globalState) => globalState.get('rotatingBannerArray').toJS()
)
const makeSelectLoadingRotatingBanner = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loadingRotatingBanner')
)
const makeSelectFaq = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('faq').toJS()
)
const makeSelectGoogleReviewObject = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('googleReviewObject').toJS()

)

const makeSelectSearchItems = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('searchItems').toJS()
)
const makeSelectSearchItemsFrom = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('searchItemsFrom')
)
const makeSelectSearchInput = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('searchInput')
)
const makeSelectReviews = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('googleReviewObject').toJS()

)
const makeSelectIsHover = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('isHover')

)
const makeSelectSearching = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('searching')
)
const makeSelectItemToView = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('itemToView')

)
const makeSelectWishlistObject = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('wishList').toJS()
)
const makeSelectFooterNavigation = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('footerNavigation').toJS()

)
const makeSelectRandomProducts = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('randomProducts').toJS()

)


const makeSelectContactInfo = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('contactInfo').toJS()
);
const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);
const makeSelectHamburger = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('isHamburgerOpen')

)
const makeSelectCategoryValue = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('selectCategoryValue')

)

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading').toJS()
)
const makeSelectNavigationArray = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('navigationDetailArray').toJS()

)

const makeSelectNavigationMobileClick = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('navigationMobileClick')
)
const makeSelectContactForm = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('contactForm')

)
const makeSelectSearch = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('search')

)
const makeSelectHistoryObject = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('historyObject')
)
export {
  makeSelectDetailHamburger,
  makeSelectDailys,
  makeSelectRotatingBannerArrayTac,
  makeSelectCheckOutCookie,
  makeSelectSecondaries,
  makeSelectToggle,
  makeSelectPromo,
  makeSelectEarlyClosure,
makeSelectOurMessage,
makeSelectEventsChecklist,
  makeSelectPrimaryCategoryChoices,
  makeSelectOriginalComment,
  makeSelectUserData,
  makeSelectOnShopToggle,
  makeSelectSearchableCategoryObjects,
  makeSelectRedirectToAccount,
  makeSelectNewPasswordObject,
  makeSelectPasswordCreation,
  makeSelectOnSaleObject,
  makeSelectOnSaleToggle,
  makeSelectKnowledgeToggle,
  makeSelectReachToggle,
  makeSelectKnowledgeObject,
  makeSelectPasswordCheck,
  makeSelectFaqObject,
  makeSelectServiceObject,
  makeSelectRotatingBannerArray,
  makeSelectLoadingRotatingBanner,
  makeSelectCategoryObjects,
  makeSelectFaq,
  makeSelectHighlightedProducts,
  makeSelectReviews,
  makeSelectSearchItems,
  makeSelectSearchItemsFrom,
  makeSelectSearchInput,
  makeSelectItemToView,
  makeSelectWishlistItems,
  makeSelectHistoryObject,
  makeSelectSearch,
  makeSelectFooterNavigation,
  makeSelectIsHover,
  makeSelectYelpReviewObject,
  makeSelectGoogleReviewObject,
  makeSelectRandomProducts,
  makeSelectCategoryValue,
  makeSelectContactInfo,
  makeSelectLoading,
  makeSelectLocation,
  makeSelectHamburger,
  makeSelectNavigationArray,
  makeSelectNavigationMobileClick,
  makeSelectContactForm,
  makeSelectSearching,
  makeSelectDesignerCategories,
  makeSelectWishlistObject
};
