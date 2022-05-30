import React from 'react';
import Div from 'shared/Div';
import Button from 'shared/Button';
import StyledLink from 'shared/StyledLink';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  width: 100vw;
  @media only screen and (min-width: 996px) {
  width: 800px;
  }
`
// -----
const funcC0mp = (props) =>{
  return (
    <Div padding = '10px 0' display='flex' justifyContent='center'>
      <StyledLink to="/shop">
        <StyledButton add >
          Start Your Search
        </StyledButton>
      </StyledLink>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
