/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { createStructuredSelector } from 'reselect';

//redux
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import { withRouter } from 'react-router';
import reducer from './reducer';
import { push } from 'react-router-redux';
import saga from './saga';
import injectSaga from 'utils/injectSaga';
import MainBody from './MainBody';
import ReactGA from 'react-ga';
import MyAccount from 'containers/MyAccount';
import Helmet from 'shared/Helmet';
import OpenBanner from './OpenBanner';

import {handleShopClick,handleKnowledgeCenterClick,
  handleDetailClick,
  handleStyleChange,
  handleSendHint,
  handleFooterClick,
  handleGetReviews,
  handleCategoryChange,
  handleContactChange,
  handleContactSubmit,
   handleSendEmailConfirmation,
   handleHamburgerClick,
   handleNavigationClick,
   handleNavigationDetailClick,
   handleServiceSubmit,
   handleContactClick,
   handleCalendarClick,
   hamburgerClosed,
   updateCategoryOptions,
   handleWishListObject,
   handleSearchClick,
   handleReachClick,
   handleSearchChange,
   handleRemoveDate,
   handleUpdateHistory,
   handleGetRotatingBanner,
   handleGetHighlightedProducts,
   handleLoadWishlistItems,
   handleAddToWishlist,
   handleHoverNavigation,
   handleFaqClick,
   handleGetPassword,
   updatePreferredContact,
   handleOnSaleToggle,
   handleInputChange,
   handleCheckToken,
   handleResetPassword,
   pullCustomerData,
   updateUserPassword,
   clearBackendWishlist,
   handleTimeChange,
   loadSecondaries,
   loadInitials,
   handleSwapMessage
 } from './actions';
   import {
     handleUpdateItem
   } from 'containers/Item/actions';
   import {
     handleLogOut,
     handleAttemptLogin
   } from 'containers/MyAccount/actions';
   import {
     handleToggleDetail,
     PullSpecificInfo
   } from 'containers/ShopNew/actions';
import {
  makeSelectCheckOutCookie,
  makeSelectSecondaries,
  makeSelectEventsChecklist,
  makeSelectOriginalComment,
  makeSelectUserData,
  makeSelectSearchableCategoryObjects,
  makeSelectRedirectToAccount,
  makeSelectNewPasswordObject,
  makeSelectPasswordCreation,
  makeSelectOnSaleObject,
  makeSelectReachToggle,
  makeSelectPasswordCheck,
  makeSelectFaqObject,
  makeSelectServiceObject,
  makeSelectLoadingRotatingBanner,
  makeSelectCategoryObjects,
  makeSelectSearchItems,
  makeSelectSearchItemsFrom,
  makeSelectSearchInput,
  makeSelectSearching,
  makeSelectWishlistItems,
  makeSelectFooterNavigation,
  makeSelectYelpReviewObject,
  makeSelectHighlightedProducts,
  makeSelectGoogleReviewObject,
  makeSelectCategoryValue,
  makeSelectContactInfo,
  makeSelectContactForm,
  makeSelectHamburger,
  makeSelectPrimaryCategoryChoices,
  makeSelectNavigationArray,
  makeSelectItemToView,
  makeSelectNavigationMobileClick,
  makeSelectIsHover,
  makeSelectLoading,
  makeSelectSearch,
  makeSelectKnowledgeToggle,
  makeSelectOnSaleToggle,
  makeSelectFaq,
  makeSelectKnowledgeObject,
  makeSelectRotatingBannerArray,
  makeSelectRotatingBannerArrayTac,
  makeSelectOnShopToggle,
  makeSelectDailys,
  makeSelectDetailHamburger,
makeSelectWishlistObject} from './selectors';
import {
  makeSelectHaventLoggedInYet,
  makeSelectUserProfile
} from 'containers/MyAccount/selectors'
import {
  makeSelectSpecificItems,
} from 'containers/ShopNew/selectors'
import {
  makeSelectPromo
} from 'containers/Bumper/selectors';
import {
  handleDisablePromo
} from 'containers/Bumper/actions'
//engagement
import Div from 'shared/Div';
import asyncComponent from 'components/AsyncComponent';
import Header from 'components/Header';
import Footer from 'components/Footer';

const AsyncHamburger = asyncComponent(() => import("components/Hamburger"));

const AsyncAppModal1 = asyncComponent(() => import("components/App/AppModal1"));

function initializeReactGA() {
  ReactGA.initialize('UA-153608835-1');
  ReactGA.pageview('/homepage');
}
// Wrap the rendering in a function:
//

export class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      trigger: false,
      triedPassword:'',
      originalPathname: props.history.location.pathname,
      separateIsDetailHamburgerOpen: false
    }
    this.handleTestPassword = this.handleTestPassword.bind(this);
    this.handleSeparateDetailHamburgerOpen = this.handleSeparateDetailHamburgerOpen.bind(this)
  }
  handleSeparateDetailHamburgerOpen = function(){
    this.setState({
      separateIsDetailHamburgerOpen: !this.state.separateIsDetailHamburgerOpen
    })

  }
  handleTestPassword = function(){
    var test = prompt("What's the password?");
    this.setState({triedPassword: test})
    this.props.handleGetPassword(test)
  }


  render(){
    return (
      <Div position='relative' >
        <Helmet
          title="Home"
          name="Home"
          href="/"
          content="Seattle's favorite engagement ring shop in the heart of Pioneer Square next to the Seahawks Stadiums.  Discover made to order rings with lab, earth diamonds, wedding-bands, and make a wishlist for anniversary pieces such as diamond earrings, necklaces, and bracelets"
        />
        <Header
          dailys = {this.props.dailys}
          checkoutString = {this.props.checkoutString}
          eventsChecklist = {this.props.eventsChecklist}
          primaryCategoryChoices = {this.props.primaryCategoryChoices}
          onViewDetails = {this.props.handleUpdateItem}
          isOnShopToggle = {this.props.isOnShopToggle}
          onShopClick = {this.props.handleShopClick}
          userProfile = {this.props.userProfile}
          categoryObjects = {this.props.categoryObjects}
          onSaleObject = {this.props.onSaleObject}
          onSaleClick = {this.props.handleOnSaleToggle}
          isOnSaleToggle={this.props.isOnSaleToggle}
          knowledgeArray={this.props.knowledgeArray}
          isReachToggle = {this.props.isReachToggle}
          onContactClick = {this.props.handleContactClick}
          wishlistItems = {this.props.wishlistItems}
          onLoadWishlistItems = {this.props.handleLoadWishlistItems}
          onAddToWishlist = {this.props.handleAddToWishlist}
          history={this.props.history}
          onWishlistClick = {this.props.handleWishListObject}
          onReachClick = {this.props.handleReachClick}
          onKnowledgeCenterClick = {this.props.handleKnowledgeCenterClick}
          wishListObject = {this.props.wishListObject}
          isKnowledgeToggle = {this.props.isKnowledgeToggle}
          onSaleToggle = {this.props.handleOnSaleToggle}
          onDisablePromo = {this.props.handleDisablePromo}
          promoObject = {this.props.promoObject}
          clearBackendWishlist = {this.props.clearBackendWishlist}
          onLogOut = {this.props.handleLogOut}
          searchableCategoryObject = {this.props.searchableCategoryObject}
          faqObject={this.props.faqObject}
          isHover = {this.props.isHover}
          onNavigationClick = {this.props.handleNavigationClick}
          navigationArray = {this.props.navigationArray}
          navigationDetailClick = {this.props.handleNavigationDetailClick}
          isNavigationMobileClick = {this.props.isNavigationMobileClick}
          isHamburgerOpen = {this.props.isHamburgerOpen}
          onHamburgerClick = {this.props.handleHamburgerClick}
          onHamburgerClosed = {this.props.hamburgerClosed}
          onSearchClick ={this.props.handleSearchClick}
          isSearch = {this.props.isSearch}
          onFaqClick = {this.props.handleFaqClick}
          onHoverNavigation = {this.props.handleHoverNavigation}
          contactString = {this.props.contactString}
        />


        <MainBody
          secondaries = {this.props.secondaries}
          onSwapIndex = {this.props.handleSwapMessage}
          eventsChecklist = {this.props.eventsChecklist}
          promoObject = {this.props.promoObject}
          categoryObjects = {this.props.categoryObjects}
          rotatingBannerArray={this.props.rotatingBannerArray}
          rotatingBannerArrayTac={this.props.rotatingBannerArrayTac}
          isRotatingBannerLoading={this.props.isRotatingBannerLoading}
          googleReviewObject={this.props.googleReviewObject}
          yelpReviewObject={this.props.yelpReviewObject}
          onContactClick = {this.props.handleContactClick}
          onCategoryChange = {this.props.handleCategoryChange}
          selectCategoryValue={this.props.selectCategoryValue}
          history={this.props.history}
          highlightedProduct={this.props.highlightedObjects}
          onGetHighlightedProducts = {this.props.handleGetHighlightedProducts}
          onGetRotatingBanner={this.props.handleGetRotatingBanner}
          faqObject={this.props.faqObject}
          onFaqClick = {this.props.handleFaqClick}
          onViewDetails = {this.props.handleUpdateItem}
          isOnShopToggle = {this.props.isOnShopToggle}
          onShopClick = {this.props.handleShopClick}
          userProfile = {this.props.userProfile}
          onSaleObject = {this.props.onSaleObject}
          onSaleClick = {this.props.handleOnSaleToggle}
          isOnSaleToggle={this.props.isOnSaleToggle}
          knowledgeArray={this.props.knowledgeArray}
          isReachToggle = {this.props.isReachToggle}
          wishlistItems = {this.props.wishlistItems}
          onLoadWishlistItems = {this.props.handleLoadWishlistItems}
          onAddToWishlist = {this.props.handleAddToWishlist}
          onWishlistClick = {this.props.handleWishListObject}
          onReachClick = {this.props.handleReachClick}
          onKnowledgeCenterClick = {this.props.handleKnowledgeCenterClick}
          wishListObject = {this.props.wishListObject}
          isKnowledgeToggle = {this.props.isKnowledgeToggle}
          footerNavigationObject = {this.props.footerNavigationObject}
          onFooterClick = {this.props.handleFooterClick}
        />
        <Div >

          <Footer
            footerNavigationObject = {this.props.footerNavigationObject}
            googleReviewObject = {this.props.googleReviewObject}
            yelpReviewObject = {this.props.yelpReviewObject}
            onContactClick = {this.props.handleContactClick}
            onFooterClick = {this.props.handleFooterClick}
          />
        </Div>
      </Div>
        );
        }
        }

export function mapDispatchToProps(dispatch){
  return {
    loadInitials: () => dispatch(loadInitials()),
    handleSwapMessage: (e) => dispatch(handleSwapMessage(e)),
    loadSecondaries: () => dispatch(loadSecondaries()),
    handleDisablePromo: () => dispatch(handleDisablePromo()),
    clearBackendWishlist: (e) =>dispatch(clearBackendWishlist(e)),
    handleLogOut: () => dispatch(handleLogOut()),
    handleAttemptLogin: (userObj,checkIfDirect,history) => dispatch(handleAttemptLogin(userObj,checkIfDirect,history)),
    PullSpecificInfo: (e) => dispatch(PullSpecificInfo(e)),
    handleUpdateItem: (item)=>{dispatch(handleUpdateItem(item))},
    onPullSessionData: ()=>{dispatch(pullCustomerData())},
    updateUserPassword: (newPassword,email) => dispatch(updateUserPassword(newPassword,email)),
    handleResetPassword: ()=>{dispatch(handleResetPassword())},
    handleInputChange:(objName,name,value)=>{dispatch(handleInputChange(objName,name,value))},
    handleCheckToken: (token) => dispatch(handleCheckToken(token)),
    handleOnSaleToggle: () => dispatch(handleOnSaleToggle()),
    handleShopClick: ()=> dispatch(handleShopClick()),
    handleKnowledgeCenterClick: () => dispatch(handleKnowledgeCenterClick()),
    handleGetPassword: (evt) => dispatch(handleGetPassword(evt)),
    handleStyleChange: (evt) => dispatch(handleStyleChange(evt)),
    updatePreferredContact: (evt) => dispatch(updatePreferredContact(evt)),
    handleFaqClick: (evt) => dispatch(handleFaqClick(evt)),
    handleSendHint: (evt,evt1,evt2) => dispatch(handleSendHint(evt,evt1,evt2)),
    handleGetHighlightedProducts: (evt,evt1) => dispatch(handleGetHighlightedProducts(evt,evt1)),
    handleGetRotatingBanner: (evt,evt1,evt2) => dispatch(handleGetRotatingBanner(evt,evt1,evt2)),
    handleHoverNavigation: (evt) => dispatch(handleHoverNavigation(evt)),
    handleAddToWishlist: (itemNumber,userProfile) => dispatch(handleAddToWishlist(itemNumber,userProfile)),
    handleLoadWishlistItems: (evt) => dispatch(handleLoadWishlistItems(evt)),
    handleToggleDetail: (evt) => dispatch(handleToggleDetail(evt)),
    handleUpdateHistory: (evt,promoObj) => dispatch(handleUpdateHistory(evt,promoObj)),
    handleRemoveDate: (evt) => dispatch(handleRemoveDate(evt)),
    handleWishListObject: () => dispatch(handleWishListObject()),
    handleReachClick: () => dispatch(handleReachClick()),
    updateCategoryOptions: () => dispatch(updateCategoryOptions()),
    hamburgerClosed: (evt) => dispatch(hamburgerClosed(evt)),
    handleGetReviews: () => dispatch(handleGetReviews()),
    handleFooterClick: (evt) => dispatch(handleFooterClick(evt)),
    handleContactChange: (evt,evt1) => dispatch(handleContactChange(evt,evt1)),
    handleCategoryChange: (evt) => dispatch(handleCategoryChange(evt)),
    handleContactSubmit: (evt,evt1,evt2,evt3) => dispatch(handleContactSubmit(evt,evt1,evt2,evt3)),
    handleSendEmailConfirmation: (evt,evt1,itemNumber) => dispatch(handleSendEmailConfirmation(evt,evt1,itemNumber)),
    handleNavigationDirection: (evt) => dispatch(push(evt)),
    handleDetailClick: (evt) => dispatch(handleDetailClick(evt)),
    handleHamburgerClick: (evt) => dispatch(handleHamburgerClick(evt)),
    handleNavigationClick: (category) => dispatch(handleNavigationClick(category)),
    handleNavigationDetailClick: (bool) => dispatch(handleNavigationDetailClick(bool)),
    handleServiceSubmit: (object) => dispatch(handleServiceSubmit(object)),
    handleContactClick: (evt,obj,comment) => dispatch(handleContactClick(evt,obj,comment)),
    handleCalendarClick: (evt) => dispatch(handleCalendarClick(evt)),
    handleTimeChange: (evt,evt1,evt2) => dispatch(handleTimeChange(evt,evt1,evt2)),
    handleSearchClick: () => dispatch(handleSearchClick()),
    handleSearchChange: (string) => dispatch(handleSearchChange(string))
  }
};

const mapStateToProps = createStructuredSelector({
  dailys: makeSelectDailys(),
  isDetailHamburgerOpen: makeSelectDetailHamburger(),
  checkoutString: makeSelectCheckOutCookie(),
  secondaries: makeSelectSecondaries(),
  eventsChecklist: makeSelectEventsChecklist(),
  primaryCategoryChoices: makeSelectPrimaryCategoryChoices(),
  promoObject: makeSelectPromo(),
  haventLoggedInYet: makeSelectHaventLoggedInYet(),
  specificItems: makeSelectSpecificItems(),
  originalComment: makeSelectOriginalComment(),
  userDataBoolean: makeSelectUserData(),
  searchableCategoryObject: makeSelectSearchableCategoryObjects(),
  userProfile: makeSelectUserProfile(),
  isRedirectToAccount: makeSelectRedirectToAccount(),
  newPasswordObject: makeSelectNewPasswordObject(),
  isPasswordCreation: makeSelectPasswordCreation(),
  onSaleObject: makeSelectOnSaleObject(),
  isOnShopToggle: makeSelectOnShopToggle(),
  isOnSaleToggle: makeSelectOnSaleToggle(),
  isKnowledgeToggle: makeSelectKnowledgeToggle(),
  isReachToggle: makeSelectReachToggle(),
  knowledgeArray: makeSelectKnowledgeObject(),
  isPasswordRight: makeSelectPasswordCheck(),
  faqClickObject: makeSelectFaqObject(),
  serviceObject: makeSelectServiceObject(),
  isRotatingBannerLoading: makeSelectLoadingRotatingBanner(),
  categoryObjects: makeSelectCategoryObjects(),
  faqObject: makeSelectFaq(),
  searchInput: makeSelectSearchInput(),
  searchItems: makeSelectSearchItems(),
  searchItemsFrom: makeSelectSearchItemsFrom(),
  isHover: makeSelectIsHover(),
  itemToView: makeSelectItemToView(),
  isSearching: makeSelectSearching(),
  wishlistItems: makeSelectWishlistItems(),
  isSearch: makeSelectSearch(),
  isNavigationToggleOn: makeSelectSearch(),
  highlightedObjects: makeSelectHighlightedProducts(),
  footerNavigationObject: makeSelectFooterNavigation(),
  googleReviewObject: makeSelectGoogleReviewObject(),
  yelpReviewObject: makeSelectYelpReviewObject(),
  selectCategoryValue: makeSelectCategoryValue(),
  isHamburgerOpen: makeSelectHamburger(),
  navigationArray: makeSelectNavigationArray(),
  isNavigationMobileClick: makeSelectNavigationMobileClick(),
  isLoading: makeSelectLoading(),
  contactString: makeSelectContactForm(),
  contactObject: makeSelectContactInfo(),
  wishListObject: makeSelectWishlistObject(),
  rotatingBannerArray: makeSelectRotatingBannerArray(),
  rotatingBannerArrayTac: makeSelectRotatingBannerArrayTac()
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'app', reducer });
const withSaga = injectSaga({ key: 'app', saga });

export default withRouter(compose(
  withConnect,
  withReducer,
  withSaga,
)(App));
