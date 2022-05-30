import React from 'react';
import Div from 'shared/Div';
import P from 'shared/P';
import StyledLink from 'shared/StyledLink';

// -----
const Q3 = (props) =>{
  return (
    <Div >
      <P>
        The atmosphere at the store is a lot like sitting in the living room of
        someone's home -- warmer-colored lights, relaxed, and possibly a therapy dog or two.
        To learn more about our environment <StyledLink underline to="/about-us/atmosphere">learn more</StyledLink>
      </P>

    </Div>
  )
}
Q3.propTypes = {
}
export default Q3;
