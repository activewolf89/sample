import React from 'react';

import Div from 'shared/Div';
import styled from 'styled-components';
import LTDLogo from 'images/LTDLogo.ico'

  const StyledDiv = styled(Div)`
  width: 80px;
height: 80px;
@media only screen and (min-width: 996px) {
  height: 120px;
  width: 120px;

}
animation-name: spin;

animation-duration: 5000ms;
animation-iteration-count: infinite;
animation-timing-function: linear;
/* transform: rotate(3deg); */
/* transform: rotate(0.3rad);/ */
/* transform: rotate(3grad); */
/* transform: rotate(.03turn);  */

@keyframes spin {
from {
    transform:rotate(0deg);
}
to {
    transform:rotate(360deg);
}
}
  `
   const StyledDiv2 = styled(Div)`
   position: fixed;
   transform: translate(-50%, -50%);

   left: 50%;
   top: 50%;
   `

const LoadingIndicator = (props) => (
  <Div height='100%' width='100%'  >
    <StyledDiv2 >
      <StyledDiv  >
        <img src={LTDLogo} style={{width:'100%',height:'100%'}} alt="LTDennyLogo" />
      </StyledDiv>
    </StyledDiv2>
    <Div  height='100%' width='100%' backgroundColor='black' opacity='.4'  position='absolute' top='0' left='0' zIndex='10'>

    </Div>
  </Div>

);

export default LoadingIndicator;
