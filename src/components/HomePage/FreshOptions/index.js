import React from 'react';
import Div from 'shared/Div';
import RotatingMasterBanner from 'components/RotatingMasterBanner';

// -----
const funcC0mp = (props) =>{
  return (
    <Div >

      <RotatingMasterBanner
        rotatingBannerArray = {props.rotatingBannerArray}
        promoObject = {props.promoObject}
        onGetRotatingBanner = {props.onGetRotatingBanner}
        fromCategory = {"newest"}
        getUnique = "Homepage.featured"
      />
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
