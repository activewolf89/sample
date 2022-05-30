import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import Subline from './Subline';
import styled from 'styled-components';
var StyledDivR = styled(Div)`
  width: 100%;
  border-bottom: 2px solid white;
  @media only screen and (min-width: 996px) {
    width: 50%;
    display: inline-block;
    text-align: right;
    border-right: 2px solid white;
    border-bottom: 0px solid white;

  }
`
var StyledDivL = styled(Div)`
  width: 100%;

  @media only screen and (min-width: 996px) {
  padding: 0 0 0 30px;
    width: 50%;
    display: inline-block;
  }
`
var CheckMedia = function(){

  if (window.matchMedia('(max-width: 996px)').matches) {
    return false
    } else {
      return true
        //...

    }

}
const funcC0mp = (props) =>{
  return (
    <Div  width='100%' display='flex' >
      <StyledDivR   padding='0 30px 0 0'>

        <NoMPUl  display='flex' flexDirection='column' justifyContent='space-between' childrenPadding='5px 0'>
          <Li>
            <Subline
              destinationArray = {
                [
                {
                  linkTo:'/knowledge-center/who-we-are/about-us',
                  words: "25+ Years Family-Owned Small Business"
                }
                ]
              }
              checkedRight = {CheckMedia()}
            />
          </Li>
          <Li>
            <Subline
              destinationArray = {
                [
                {
                  linkTo:'/knowledge-center/who-we-are/about-us',
                  words: "Comfortable & Relaxed Shopping"
                }
                ]
              }
              checkedRight = {CheckMedia()}
            />
          </Li>
          <Li>
            <Subline
              destinationArray = {
                [
                {
                  linkTo:'/knowledge-center/services/services-overview',
                  words: 'On-site Goldsmith for Fast Service'
                }
                ]
              }
              checkedRight = {CheckMedia()}
            />
          </Li>

          <Li>
            <Subline
              checkedRight = {CheckMedia()}
              destinationArray = {
                [
                {
                  linkTo:'/knowledge-center/who-we-are/the-team',
                  words: 'Emotional Support Lap-Dogs'
                }
                ]
              }
            />
          </Li>
        </NoMPUl>
      </StyledDivR>
      <StyledDivL  >

        <NoMPUl  display='flex' flexDirection='column' justifyContent='space-between' childrenPadding='5px 0'>
          <Li>
            <Subline
              destinationArray = {
                [
                {
                  linkTo:'/shop/engagement-rings',
                  words: 'Engagement Rings'
                },
                {
                  linkTo:'/shop/wedding-bands',
                  words: 'Wedding Bands'
                },
                {
                  linkTo:'/shop/fine-jewelry',
                  words: 'Fine Jewelry'
                },
                ]
              }
            />
          </Li>
          <Li>
            <Subline
              destinationArray = {
                [
                {
                  linkTo:'/knowledge-center/designers/forevermark',
                  words: 'Responsible Natural Diamonds'
                }
                ]
              }

            />
          </Li>

          <Li>
            <Subline
              destinationArray = {
                [
                {
                  linkTo:'/knowledge-center/services/custom-scenarios',
                  words: 'Custom Services'
                }
                ]
              }
            />
          </Li>
          <Li>
            <Subline
              destinationArray = {
                [
                {
                  linkTo:'/knowledge-center/who-we-are/return-policy',
                  words: 'Transparent Refund & Return Policy'
                }
                ]
              }
            />
          </Li>
        </NoMPUl>
      </StyledDivL>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
