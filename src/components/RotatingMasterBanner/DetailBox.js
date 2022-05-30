import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';
import StyledLink from 'shared/StyledLink'
import Vision360 from 'shared/Vision360';
import Title from 'shared/Title';
const DetailBox = (props) =>{
  return (
    <Div padding='10px' position='relative' >
      <StyledLink to={props.to + `?${props.getUnique}=` + props.uniqueName}>
        <Vision360
          floatItemNumber
          ItemKey = {props.ItemKey}
          MasterStyle={props.MasterStyle}
        />
      </StyledLink>
      <Div width='100%' themed position='absolute' bottom='5%'  opacity='.8'>
        <Title>
          {props.uniqueName}
        </Title>
      </Div>
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
