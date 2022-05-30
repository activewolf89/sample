import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

//shared
import Title from 'shared/Title';
import styled from 'styled-components';
// -----
const HoverDiv = styled(Div)`
  :hover {
    cursor: pointer;
  }
`
const CategoryDetail = (props) =>{
  return (
    <Div display="flex" flexDirection="column" alignItems="center">
      <HoverDiv>
        {
            props.img &&
      <img src={props.img} style={{width:'80px',height:'80px'}} alt={props.name}/>
    }
    {
      props.fontAwesome &&
      <FontAwesome name={props.fontAwesome} style={{fontSize:'80px', color: props.color}}/>
    }
    </HoverDiv>
      <Title bold>{props.name}</Title>
    </Div>
  )
}
CategoryDetail.propTypes = {
   name: PropTypes.string.isRequired,
   img: PropTypes.string,
   fontAwesome: PropTypes.string,
   color: PropTypes.string
}
export default CategoryDetail;
