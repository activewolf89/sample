import React from 'react';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import ProductBox1 from 'components/ShopDetails/ProductBox1'
import PropTypes from 'prop-types';

// -----
const LoadedListOfItems = (props) =>{
  // searchItems = {props.searchItems} searchItemsFrom = {props.searchItemsFrom}
  return (

    <NoMPUl display="flex" flexWrap="wrap" justifyContent="center" childrenPadding="5px">
      {props.searchItems.map((item,index)=>{
        return (
          <Li key={index} >
            <ProductBox1 product={item} onAddToWishlist = {props.onAddtoWishlist} history={props.history} />
          </Li>
        )
      })}
    </NoMPUl>
  )
}
LoadedListOfItems.propTypes = {
  history: PropTypes.object.isRequired,
  onAddtoWishlist:PropTypes.func.isRequired,
  searchItems: PropTypes.array.isRequired
}
export default LoadedListOfItems;

//
// onAddToWishlist: PropTypes.func.isRequired,
// product: PropTypes.object.isRequired,
// history: PropTypes.object.isRequired
