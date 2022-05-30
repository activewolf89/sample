import React from 'react';
import PropTypes from 'prop-types';
import Div from 'shared/Div';
import JewelryFilter from './JewelryFilter';
class ProductArray extends React.Component {

  render() {
    return(

        <Div >
          <JewelryFilter
            totalCount = {this.props.totalCount}
            userProfile = {this.props.userProfile}
            onViewDetails = {this.props.onViewDetails}
            onContactClick = {this.props.onContactClick}
            products={this.props.products}
            revealedAmount={this.props.revealedAmount}
            onAddToWishlist = {this.props.onAddToWishlist}
            rootString = {this.props.rootString}
            onExtendProduct={this.props.onExtendProduct}
            onFetchProducts = {this.props.onFetchProducts}
            history={this.props.history}
          />
        </Div>


)
}
}
ProductArray.propTypes = {
  revealedAmount:  PropTypes.number.isRequired,
  products: PropTypes.array.isRequired,

}
// -----
export default ProductArray;
