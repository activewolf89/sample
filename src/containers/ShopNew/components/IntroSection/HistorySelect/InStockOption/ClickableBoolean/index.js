import React from 'react';
import Div from 'shared/Div';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome'

  var StyledDiv = styled(Div)`
    background-color: ${props => props.bColor}
    transition:  ease .5s;
    left: ${props => props.left}

    background: linear-gradient(
      to top,
      #303030,
      transparent
    );

  `

  var Circle = styled(Div)`
    left: ${props => props.left}
  `


// -----
const funcC0mp = (props) =>{
  return (
    <StyledDiv position='relative'
      cursor='pointer'
      width='260px'
      border='1px solid gray'
      padding='5px'
      borderRadius='30px'
      margin='10px 0'
      bColor={props.toggle ? 'lightGray':'#f5deb3'}
      justifyContent='center'
      color='black'
      alignItems='center'
      display='flex'
    >
      <Circle border='1px solid gray' left={props.toggle ? '5px':'210px'} position='absolute'  width='45px' height='45px' borderRadius='45px' backgroundColor='white'>
        {
          !props.toggle &&
          <FontAwesome name='check' />
        }

      </Circle>
      <Div margin='0 0 0 5px'  margin='0 30px'>
        In-Stock Only
      </Div>
    </StyledDiv>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
