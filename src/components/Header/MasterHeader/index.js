import React from 'react';
import NavigationDetail from './NavigationDetail';
// -----
const MobileHeader = (props) =>{
  return (
      <NavigationDetail
        primaryCategoryChoices = {props.primaryCategoryChoices}
        navigationArray = {props.navigationArray}
        history = {props.history}
        navigationObject = {props.navigationObject}
        navigationDetailClick = {props.navigationDetailClick}
        isNavigationMobileClick = {props.isNavigationMobileClick}
        onSearchClick = {props.onSearchClick}
        isSearch = {props.isSearch}
        checkoutString = {props.checkoutString}
        eventsChecklist = {props.eventsChecklist}
        isHamburgerOpen = {props.isHamburgerOpen}
        onHamburgerClick = {props.onHamburgerClick}
        contactString = {props.contactString}
        onLogOut = {props.onLogOut}
        userProfile = {props.userProfile}
        onContactClick = {props.onContactClick}
        clearBackendWishlist = {props.clearBackendWishlist}
        onWishlistClick = {props.onWishlistClick}
        onSaleToggle = {props.onSaleToggle}
        onViewDetails = {props.onViewDetails}
        isOnShopToggle = {props.isOnShopToggle}
        onShopClick = {props.onShopClick}
        categoryObjects = {props.categoryObjects}
        onSaleObject = {props.onSaleObject}
        onSaleClick = {props.onSaleClick}
        isOnSaleToggle={props.isOnSaleToggle}
        knowledgeArray={props.knowledgeArray}
        isReachToggle = {props.isReachToggle}
        wishlistItems = {props.wishlistItems}
        onLoadWishlistItems = {props.onLoadWishlistItems}
        onAddToWishlist = {props.onAddToWishlist}
        onReachClick = {props.onReachClick}
        onKnowledgeCenterClick = {props.onKnowledgeCenterClick}
        wishListObject = {props.wishListObject}
        isKnowledgeToggle = {props.isKnowledgeToggle}
      />
      )
}
MobileHeader.propTypes = {
}
export default MobileHeader;
