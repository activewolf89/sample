import React from 'react';
import PropTypes from 'prop-types';

//shared
import Div from 'shared/Div';
import FontAwesome from 'react-fontawesome';
import ProductArray from 'components/ShopDetails/ProductArray'
import Title from 'shared/Title';
//------



const ProductSection = (props) =>{
  return (
    <Div  margin='10px 0' >

      {
        props.products.length > 0 &&
        <Div   >
          <Div>
            <ProductArray
              userProfile = {props.userProfile}
              onViewDetails = {props.onViewDetails}
              onAddToWishlist = {props.onAddToWishlist}
              onContactClick = {props.onContactClick}
              onExtendProduct = {props.onExtendProduct}
              revealedAmount = {props.revealedAmount}
              products = {props.products}
              history = {props.history}
              rootString = {props.rootString}
              onShowCert = {props.onShowCert}
            />
            {
              (props.products.length > props.revealedAmount || !props.loadRest) &&
              <Div themed padding="10px" alignItems="center" flexDirection="column" display="flex" >
                <FontAwesome name="spinner"  spin size="lg" />
                <Title underline>
                  Loading...
                </Title>
              </Div>
            }
          </Div>
        </Div>
      }

    </Div>
  )
}
ProductSection.propTypes = {
  onShowCert: PropTypes.func.isRequired,
  onExtendProduct: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
}
export default ProductSection;
