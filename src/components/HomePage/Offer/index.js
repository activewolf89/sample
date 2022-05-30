import React from 'react';
import Div from 'shared/Div';
import P from 'shared/P';
import A from 'shared/A';
import StyledLink from 'shared/StyledLink';
import styled from 'styled-components';
const StyledImg = styled.img`
width: 100%;
height: 200px;
  @media only screen and (min-width: 996px) {
    width: 100%;
    height: 400px;
  }
`
// -----
const funcC0mp = (props) =>{
  return (
    <StyledLink to = {props.direction.link}>
      <Div padding='10px' border='1px solid white' color='white' display='flex' flexDirection='column' alignItems='center' backgroundColor='black'>

        <Div backgroundColor='black'>
          <StyledImg src={props.image} alt={props.title}  />
        </Div>

        <P fontStyle='italic' textAlign='center'>
          {props.paragraph}
        </P>
        <A active>
          {props.direction.title}
        </A>
      </Div>
    </StyledLink>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
