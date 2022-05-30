
import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';
import CookieAmount from 'containers/App/HelperFunctions/CookieAmount';
import NoWishlistItems from './NoWishlistItems';
import LoadedItems from './LoadedItems';
import LoadingItems from './LoadingItems';
import TextPrompt from './TextPrompt';
//shared

class WishlistItems extends React.Component {

  render() {
    return(
      <Div backgroundColor="white" color="black" display="flex" justifyContent="space-around"  padding="40px 0">
        {CookieAmount() < 1 ? <NoWishlistItems />:
        this.props.wishlistItems.length === 0 || CookieAmount() !== this.props.wishlistItems.length ?
          <LoadingItems props={this.props} loadItems={this.props.onLoadWishlistItems} />:
          <Div  display="flex" alignItems="center" maxWidth="1200px" justifyContent='space-around' width="100%">
            <LoadedItems
              userProfile = {props.userProfile}
              onAddToWishlist = {this.props.onAddToWishlist}
              history={this.props.history}
              wishlistItems = {this.props.wishlistItems}
              onWishlistClick = {this.props.onWishlistClick}

            />
            <TextPrompt />
          </Div>
        }
      </Div>
    )
  }
}
// -----
WishlistItems.propTypes = {
  wishlistItems: PropTypes.array.isRequired,
  onLoadWishlistItems: PropTypes.func.isRequired,
  onAddToWishlist: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}
export default WishlistItems;
