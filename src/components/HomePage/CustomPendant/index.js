import React from 'react';
import Div from 'shared/Div';
import Custom from 'images/custom.jpg';
import Button from 'shared/Button';
import StyledLink from 'shared/StyledLink';
import styled from 'styled-components';

const StyledDiv = styled(Div)`
  width:100vw;
  @media only screen and (min-width: 996px) {
    width:2000px;
    background-attachment: fixed;
  }
`
// -----
const funcC0mp = (props) =>{
  return (
    <StyledLink to='/contact-us'>
      <StyledDiv backgroundImg={Custom}  height='600px'  backgroundSize="600px" backgroundRepeat='no-repeat' backgroundColor='black'  backgroundPosition='center'>
      </StyledDiv>
      <Div textAlign='center' padding='10px'>
        <Button add> Start Your Custom Piece</Button>
      </Div>
    </StyledLink>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
