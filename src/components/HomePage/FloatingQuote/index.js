import React from 'react';
import Div from 'shared/Div';
import styled from 'styled-components';

const StyledDiv = styled(Div)`
width: 200px;
height: 100px;
background-color: lightGray;
-moz-box-shadow: 0 0 5px 5px #666;
-webkit-box-shadow: 0 0 5px 5px #666;
box-shadow: 0 0 5px 5px #666;
`

// -----
const funcC0mp = (props) =>{
  return (
    <Div height='400px' themedAccent width='100vw' maxWidth='2000px'>
      <StyledDiv >
        Test
      </StyledDiv>
    </Div>
      )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
