import React from 'react';
import Div from 'shared/Div';


// -----
const CenterImage = (props) =>{
  return (
    <Div  onClick={props.onClickableImage} backgroundColor="white" width="300px" height="300px" borderRadius="50%" zIndex="3" transform="translate(-50%, -50%)" left="50%" top="50%" position="absolute" >

    </Div>
  )
}
CenterImage.propTypes = {
}
export default CenterImage;
