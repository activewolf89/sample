import React from 'react';
import Div from 'shared/Div';
import Virtual2 from 'images/2020Christmas/Tacori.webp';
//shared
import {H2,H4} from 'shared/H';
import Button from 'shared/Button';
import styled from 'styled-components';
import StyledLink from 'shared/StyledLink'

const StyledImg = styled.img`
  width: 100vw;
  @media only screen and (min-width: 996px) {
  width: 1000px;

  }
`
// -----
const BackgroundMedia = (props) =>{
  return (
    <Div padding='10px ' themedAccent height='100%' >
      <Div fontStyle='italic'>
        <H2  textAlign='center'>
          2020 Tacori Event
        </H2>
        <H4  textAlign='center'>
          November 13th - November 21st!
        </H4>
      </Div>
      <Div  textAlign='center' fontStyle='italic'  color='white' display='flex' alignItems='center' flexDirection='column' justifyContent='center'>
        <StyledImg src={Virtual2}  alt="we are open"/>
        <Div fontWeight='bold'  display='flex' alignItems='flex-end' justifyContent='center' flexWrap='nowrap'  textAlign='center'>
          <Div padding='10px'>
            <StyledLink to='/events'>
              <Button  >
                Special Promo Details
              </Button>
            </StyledLink>
          </Div>

        </Div>


      </Div>

    </Div>

  )
}
BackgroundMedia.propTypes = {
}
export default BackgroundMedia;
