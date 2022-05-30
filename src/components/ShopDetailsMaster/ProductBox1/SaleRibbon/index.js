import React from 'react';
import Div from 'shared/Div';
import RedRibbon from 'images/redRibbonSvg.svg';
require('./testRibbon.css')


const funcC0mp = (props) =>{
  return (
    <Div color='gray' fontWeight='bold' fontStyle='italic'>
      <img src={RedRibbon} style={{color:'maroon',height:'30px',width:'30px'}} alt="sale" />
      {((1 - (props.salePrice/props.retailPrice)).toFixed(1))*100 + "% off"}
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
