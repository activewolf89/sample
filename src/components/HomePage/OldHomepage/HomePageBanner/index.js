import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';
//shared
import TopRotate from 'images/topRotate.jpg';

// -----
const HomePageBanner = (props) =>{
  return (
    <Div  position="relative" height="auto"   backgroundImg={TopRotate} backgroundSize="cover" backgroundRepeat="no-repeat" backgroundPosition="center"  />

  )
}
HomePageBanner.propTypes = {
}
export default HomePageBanner;
