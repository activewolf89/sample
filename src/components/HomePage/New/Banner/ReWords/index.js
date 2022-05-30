import React from 'react';
import Div from 'shared/Div';
import styled,{css} from 'styled-components';

const DisapearringDiv = styled(Div)`
${props => props.large && css`
  display: none;

@media only screen and (min-width: 996px) {
display: block;
}
`}
${props => props.small && css`

  display: block;
@media only screen and (min-width: 996px) {
  display: none;
}
`}
`
const StyledH = styled.h2`
  font-style:italic;
  font-family:'Open Sans', sans-serif;
`
// -----
const funcC0mp = (props) =>{
  return (
    <DisapearringDiv small={props.small} large={props.large}>
      <StyledH >
        {props.text}
      </StyledH>
    </DisapearringDiv>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
