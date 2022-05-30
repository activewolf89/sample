import React from 'react';
import Div from 'shared/Div';
import Virtual2 from 'images/bands.webp';
//shared
import {H2,H4} from 'shared/H';
import Button from 'shared/Button';
import styled from 'styled-components';
import StyledLink from 'shared/StyledLink'
import lBand from 'images/SVG/engRing.svg'
import mBand from 'images/SVG/mensBand1.svg'
import princess from 'images/lightbox.jpg'
import Countdown from 'shared/Countdown'
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
      <Div fontStyle='italic' >
        <H2  textAlign='center'>
          Lab-grown Jewelry
          <Countdown date={new Date(new Date().getTime()+(4*24*60*60*1000))} />
        </H2>
        <H4  textAlign='center' fontStyle='italic'>
          Black Friday Sale
        </H4>
      </Div>
      <Div  textAlign='center' fontStyle='italic'  color='white' display='flex' alignItems='center' flexDirection='column' justifyContent='center'>
        <StyledLink to='/shop?StoneLab=LabGrown'>
          <StyledImg src={princess}  alt="lab grown sale" />
        </StyledLink>
        <Div fontWeight='bold' width='100%' maxWidth='996px'  padding='5px'>
          <Div   width='100%'>
            <Button   width='100%'>
              <StyledLink to='/shop?StoneLab=LabGrown'>
                <Div color='black'>
                  <img src={lBand} style={{width:'30px',height:'30px', padding:'0 5px'}} alt='ladies band' />
                  Shop Now
                </Div>
              </StyledLink>
            </Button>

          </Div>
        </Div>

      </Div>

    </Div>

  )
}
BackgroundMedia.propTypes = {
}
export default BackgroundMedia;
