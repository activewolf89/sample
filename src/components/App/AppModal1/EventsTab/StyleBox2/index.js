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
  console.log(props)
  return (
<Div  padding='20x 0 0 0' >
  <Div border='1px solid gray' >

    <H3 textAlign='center' fontWeight='bold'>
      {props.title2}
    </H3>
    <P textAlign='center' fontStyle='italic'>
      {props.title}
    </P>
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
      <Div >
        <Button add padding='10px 0'  width='350px' >
          {
            !props.contactButton ?
              <StyledLink to={props.link}>
                <Div color='white'>
                  {props.name2}
                </Div>
              </StyledLink>:
              <Div onClick={()=>{props.onContactClick(props.contactButton)}}>
                {props.contactButton}
              </Div>
          }
        </Button>
        <Div fontStyle='italic' >
          {
            props.resets ?
              <small>
                Resets in {props.resets} days
              </small>:
              <small>
                ({props.month})
              </small>
          }
          </Div>
        </Div>
        </Div>
        </StyledDiv>

  </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
