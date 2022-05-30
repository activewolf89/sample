import React from 'react';
import Div from 'shared/Div';
import {H3} from 'shared/H'
import Button from 'shared/Button';
import P from 'shared/P';
import styled from 'styled-components';
import StyledLink from 'shared/StyledLink'
const StyledImg = styled.img`
  width: 300px;
  height: 200px;
  @media only screen and (min-width: 996px) {
  width:350px;
  height: 250px;
  }
`
const StyledDiv = styled(Div)`
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media only screen and (min-width: 996px) {
    flex-wrap: nowrap;
  }
`
// -----
const funcC0mp = (props) =>{
  return (
<Div  >
  <Div >

    <H3 textAlign='center' fontWeight='bold'>
      {props.title}
    </H3>
  </Div>
  <StyledDiv borderTop='2px solid gray' display='flex'  textAlign='center' alignItems='center' >

    <Div display='flex' flexDirection='column' alignItems='center'   cursor='pointer' >
      <StyledLink to={props.link}>

        <StyledImg src={props.boxImage} alt={props.name} />
      </StyledLink>

    </Div>
    <Div padding='5px'>

      <P>
        {props.description}
      </P>
      {
        props.textUs ?
          <Div>
            <a href="tel:206-682-5555">

              <Button add padding='10px 0'  width='350px'>
                {props.name}
              </Button>
            </a>
          </Div>:
          <Button add padding='10px 0'  width='350px' >
            <StyledLink to={props.link}>
              <Div color='white'>
                {props.name}
              </Div>
            </StyledLink>
          </Button>
      }
    </Div>
  </StyledDiv>
  </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
