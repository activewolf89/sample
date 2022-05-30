import React from 'react';
import Div from 'shared/Div';
import Button from 'shared/Button';
import StyledLink from 'shared/StyledLink';
import {H4} from 'shared/H';

// -----
const funcC0mp = (props) =>{
  return (
    <Div   >
      <Button themed width="100%">
        <StyledLink to='/knowledge-center'>
          <H4 capitalize whiteSpace='nowrap'>Knowledge Center</H4>
        </StyledLink>
      </Button>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
