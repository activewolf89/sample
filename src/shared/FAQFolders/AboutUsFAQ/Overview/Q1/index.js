import React from 'react';
import Div from 'shared/Div';
import P from 'shared/P';
import StyledLink from 'shared/StyledLink';
// -----
const Q1 = (props) =>{
  return (
    <Div >
      <P>
        L T Denny Jewelers is a one-stop-shop destination Jewelry Store in downtown Seattle.
        For over 25 years we have serviced the greater Seattle area, and have had fantastic customers and experiences in the process.
      </P>
      <P>
        We recommend anyone interested more in the atmosphere in-store learn more about the {" "}
        <StyledLink  underline to="/about-us/services">services we offer</StyledLink>
      </P>
    </Div>
  )
}
Q1.propTypes = {
}
export default Q1;
