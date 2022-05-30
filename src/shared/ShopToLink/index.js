import React from 'react';
import StyledLink from 'shared/StyledLink';
import CapitalizeFirstLetter from 'containers/App/HelperFunctions/CapitalizeFirstLetter';
import A from 'shared/A';
// -----
const funcC0mp = (props) =>{
  return (
      <StyledLink to={props.linkObject.link} color='black' underline>
        <A color='maroon' active>
          {CapitalizeFirstLetter(props.linkObject.name)}
        </A>
      </StyledLink>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
