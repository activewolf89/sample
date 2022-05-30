import React from 'react';
import Div from 'shared/Div';
import CenterRotatingImage from './CenterRotatingImage';

// -----
const CenterImage = (props) =>{
  return (
    <Div  onMouseEnter={()=>{!props.isOpen && props.onClickableImage()}}  width="320px" height="320px" borderRadius="50%" zIndex="3" transform="translate(-50%, -50%)" left="50%" top="50%" position="absolute" >
      <CenterRotatingImage
        highlightedProduct = {props.highlightedProduct}
      />
    </Div>
  )
}
CenterImage.propTypes = {
}
export default CenterImage;
