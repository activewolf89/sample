import React from 'react';
import styled,{css} from 'styled-components';
import pushNewFilter from './pushNewFilter';
//shared
import Div from 'shared/Div';
import Title from 'shared/Title';
import PropTypes from 'prop-types';

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
const DesignerDropDown = (props) =>{
  return (
    <Div display="flex"  >
      <DesignerDiv highlighted={props.history.location.search.includes("itVendorId=showAll") || !props.history.location.search.includes('itVendorId') ? true: false}  width="100px" height="100px" onClick={()=>{pushNewFilter('itVendorId','showAll',props.history)}}><Title bold>Show All</Title></DesignerDiv>
      <DesignerDiv highlighted={props.history.location.search.includes("itVendorId=TAC")  ? true: false}  width="100px"  height="100px" onClick={()=>{pushNewFilter('itVendorId','TAC',props.history)}} ><Title bold>Tacori</Title></DesignerDiv>
      <DesignerDiv highlighted={props.history.location.search.includes("itVendorId=maevona")  ? true: false}  width="100px"  height="100px" onClick={()=>{pushNewFilter('itVendorId','maevona',props.history)}}><Title bold>Maevona</Title></DesignerDiv>
      <DesignerDiv highlighted={props.history.location.search.includes("itVendorId=simonG")  ? true: false} width="100px"  height="100px" onClick={()=>{pushNewFilter('itVendorId','simonG',props.history)}}><Title bold>SimonG</Title></DesignerDiv>
      <DesignerDiv highlighted={props.history.location.search.includes("itVendorId=ritani")  ? true: false} width="100px"  height="100px" onClick={()=>{pushNewFilter('itVendorId','ritani',props.history)}}><Title bold>Ritani</Title></DesignerDiv>
      <DesignerDiv highlighted={props.history.location.search.includes("itVendorId=danhov")  ? true: false} width="100px"  height="100px" onClick={()=>{pushNewFilter('itVendorId','danhov',props.history)}}><Title bold>Danhov</Title></DesignerDiv>
  </Div>
  )
}
DesignerDropDown.propTypes = {
  history: PropTypes.object.isRequired
}
export default DesignerDropDown;
