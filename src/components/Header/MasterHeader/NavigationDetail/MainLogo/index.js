import React from 'react';
import Div from 'shared/Div';
import StyledLink from 'shared/StyledLink';
import Armoire from 'images/Armoire/logo.webp'
import styled from 'styled-components';
const StyledImg = styled.img`
  display: none;
  @media only screen and (min-width: 666px) {
    width: 100%;

    max-width:300px;
    display: block;

  }
`
const StyledImg2 = styled.img`
display: block;
width: 200px;
@media only screen and (min-width: 666px) {
  display: none;
}

`


// -----
const funcC0mp = (props) =>{
  return (
    <Div margin='10px'>

      <StyledLink to="/" >
        <Div>
          <StyledImg src={Armoire}  alt="logo for store" />
        </Div>
      </StyledLink>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
