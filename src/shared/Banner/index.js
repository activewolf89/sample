import React from 'react';
import styled from 'styled-components';
import Div from 'shared/Div';
const StyledDiv = styled(Div)`
  height: 50vh;
  min-height: 300px;
  width: 100%;
  background-size: cover;
  @media only screen and (min-width: 667px) {
    background-size: contain;
  }
`


// -----
const BannerImage = (props) =>{
  return (
    <StyledDiv backgroundColor='black'  backgroundPosition='center' backgroundRepeat='no-repeat'  backgroundImg={props.image} >
    </StyledDiv>
      )
}
BannerImage.propTypes = {
}
export default BannerImage;
