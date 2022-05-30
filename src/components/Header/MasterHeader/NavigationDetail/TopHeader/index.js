import React from 'react';
import Div from 'shared/Div';
import MainLogo from '../MainLogo';
import Clickables from '../Clickables';
import styled from 'styled-components';
import Phone from '../Clickables/Phone';
import Schedule from '../Clickables/Schedule';
import Bars from '../Bars';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import SearchMaster from 'containers/SearchMaster';
import FontAwesome from 'react-fontawesome';
import StyledLink from 'shared/StyledLink';
import Styled from 'styled-components';

const StyledDiv = styled(Div)`
  max-width: 1500px;
  padding: 0 10px;
@media only screen and (min-width: 1800px) {
max-width: 2000px;
}

`


// -----
const funcC0mp = (props) =>{
  return (
    <StyledDiv display='flex' justifyContent='center'   width='100vw' textAlign='center' alignItems='center' borderBottom='1px solid white'>
      <MainLogo/>
    </StyledDiv>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
