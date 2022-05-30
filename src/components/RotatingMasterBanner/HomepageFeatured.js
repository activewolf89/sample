import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';
import StyledLink from 'shared/StyledLink'
import Vision360 from 'shared/Vision360';
const DetailBox = (props) =>{



  return (
    <Div  position='relative' >
      <StyledLink to={props.productObject.ItemDirectLink}>
        <Div position='absolute' zIndex='1' width='100%' height='100%' opacity='.2' themed>

        </Div>
        <Vision360
          floatTopRightItemNumber
          ItemKey={props.pictureName}
        />

      </StyledLink>
    </Div>
  )
}
DetailBox.propTypes = {
  backgroundImg: PropTypes.string,
  backgroundTitle: PropTypes.string,
  backgroundDescription: PropTypes.string,
  showDescriptions: PropTypes.bool
}
export default DetailBox;
