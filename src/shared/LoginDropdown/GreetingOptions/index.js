import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import A from 'shared/A';
import Span from 'shared/Span';
import OutsiderAlert from 'shared/OutsiderAlert';
import styled from 'styled-components';

  const StyledDiv = styled(Div)`
     top: 115px;
    position: fixed;
    right: 0;
    border:2px solid black;
    z-index: 100000000000000;
    @media only screen and (min-width: 996px) {
    position: absolute;
    top:50px;
    border:2px solid black;

    width: 300px;
    }
  `
// -----
const funcC0mp = (props) =>{
  return (
    <StyledDiv  themed width='100%'  maxWidth='996px'       >
      <OutsiderAlert  callback={()=>{props.onToggle()}}>
        <NoMPUl display='flex' alignItems='center' flexDirection='column' childrenBorderBottom='1px solid gray'>
          <Li>
            <Span fontWeight='italic'>
              {props.userProfile.email}
            </Span>

          </Li>
          <Li>
            <A fontWeight='bold' color='maroon' onClick={props.onLogOut}>
              [Log Out]
            </A>
          </Li>
        </NoMPUl>
      </OutsiderAlert>
    </StyledDiv>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
