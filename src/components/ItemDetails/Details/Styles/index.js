import React from 'react';
import Div from 'shared/Div';
import RotatingBanner from './RotatingBanner';
// -----
const Styles = (props) =>{

  return (
    <Div >
      <RotatingBanner
        onUnmount = {props.onUnmount}
        similar={props.similar}
        onAddToWishlist = {props.onAddToWishlist}
        history= {props.history}
        onUpdateItem = {props.onUpdateItem}
      />

    </Div>

  )
}
Styles.propTypes = {
}
export default Styles;
