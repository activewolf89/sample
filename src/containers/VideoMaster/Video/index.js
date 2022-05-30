import React from 'react';
import Div from 'shared/Div';
 import {H2} from 'shared/H';
import styled from 'styled-components';
const StyledDiv = styled(Div)`
  width: 100vw;
  @media only screen and (min-width: 450px) {
  width: 600px;
  }
`

// -----
const funcC0mp = (props) =>{
  return (
    <Div themedAccent textAlign='center'>
      <H2 >
        {props.name}
      </H2>
      <StyledDiv width='100%' height='300px' themed border='2px solid gray'>
        YouTube Video
      </StyledDiv>
    </Div>
      )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
