import React from 'react';
import Div from 'shared/Div';
import Button from 'shared/Button'
import FontAwesome from 'react-fontawesome';
import StyledLink from 'shared/StyledLink'
// -----
const funcC0mp = (props) =>{
  return (
    <StyledLink to={props.basicRootPath}>

      <Div textAlign='center' padding='10px'>
        <Button active width='100%' >
          <FontAwesome name='home' />
          Visit Homepage
        </Button>
      </Div>
  </StyledLink>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
