import React from 'react';
import Div from 'shared/Div';
import Button from 'shared/Button';
import StyledLink from 'shared/StyledLink';
import styled from 'styled-components';

const StyledDiv = styled(Div)`
  width: 100vw;

  @media only screen and (min-width: 666px) {
  width: 666px;
  }
  @media only screen and (min-width: 996px) {
    width: 350px;

  }
`
// -----
const funcC0mp = (props) =>{
  return (
    <Div display='flex' justifyContent='center' padding='10px 0'>
      <StyledLink to ='/contact-us'>

        <StyledDiv width='100%' maxWidth='300px'>

          <Button width='100%' >
            Questions?
          </Button>
        </StyledDiv>
      </StyledLink>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
