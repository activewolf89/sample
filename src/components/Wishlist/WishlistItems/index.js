
import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';
import CookieAmount from 'containers/App/HelperFunctions/CookieAmount';
import NoWishlistItems from './NoWishlistItems';
import LoadedItems from './LoadedItems';
import LoadingItems from './LoadingItems';
import cookie from 'react-cookies'

//shared

class WishlistItems extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      accessTemporaryWishlist: cookie.loadAll()['accessTemporaryWishlist'] ? true: false
    }
    this.handleTemporaryWishlist = this.handleTemporaryWishlist.bind(this)
  }
  handleTemporaryWishlist = function(){
    var TenYears = new Date(Date.now() + (3600 * 1000 * 24 * 365 * 10));
    cookie.save('accessTemporaryWishlist', true, {expires:TenYears});
    this.setState({
      accessTemporaryWishlist: true
    })
  }
  render() {
    return(
      <Div themed position='relative' backgroundColor="white" color="black" display="flex" justifyContent="space-around"  padding="40px 0">


        {CookieAmount() < 1 ? <NoWishlistItems />:
        this.props.wishlistItems.length === 0 || CookieAmount() !== this.props.wishlistItems.length ?
          <LoadingItems props={this.props} loadItems={this.props.onLoadWishlistItems} />:
          <Div>
            <Div  display="flex" alignItems="center" maxWidth="1600px" justifyContent='space-around' width="100%">
              <LoadedItems
                onViewDetails = {this.props.onViewDetails}
                onWishlistClick = {this.props.onWishlistClick}
                wishlistPage = {this.props.wishlistPage}
                onAddToWishlist = {this.props.onAddToWishlist}
                onContactClick = {this.props.onContactClick}
                history={this.props.history}
                wishlistItems = {this.props.wishlistItems}
                userProfile = {this.props.userProfile}

              />

            </Div>
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
