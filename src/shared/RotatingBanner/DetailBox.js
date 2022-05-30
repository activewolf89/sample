import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';
import Title from 'shared/Title';
import P from 'shared/P';
const DetailBox = (props) =>{
  return (
    <Div themed borderRight="1px solid white" >
      <img src={props.backgroundImg} style={{width:'100%',height:'100%'}} alt={props.backgroundTitle}/>
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
