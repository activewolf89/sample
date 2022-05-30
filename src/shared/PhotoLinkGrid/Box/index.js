import React from 'react';
import Div from 'shared/Div';
import styled from 'styled-components';
const StyledDiv = styled(Div)`
  width: 140px;
  height: 140px;
  @media only screen and (min-width: 996px) {
  width: 200px;
  height: 180px;
  }
`


// -----
const funcC0mp = (props) =>{
  return (
    <StyledDiv cursor='pointer' position='relative'  height='180px' border='1px solid gray'  backgroundImg={props.photo} backgroundSize="cover">
      <Div width='100%' height='100%' position='absolute' themedAccent opacity={props.chosen ?"0":'.4'}>

      </Div>
      <Div  opacity=".7" bottom='0%' themedAccent width='100%' position='absolute' zIndex='1' display='flex' alignItems='center' flexDirection='column' JustifyContent='center'>
        <Div height="70px" justifyContent='center' alignItems='center' display='flex' textAlign='center' >
          {props.name}
        </Div>
        {
          props.howMany &&
          <Div>
            ({props.howMany})
          </Div>
        }
      </Div>

    </StyledDiv>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
