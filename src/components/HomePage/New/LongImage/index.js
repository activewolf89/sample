import React from 'react';
import Div from 'shared/Div';
import styled from 'styled-components';
import backgroundPic from 'images/2020Christmas/backgroundImg.jpg'
const StyledDiv = styled(Div)`
  height: 150px;
  width: 100%;
  @media only screen and (min-width: 996px) {
    height: 300px;

  }
`

// -----
const funcC0mp = (props) =>{
  return (
    <StyledDiv backgroundImg={props.backgroundImg}  backgroundPosition='center' backgroundAttachment="fixed">
    </StyledDiv>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
