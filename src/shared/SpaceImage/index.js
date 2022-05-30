import React from 'react';
import Div from 'shared/Div';
import Banner1 from 'images/SVG/banner.webp';
import styled from 'styled-components';
// -----
const StyledDiv = styled(Div)`

  background-image: url(${Banner1});
  height: 300px;
  width: 100vw;

@media only screen and (min-width: 996px) {
  width: 996px;

}
@media only screen and (min-width: 2000px) {

  background-image: url(${Banner1});
  width: 2000px;
  height: 600px;
}
`
const funcC0mp = (props) =>{
  return (
    <Div width='100%' backgroundColor='black' display='flex' justifyContent='center'>

      <StyledDiv  backgroundColor='black' width='100%' backgroundPosition='center' backgroundSize="cover" backgroundRepeat="no-repeat">
      </StyledDiv>
  </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
