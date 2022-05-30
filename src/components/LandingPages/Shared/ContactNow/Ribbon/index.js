import React from 'react';
import Div from 'shared/Div';
import BlueRibbon from 'images/blue_paint.png'
import styled from 'styled-components';
// -----
const StyledH2 = styled.h2`
  font-size: 20px;
  @media only screen and (min-width: 996px) {
    font-size: 30px;

  }
`
const StyledH3 = styled.h3`

`
const funcC0mp = (props) =>{
  return (
    <Div >

      <Div
        borderRadius='10px'
        cursor='pointer'
        color='white'
        backgroundColor='#01107c'
      >
        <StyledH2>
          Call/Text a Tacori Specialist now!
        </StyledH2>
        <StyledH3>
          <a href = "tel:206-682-5555" style={{fontWeight:'bold', color:'white',textDecoration:'underline'}}>
            206-682-5555
          </a>
        </StyledH3>

      </Div>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
