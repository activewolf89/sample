import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';
//shared
import FilterOption from './FilterOption';
import ReachOption from './ReachOption';
import OnShopOption from './OnShopOption';
import OnSaleOption from './OnSaleOption';
import './styles.css';
import HotClicks from './HotClicks';

// -----
const FloatingFooter = (props) =>{

  // <Div  height='100%'  onClick={()=>{(props.contactString ==='Search' && props.onContactClick('')); props.onHamburgerClick('open')}}>


  return (
    <Div position='relative' >
      <Div>
        <HotClicks
          checkoutString = {props.checkoutString}
          eventsChecklist = {props.eventsChecklist}
          isHamburgerOpen = {props.isHamburgerOpen}
          onHamburgerClick = {props.onHamburgerClick}
          contactString = {props.contactString}
          onLogOut = {props.onLogOut}
          onKnowledgeCenterClick = {props.onKnowledgeCenterClick}
          history={props.history}
          wishlistItems = {props.wishlistItems}
          onReachClick = {props.onReachClick}
          userProfile = {props.userProfile}
          onContactClick = {props.onContactClick}
          clearBackendWishlist = {props.clearBackendWishlist}
          onWishlistClick = {props.onWishlistClick}
          onSaleToggle = {props.onSaleToggle}
        />
        <Div  borderBottom='3px solid gray' position='absolute' maxHeight='60vh' overflowY='auto' >
          <Div >
            <FilterOption
              onViewDetails = {props.onViewDetails}
              userProfile = {props.userProfile}
              wishListObject = {props.wishListObject}
              wishlistItems = {props.wishlistItems}
              onLoadWishlistItems = {props.onLoadWishlistItems}
              onAddToWishlist = {props.onAddToWishlist}
              onContactClick = {props.onContactClick}
              history={props.history}
              onWishlistClick = {props.onWishlistClick}
            />
          </Div>
          <Div>
            <ReachOption
              onReachClick = {props.onReachClick}
              isReachToggle = {props.isReachToggle}
              onContactClick = {props.onContactClick}
            />
          </Div>

          <Div>
            <OnSaleOption
              categoryObjects = {props.categoryObjects}
              history={props.history}
              knowledgeArray = {props.knowledgeArray}
              onSaleObject = {props.categoryObjects.onSaleObjects}
              onReachClick = {props.onReachClick}
              isOnSaleToggle = {props.isOnSaleToggle}
              onContactClick = {props.onContactClick}
            />
          </Div>
          <Div >
            {
              props.isOnSaleToggle &&
              <OnShopOption
                onSaleToggle = {props.onSaleToggle}
                isOnSaleToggle = {props.isOnSaleToggle}
                checkoutString = {props.checkoutString}
                eventsChecklist = {props.eventsChecklist}
                isHamburgerOpen = {props.isHamburgerOpen}
                onHamburgerClick = {props.onHamburgerClick}
                contactString = {props.contactString}
                onLogOut = {props.onLogOut}
                onKnowledgeCenterClick = {props.onKnowledgeCenterClick}
                history={props.history}
                wishlistItems = {props.wishlistItems}
                onReachClick = {props.onReachClick}
                userProfile = {props.userProfile}
                onContactClick = {props.onContactClick}
                clearBackendWishlist = {props.clearBackendWishlist}
                onWishlistClick = {props.onWishlistClick}
                
              />
            }
          </Div>
        </Div>
      </Div>
    </Div>
  )
}
FloatingFooter.propTypes = {
  wishListObject: PropTypes.object.isRequired,
  onWishlistClick: PropTypes.func.isRequired
}
export default FloatingFooter;
