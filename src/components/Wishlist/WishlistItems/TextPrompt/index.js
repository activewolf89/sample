import React from 'react';
import Div from 'shared/Div';
import Button from 'shared/Button';
import {H4} from 'shared/H';
import StyledLink from 'shared/StyledLink';
// -----
const TextPrompt = (props) =>{
  return (
    <Div maxWidth='500px'>
      <H4>
        Visit your selected items
      </H4>
      <StyledLink to="/wishlist">
        <Button themed width="100%" maxWidth="500px">
          Full Wishlist
        </Button>
      </StyledLink>
    </Div>
  )
}
TextPrompt.propTypes = {
}
export default TextPrompt;
