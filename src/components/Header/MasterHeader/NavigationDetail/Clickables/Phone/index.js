import React from 'react';
import Div from 'shared/Div';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';
import FloatFont from 'shared/FloatFont';
// -----
var StyledDiv = styled(Div)`
  @media only screen and (min-width: 996px) {
  display: none;
  }
`
var StyledDiv2 = styled(Div)`
display: none;
  @media only screen and (min-width: 996px) {
    display: block;
  }
`
var StyledDiv3 = styled(Div)`
  position: absolute;

`
const funcC0mp = (props) =>{
  return (
    <Div padding='5px 0' position='relative' >
      <StyledDiv color='white' fontWeight='bold'  display='flex' flexDirection='column' >
        <FontAwesome name="phone" size="2x"  style={{color:'white'}} />
      </StyledDiv>
      <StyledDiv2 whiteSpace='nowrap'>
        <a href="tel:2066825555" style={{color:'white',fontWeight:'bold'}}>(206) 682-5555</a>
      </StyledDiv2>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
