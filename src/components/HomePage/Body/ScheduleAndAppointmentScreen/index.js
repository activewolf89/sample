import React from 'react';
import Div from 'shared/Div';
import BackgroundImage from 'images/HomepageFixed.jpg'
import MistieMobile from 'images/mistieMobile.jpg'
import styled from 'styled-components';
import A from 'shared/A';

const StyledDiv = styled(Div)`
  display: none;
  @media only screen and (min-width: 767px) {
  display: block;
  }
`
const StyledDiv1 = styled(Div)`
display: block;
  @media only screen and (min-width: 767px) {
    display: none;
  }
`
// -----
const funcC0mp = (props) =>{
  return (
    <Div >

      <StyledDiv position='relative' padding='30px' height='600px' backgroundSize="cover" background backgroundRepeat="no-repeat" backgroundImg = {BackgroundImage}  themed  >

      </StyledDiv>
      <StyledDiv1 position='relative' padding='30px' height='300px' backgroundSize="cover" backgroundPosition='center' background backgroundRepeat="no-repeat" backgroundImg = {MistieMobile}  themed  >

      </StyledDiv1>
      <Div themed onClick={()=>{props.onContactClick('appointment')}}  display='flex' flexDirection='column' alignItems='center' textAlign='center'>
        <A>
          515 Occidental Ave, Seattle WA 98144
        </A>
        <A>
          *Appointments Recommended due to Event Traffic*
        </A>
      </Div>


    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
