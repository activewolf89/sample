import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';
//shared
import WishlistOption from './WishlistOption';
import ReachOption from './ReachOption';
import KnowledgeOption from './KnowledgeOption';
import OnShopOption from './OnShopOption';
import OnSaleOption from './OnSaleOption';
import './styles.css';
import styled from 'styled-components';
import HotClicks from './HotClicks';

// -----
const FloatingFooter = (props) =>{
  return (
    <Div display='none'>
      <Div position="fixed" top="80px" right='0' zIndex="100006" width="100%" color="white"  maxHeight='70vh' overflow='auto' >
        <HotClicks
          onWishlistClick = {props.onWishlistClick}
          wishlistItems = {props.wishlistItems}
          onReachClick = {props.onReachClick}
          userProfile = {props.userProfile}

        />
        <Div clear='right' borderTop='1px solid white' >
          <Div >
            <WishlistOption
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
            <KnowledgeOption
              history={props.history}
              knowledgeArray = {props.knowledgeArray}
              onReachClick = {props.onReachClick}
              isKnowledgeToggle = {props.isKnowledgeToggle}
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
          <Div>
            <OnShopOption
              categoryObjects = {props.categoryObjects}
              history={props.history}
              knowledgeArray = {props.knowledgeArray}
              onSaleObject = {props.categoryObjects.onSaleObjects}
              onReachClick = {props.onReachClick}
              isOnSaleToggle = {props.isOnSaleToggle}
              onContactClick = {props.onContactClick}
              isOnShopToggle = {props.isOnShopToggle}
            />
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
