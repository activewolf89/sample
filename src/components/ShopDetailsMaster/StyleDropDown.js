import React from 'react';
import styled,{css} from 'styled-components';
import pushNewFilter from './pushNewFilter';

//shared
import Div from 'shared/Div';
import Title from 'shared/Title';

//------
const DesignerDiv = styled(Div)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid teal;
  color: black;
  ${props => props.highlighted && css`
    color: white;
    background-color: ${props => props.theme.ThemedColor}
`}
`;
const StyleDropDown = (props) =>{

  return (
    <Div display="flex"  >
      <DesignerDiv highlighted={props.history.location.search.includes("style=showAll") || !props.history.location.search.includes('style') ? true: false} width="100px" height="100px" onClick={()=>{pushNewFilter('style','showAll',props.history)}}><Title bold>Show All</Title></DesignerDiv>
      <DesignerDiv highlighted={props.history.location.search.includes("style=solitaire") ? true: false} width="100px"  height="100px" onClick={()=>{pushNewFilter('style','solitaire',props.history)}}><Title bold>Solitaire</Title></DesignerDiv>
      <DesignerDiv highlighted={props.history.location.search.includes("style=pave") ? true: false} width="100px"  height="100px" onClick={()=>{pushNewFilter('style','pave',props.history)}}><Title bold>Pave</Title></DesignerDiv>
      <DesignerDiv highlighted={props.history.location.search.includes("style=halo") ? true: false} width="100px"  height="100px" onClick={()=>{pushNewFilter('style','halo',props.history)}}><Title bold>Halo</Title></DesignerDiv>
      <DesignerDiv highlighted={props.history.location.search.includes("style=threeStone") ? true: false} width="100px"  height="100px" onClick={()=>{pushNewFilter('style','threeStone',props.history)}}><Title bold>ThreeStone</Title></DesignerDiv>
  </Div>
  )
}
StyleDropDown.propTypes = {
}
export default StyleDropDown;
