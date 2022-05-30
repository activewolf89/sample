import React from 'react';
import PropTypes from 'prop-types';

//shared
import Div from 'shared/Div';
import FontAwesome from 'react-fontawesome';
import ProductArray from 'components/ShopDetailsMaster/ProductArray'
import Title from 'shared/Title';
import NoItemsFound from 'containers/ShopNew/NoItemsFound';
//------



const ProductSection = (props) =>{
  return (
    <Div  margin='10px 0'   height={props.products.length === 0 ? "60vh":"auto"} width='100vw' maxWidth='2000px'  >
      {
        props.products.length > 0 ?
          <Div >
            <ProductArray
              userProfile = {props.userProfile}
              totalCount = {props.totalCount}
              onViewDetails = {props.onViewDetails}
              onAddToWishlist = {props.onAddToWishlist}
              onContactClick = {props.onContactClick}
              onExtendProduct = {props.onExtendProduct}
              revealedAmount = {props.revealedAmount}
              products = {props.products}
              history = {props.history}
              rootString = {props.rootString}
              onShowCert = {props.onShowCert}
              onFetchProducts = {props.onFetchProducts}
            />
            {
              (props.totalCount > props.revealedAmount) &&
              <Div themed padding="10px" height='100px' alignItems="center" flexDirection="column" display="flex" >
                <FontAwesome name="spinner"  spin size="lg" />
                <Title underline>
                  Loading...
                </Title>
              </Div>
            }
          </Div>:
          <NoItemsFound
            onContactClick = {props.onContactClick}
            history={props.history}
          />
      }

    </Div>
  )
}
ProductSection.propTypes = {
  onFetchProducts: PropTypes.func.isRequired,
  onExtendProduct: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
}
export default ProductSection;
