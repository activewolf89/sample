import React from 'react';
import Div from 'shared/Div';
import styled from 'styled-components';
const StyledIframe = styled.iframe`
width: 100%;
height: 50vh;
@media only screen and (min-width: 996px) {
  width: 100%;
  height: 600px;
}

`


// -----
const funcC0mp = (props) =>{
  return (
    <Div themed  display='flex' flexDirection='column' alignItems='center' justifyContent='center' borderBottom='3px solid white' width='100vw' maxWidth='996px'>
      <StyledIframe title="store location" src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyDx4Ko-IVWDDVAyjWkBm8zFMkZUA-jkEC8&q=ltdenny,Seattle+WA"}  />


    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
