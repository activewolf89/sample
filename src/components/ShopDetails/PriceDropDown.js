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
const PriceDropDown = (props) =>{
  return (
    <Div display="flex"  >
      <DesignerDiv highlighted={props.history.location.search.includes("price=showAll") || !props.history.location.search.includes('price') ? true: false}  width="100px" height="100px" onClick={()=>{pushNewFilter('price','showAll',props.history)}}><Title bold>Show All</Title></DesignerDiv>
      <DesignerDiv highlighted={props.history.location.search.includes("price=lte2000") ? true: false} width="100px"  height="100px" onClick={()=>{pushNewFilter('price','lte2000',props.history)}}><Title bold>Under $2,000</Title></DesignerDiv>
      <DesignerDiv highlighted={props.history.location.search.includes("price=lte3500") ? true: false} width="100px"  height="100px" onClick={()=>{pushNewFilter('price','lte3500',props.history)}}><Title bold>Under $3,500</Title></DesignerDiv>
      <DesignerDiv highlighted={props.history.location.search.includes("price=lte5000") ? true: false} width="100px"  height="100px" onClick={()=>{pushNewFilter('price','lte5000',props.history)}}><Title bold>Under $5,000</Title></DesignerDiv>
      <DesignerDiv highlighted={props.history.location.search.includes("price=lte7500") ? true: false} width="100px"  height="100px" onClick={()=>{pushNewFilter('price','lte7500',props.history)}}><Title bold>Under $7,500</Title></DesignerDiv>
      <DesignerDiv highlighted={props.history.location.search.includes("price=gte7500") ? true: false} width="100px"  height="100px" onClick={()=>{pushNewFilter('price','gte7500',props.history)}}><Title bold>Over $7,500</Title></DesignerDiv>
  </Div>
  )
}
PriceDropDown.propTypes = {
}
export default PriceDropDown;
