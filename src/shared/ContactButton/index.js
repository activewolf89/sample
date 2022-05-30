import React from 'react';
import Div from 'shared/Div';
import StyledLink from 'shared/StyledLink';
import Button from 'shared/Button';


// -----
const ContactButton = (props) =>{
  return (
    <Div >
      <Div padding="10px">
        <StyledLink to={'contact-us'}>
          <Button active={true} themed>
            Contact Us
          </Button>
        </StyledLink>
      </Div>

    </Div>
  )
}
ContactButton.propTypes = {
}
export default ContactButton;
