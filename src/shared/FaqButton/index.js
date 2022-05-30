import React from 'react';
import Div from 'shared/Div';
import Button from 'shared/Button';
import StyledLink from 'shared/StyledLink';
import styled from 'styled-components';

var StyledDiv = styled(Div)`
  width: 100%;
  @media only screen and (min-width: 667px) {
  max-width: 400px;
  }
`

// -----
const funcC0mp = (props) =>{
  return (
    <Div padding='5px 0'  onClick={()=>{props.onFaqClick()}}>
      <StyledLink to={props.faqLink} >
        <StyledDiv  capitalize>
          <Button width='100%'   >
            FAQ
          </Button>
        </StyledDiv>
      </StyledLink>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
