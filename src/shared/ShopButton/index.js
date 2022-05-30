import React from 'react';
import Div from 'shared/Div';
import StyledLink from 'shared/StyledLink';
import Button from 'shared/Button';


// -----
const ShopButton = (props) =>{
  return (
    <Div themed>
      <Div padding="10px">
        <StyledLink to={props.destination}>
          <Button active={true} themed>
            Shop {props.selectCategoryValue.name}
          </Button>
        </StyledLink>
      </Div>

    </Div>
  )
}
ShopButton.propTypes = {
}
export default ShopButton;
