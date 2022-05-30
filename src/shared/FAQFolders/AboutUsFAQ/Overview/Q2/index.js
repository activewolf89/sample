import React from 'react';
import Div from 'shared/Div';
import P from 'shared/P';
import StyledLink from 'shared/StyledLink';

// -----
const Q1 = (props) =>{
  return (
    <Div >
      <P>
        Smaller stores offer more flexibility both in quality of service, pricing, and
        what lines they take-in from the larger industry.
      </P>
      <P>
        Our focus is education, and quality selections of loose diamonds and jewelry.
        Only through the understanding of quality differences, can a purchases know what they can
        sacrifice and what is paramount in a piece of jewelry.
      </P>
      <P>
        To learn more about what we offer, read up on our
        {" "}
        <StyledLink underline to="/about-us/guidance">
          tailored guidance
        </StyledLink>
      </P>
    </Div>

  )
}
Q1.propTypes = {
}
export default Q1;
