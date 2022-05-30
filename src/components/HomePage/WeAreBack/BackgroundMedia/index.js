import React from 'react';
import Div from 'shared/Div';
import Virtual2 from 'images/WeAreOpen/Virtual2.webp';
//shared
import {H2} from 'shared/H';
import Button from 'shared/Button';
import styled from 'styled-components';

const StyledImg = styled.img`
  width: 300px;
  @media only screen and (min-width: 996px) {
  width: 500px;

  }
`
// -----
const BackgroundMedia = (props) =>{
  return (
    <Div padding='10px ' themedAccent height='100%' >
      <Div fontStyle='italic'>
        <H2  textAlign='center'>
          Open For Appointments
        </H2>
      </Div>
      <Div padding='10px'    textAlign='center' fontStyle='italic'  color='white' display='flex' alignItems='center' flexDirection='column' justifyContent='center'>
        <StyledImg src={Virtual2}  alt="we are open"/>

        <Button onClick={()=>{props.onContactClick('appointment')}} margin='10px 0'>
          Schedule Your Experience
        </Button>

      </Div>

    </Div>

  )
}
BackgroundMedia.propTypes = {
}
export default BackgroundMedia;
