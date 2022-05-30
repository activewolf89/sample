import React from 'react';
import Div from 'shared/Div';
import SaleHeader from './SaleHeader';
import styled from 'styled-components';
  var StyledDiv = styled(Div)`
  h1 {
   overflow: hidden;
   text-align: center;
  }
  h1:before,
  h1:after {
   background-color: white;
   content: "";
   display: inline-block;
   height: 3px;
   position: relative;
   vertical-align: middle;
   width: 50%;
  }
  h1:before {
   right: 0.5em;
   margin-left: -50%;
  }
  h1:after {
   left: 0.5em;
   margin-right: -50%;
  }
  `
  var StyledDivSpan = styled(Div)`

    padding: 0 0 8px 0;
  h4 {
    height: 18px;
   overflow: hidden;
   text-align: center;
  }
  h4:before,
  h4:after {
   background-color: white;
   content: "";
   display: inline-block;
   height: 3px;
   position: relative;
   vertical-align: middle;
   width: 50%;
  }
  h4:before {
   right: 0.5em;
   margin-left: -50%;
  }
  h4:after {
   left: 0.5em;
   margin-right: -50%;
  }
  `
// -----
const funcC0mp = (props) =>{
  return (
    <Div  textAlign='center' >
      {props.mobile && props.categoryObjects.saleName &&
        <StyledDivSpan>
          <h4 style={{fontSize:'12px'}}>

            <SaleHeader
              mobile
              onSaleClick = {props.onSaleClick}
              saleName = {props.categoryObjects.saleName}
            />
          </h4>
        </StyledDivSpan>
      }
      {
        !props.mobile && props.categoryObjects.saleName &&
        <StyledDiv>
          <h1>
            <SaleHeader
              onSaleClick = {props.onSaleClick}
              saleName = {props.categoryObjects.saleName}
            />
          </h1>
        </StyledDiv>
      }
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
