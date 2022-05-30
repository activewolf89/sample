import React from 'react';
import Div from 'shared/Div';
import Shop from './Shop';
import KnowledgeCenter from './KnowledgeCenter';
import Home from './Home';
import styled from 'styled-components';
// -----
const StyledDiv = styled(Div)`
  display: none;
  @media only screen and (min-width: 996px) {
  display:block;
  }
`
const funcC0mp = (props) =>{
  return (
    <StyledDiv >
      {
        props.whichRoute === "Shop" ?
          <Shop
            isSpecific = {props.isSpecific}
            ratio = {props.ratio}
            toggle = {props.toggle}
            onToggle = {props.onToggle}
          />:
        props.whichRoute === "Knowledge-Center" ?
          <KnowledgeCenter
            toggle = {props.toggle}
            onToggle = {props.onToggle}
          />:
          <Home
            toggle = {props.toggle}
            onToggle = {props.onToggle}
            flash ={props.flash}
          />
      }

    </StyledDiv>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
