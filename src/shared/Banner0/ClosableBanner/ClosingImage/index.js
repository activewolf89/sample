import React from 'react';
import Div from 'shared/Div';
// -----
const RightImage = (props) =>{
  return (
      <Div display='flex' justifyContent='center' borderTop='1px solid white'>
        <Div  maxWidth="996px" textAlign='center'>
          This is one of our favorites at the store, beautifully designed, easy to wear, and shows off the stone(click the image to explore)
        </Div>
      </Div>
  )
}
RightImage.propTypes = {
}
export default RightImage;
