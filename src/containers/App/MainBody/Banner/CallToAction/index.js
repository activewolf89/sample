import React from 'react';
import Div from 'shared/Div';
import Button from 'shared/Button';
import ReWords from '../ReWords'
import styled from 'styled-components'
import StyledLink from 'shared/StyledLink';



const StyledDiv = styled(Div)`
  position: relative;
  width: 100%;
  height: 90px;
  @media only screen and (min-width: 996px) {

    width: 600px;
    height: 110px;
  }
`

const StyledHiddenDiv = styled(Div)`
  display: none;
  @media only screen and (min-width: 996px) {
    display: block;
  }
`

// -----
const funcC0mp = (props) =>{
  return (
    <StyledDiv  >
      <StyledLink to={props.buttonObj.url}>
        <StyledHiddenDiv  opacity='.9'   width='100%' height='100%' position='absolute' textAlign='center' borderRadius='3%'  >

        </StyledHiddenDiv>
        <Div position='absolute' color='white' textAlign='center' width='100%' >

          <Div padding='10px 0'>

            <ReWords text={props.text} large />

          </Div>
          <Div textAlign='center' >
            <Button Armoire   width='100vw' maxWidth='300px'  color='white'>
              <span style={{fontWeight:'bold', color:'white'}}>
                {props.buttonObj.text}
              </span>
            </Button>
          </Div>
        </Div>
      </StyledLink>
    </StyledDiv>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
