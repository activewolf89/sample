import React from 'react';
import Div from 'shared/Div';
import FontAwesome from 'react-fontawesome';
import StyledLink from 'shared/StyledLink'
import CookieAmount from 'containers/App/HelperFunctions/CookieAmount';
import RedRibbon from 'images/redRibbonSvg.svg';
import SaleWord from './SaleWord';
import styled from 'styled-components';
var StyledImg= styled.img`
   width: 20px;
   height: 20px;
@media only screen and (min-width: 996px) {
  width: 40px;
  height: 40px;
}
`
const StyledDiv = styled(Div)`
  font-size: 16px;

  @media only screen and (min-width: 996px) {
    font-size: 22px;

  }
`
require('./sale.css')
// -----
const funcC0mp = (props) =>{
  return (
      <Div position='relative'  height='100%' width='100%'    active = {props.active} padding='5px'>
        {
          props.theLink ?
            <Div height='100%' position='relative' hoverable   display='flex' justifyContent='center' alignItems='center' >
              <StyledLink height='100%' to={props.theLink} color={props.color}>
                <Div display='flex' justifyContent='center' flexDirection='column' alignItems='center' height='100%'  >

                  <Div width='40px' textAlign='center' >
                    <FontAwesome name={props.awesome} style={{color:props.color}} />
                  </Div>
                  <StyledDiv  color={props.active ? 'black':'white'}  width='60px' textAlign='center' >
                    {props.name}
                  </StyledDiv>
                </Div>
              </StyledLink>
            </Div>:
            <Div display='flex'  alignItems='center' flexDirection='column'  justifyContent='space-between'   hoverable height='100%' >

              {
                props.name === 'Sale' &&
                <Div display='flex' justifyContent='center' >

                  <StyledImg src={RedRibbon} alt='sale' />
                </Div>
              }
              {
                props.name !== "Sale" &&
                <Div  flexWrap='nowrap' display='flex'    justifyContent='center' alignItems='center' >
                  <Div width='40px' textAlign='center' display='flex' flexWrap='nowrap' justifyContent='center' >
                    <FontAwesome name={props.awesome} style={{color:props.color}} />
                    <Div >
                      {props.wishlistItems &&
                        <small  style={{fontSize:'15px'}}>
                          {"(" + CookieAmount() + ")"}
                        </small>
                      }
                    </Div>
                  </Div>
                </Div>
              }
              <Div textAlign='center' color={props.active ? 'black':'white'}   >
                {
                  props.name ==='Sale' ?
                    <Div>
                      <SaleWord
                        categoryObjects = {props.categoryObjects}
                      />
                    </Div>:
                    <StyledDiv >
                      {props.name}
                    </StyledDiv>
                }
              </Div>
            </Div>
        }
      </Div>
      )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
