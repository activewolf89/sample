import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';
import Title from 'shared/Title';
import P from 'shared/P';
const DetailBox = (props) =>{
  return (
    <Div themed width="250px">
      <img src={props.backgroundImg} style={{width:'250px',height:'150px'}} alt={props.backgroundTitle}/>
      <Title fontStyle="italic">{props.backgroundTitle}</Title>
      {
        props.showDescriptions &&
        <P fontStyle="italic">{props.backgroundDescription}</P>
      }
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
