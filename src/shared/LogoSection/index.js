import React from 'react';
import Div from 'shared/Div';
import {H1} from 'shared/H';
import StyledLink from 'shared/StyledLink';
import Logo from 'images/ltlong.jpg'
// -----

const funcC0mp = (props) =>{
  return (
    <StyledLink to='/' >
      <Div themed   textAlign='center' >
        <H1 whiteSpace='nowrap'  textAlign='center' >
          <img src={Logo} alt="LTDenny" style={{width:'300px', height:'80px'}} />
        </H1>
      </Div>
  </StyledLink>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
