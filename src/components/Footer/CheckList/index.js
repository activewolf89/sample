import React from 'react';
import Div from 'shared/Div';
//shared
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import DissapearringDiv from 'shared/DissapearringDiv';
import DissapearringCaret from 'shared/DissapearringCaret';
import { CSSTransition } from 'react-transition-group';
import ChecklistDetail from './ChecklistDetail'
import ReapearringDiv from 'shared/ReapearringDiv';
import styled from 'styled-components';
import {H2,H5} from 'shared/H';
var StyledDiv = styled(Div)`
  width: auto;
  text-align: left;
  @media only screen and (min-width: 996px) {
    text-align: center;
    width: 100%;

  }
`
var StyledH2 = styled(H2)`
  display: none;
  @media only screen and (min-width: 996px) {
    display: inline-block;
  }
`
var StyledH5 = styled(H5)`
display: inline-block;
  @media only screen and (min-width: 996px) {
    display: none;
  }
`
// -----
const WhyUs = (props) =>{

  return (
    <Div >
      <NoMPUl  childrenPadding="0 10px">
        <Li >
          <Div position="relative" display="flex" justifyContent="space-between" alignItems="center">
            <DissapearringDiv position="absolute" width="100%" height="100%"  onClick={()=>{props.onSocialClick('about')}} />
            <StyledDiv>
              <StyledH5 >
                Lifetime Jeweler Checklist
              </StyledH5>
              <StyledH2 >
                Lifetime Jeweler Checklist
              </StyledH2>
            </StyledDiv>
            <DissapearringCaret name={props.isOn ? "caret-up":'caret-down'}/>
          </Div>
        </Li>
        <DissapearringDiv>
          <CSSTransition
            in={props.isOn}
            timeout={300}
            classNames="footer"
          unmountOnExit>
            <Div>
              <ChecklistDetail />
            </Div>
          </CSSTransition>
        </DissapearringDiv>
        <ReapearringDiv>
          <ChecklistDetail />
        </ReapearringDiv>
      </NoMPUl>
    </Div>

  )
}
WhyUs.propTypes = {

}
export default WhyUs;
