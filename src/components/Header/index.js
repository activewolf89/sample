/**
*
* Header
*
*/

import React from 'react';

import PropTypes from 'prop-types';
//shared --
import Div from 'shared/Div';
import NavigationDetail from './MasterHeader/NavigationDetail';
import { withBreakpoints  } from 'react-breakpoints'


class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hoveredOn: '',
      clickedOn:'',
      withinBool: false
    }
    this.handleTravelTo = this.handleTravelTo.bind(this)
    this.handleTravelToClicked = this.handleTravelToClicked.bind(this)
  }

  handleTravelToClicked = function(key){
    this.setState({
        clickedOn:key,
        hoveredOn: ''
    })
  }
  handleTravelTo = function(key){
    if(key === 'leave'){
      this.setState({
          clickedOn:null,

      })
    } else {
      if(this.state.clickedOn !== key){
        this.setState({
          hoveredOn: key,
        })
      }
    }
  }

  render() {
    return (
        <Div position='sticky' top='0px' zIndex='100' >
          <NavigationDetail
            checkoutString = {this.props.checkoutString}
            eventsChecklist = {this.props.eventsChecklist}
            primaryCategoryChoices = {this.props.primaryCategoryChoices}
            onSaleToggle = {this.props.onSaleToggle}
            onWishlistClick = {this.props.onWishlistClick}
            onDisablePromo = {this.props.onDisablePromo}
            promoObject = {this.props.promoObject}
            onLogOut = {this.props.onLogOut}
            clearBackendWishlist = {this.props.clearBackendWishlist}
            userProfile = {this.props.userProfile}
            history = {this.props.history}
            knowledgeArray = {this.props.knowledgeArray}
            travelTo = {this.handleTravelTo}
            onFaqClick = {this.props.onFaqClick}
            faqObject={this.props.faqObject}
            onHamburgerClick = {this.props.onHamburgerClick}
            categoryObjects = {this.props.categoryObjects}
            onSaleClick = {this.props.onSaleClick}
            wishlistItems = {this.props.wishlistItems}
            onContactClick={this.props.onContactClick}
            searchableCategoryObject = {this.props.searchableCategoryObject}
            navigationArray = {this.props.navigationArray}
            onNavigationClick = {this.props.onNavigationClick}
            isHamburgerOpen = {this.props.isHamburgerOpen}
            navigationObject = {this.props.navigationObject}
            navigationDetailClick = {this.props.navigationDetailClick}
            isNavigationMobileClick = {this.props.isNavigationMobileClick}
            onSearchClick = {this.props.onSearchClick}
            isSearch = {this.props.isSearch}
            contactString = {this.props.contactString}
            onViewDetails = {this.props.onViewDetails}
            isOnShopToggle = {this.props.isOnShopToggle}
            onShopClick = {this.props.onShopClick}
            onSaleObject = {this.props.onSaleObject}
            isOnSaleToggle={this.props.isOnSaleToggle}
            isReachToggle = {this.props.isReachToggle}
            onLoadWishlistItems = {this.props.onLoadWishlistItems}
            onAddToWishlist = {this.props.onAddToWishlist}
            onReachClick = {this.props.onReachClick}
            onKnowledgeCenterClick = {this.props.onKnowledgeCenterClick}
            wishListObject = {this.props.wishListObject}
            isKnowledgeToggle = {this.props.isKnowledgeToggle}
          />
        </Div>
    );
  }
}

Header.propTypes = {
  onHoverNavigation: PropTypes.func.isRequired,
  onSearchClick: PropTypes.func.isRequired,
  onHamburgerClosed: PropTypes.func.isRequired,
  navigationArray: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  navigationDetailClick: PropTypes.func.isRequired,
  isNavigationMobileClick: PropTypes.bool.isRequired,
  isHamburgerOpen: PropTypes.bool.isRequired,
  onHamburgerClick: PropTypes.func.isRequired,
  onNavigationClick: PropTypes.func.isRequired,
  onContactClick: PropTypes.func.isRequired
}

export default withBreakpoints(Header)
