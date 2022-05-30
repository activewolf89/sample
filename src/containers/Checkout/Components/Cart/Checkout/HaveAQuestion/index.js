import React from 'react';
import Div from 'shared/Div';
import {H3} from 'shared/H';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
var StyledA = styled(Div)`
  color: black;
  white-space: nowrap;
  cursor: pointer;
  text-decoration: underline;
  padding: 5px;
`
// -----
const funcC0mp = (props) =>{
  return (
    <Div border='2px solid black' padding='10px' width='100vw' maxWidth='300px' height='180px' margin='10px' display='flex' flexDirection='column' justifyContent='space-around' alignItems='center'>
      <Div fontStyle='italic' color='black'>
        <H3 textAlign='center'>
          Have A Question?
        </H3>
      </Div>
      <Div display='flex' justifyContent='space-around' textAlign='center' >
        <StyledA onClick={()=>{props.onContactClick('email')}} >
          <Div>
            <FontAwesome name="envelope" />
            Email Us
          </Div>
        </StyledA>
        <a href="tel:2066825555" >
          <StyledA>
            <FontAwesome name="phone" />

            Text Us
          </StyledA>
        </a>
      </Div>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
