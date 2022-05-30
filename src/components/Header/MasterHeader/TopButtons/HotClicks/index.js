import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import ClickableTitle from './ClickableTitle';
import styled from 'styled-components';
import SearchMaster from 'containers/SearchMaster';
import Button from 'shared/Button';
import slightImage from 'images/veins.jpg'
import CheckEventTime from 'containers/App/Helpers/CheckEventTime';
import StyledLink from 'shared/StyledLink';
import FontAwesome from 'react-fontawesome';
const StyledButton = styled(Button)`
  color: white;
  overflow: hidden;

  background: url(${slightImage}) no-repeat;
          cursor:pointer;
          border: none;
          height: 45px;
`
// -----
const StyledDiv = styled(Div)`
  display: block;
  overflow: hidden;
  @media only screen and (min-width: 996px) {
    display: none;
  }
`
var StyledLi = styled(Li)`
  width: 20vw;
  height: 45px;
  overflow-y: hidden;
  border-top: 1px solid white;
`
const HotClicks = (props) =>{

  return (
    <Div position='relative' overflow="hidden">
      {
        props.isHamburgerOpen &&
        <Div  position='absolute' top='0' left='0' zIndex='10' width='20vw' >

        </Div>
      }
      <StyledDiv    >
        <NoMPUl  display='flex'   childrenBorderRight='1px solid white' alignItems='center'>
          <StyledLi   onClick={()=>{props.isHamburgerOpen && props.onHamburgerClick('')}}>
            {
              !props.isHamburgerOpen ?
                <Div    onClick={()=>{props.onHamburgerClick('open')}} >
                  <ClickableTitle
                    awesome = 'bars'
                    color={"white"}
                  />
                </Div>:
                <Div  onClick={()=>{props.onHamburgerClick('')}}>
                  <ClickableTitle
                    awesome = 'bars'
                    color={"gold"}
                  />
                </Div>
            }

          </StyledLi>


          <StyledLi >
            <Div position='relative'  >

              <StyledButton width='100%' >
                <SearchMaster
                  color="white"
                  history={props.history}
                  noLetter
                />
              </StyledButton>

            </Div>

          </StyledLi>
          <StyledLi  >
            <StyledButton width='100%'>
              <StyledLink  to="/shop?onSale=On&?sort=low-to-high">
                <Div  color='white'  fontWeight='bold'>
                  Sale
                  <FontAwesome name="gift" style={{color:'maroon', padding:'0 3px'}}  />
                </Div>
              </StyledLink>
            </StyledButton>

          </StyledLi>
          <StyledLi  >
            <Div  cursor='pointer'>
              <StyledLink to="/events">
                <StyledButton width='100%' >
                  <Div color='white' display='flex' flexWrap='nowrap'>
                    Events
                    <span className='badge badge-warning' id='lblCartCount'>
                      ({CheckEventTime(props.eventsChecklist)})
                    </span>
                  </Div>
                </StyledButton>
              </StyledLink>
            </Div>


          </StyledLi>
          <StyledLi onClick={props.onSaleToggle}>
            <Div >
              <StyledButton width='100%' >
                <Div color='white' display='flex' flexWrap='nowrap'>
                  <FontAwesome name="heart" style={{color:'red',padding:'0 2px'}} />
                  <FontAwesome name="user" style={{color:'white' ,padding:'0 2px'}} />
                  <FontAwesome name="shopping-cart" style={{color:'white' ,padding:'0 2px'}} />
                </Div>
              </StyledButton>

            </Div>
          </StyledLi>

        </NoMPUl>
      </StyledDiv>
    </Div>

  )
}
HotClicks.propTypes = {
}
export default HotClicks;
