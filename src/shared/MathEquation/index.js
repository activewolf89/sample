import React from 'react';
import Div from 'shared/Div';
import HighlightedFeature from 'shared/HighlightedFeature';
import HighlightedFeatureExplanation from 'shared/HighlightedFeatureExplanation';
import {H1,H3} from 'shared/H'
import styled from 'styled-components';
import Span from 'shared/Span'
  const StyledH3 = styled(H3)`
    font-size: 22px;
    @media only screen and (min-width: 996px) {
      font-size: 28px;

    }
  `

require('./threshold.css')
  var StyledDiv = styled(Div)`
  h1 {
    font-size: 28px;
    @media only screen and (min-width: 996px) {
      font-size: 36px;

    }
   overflow: hidden;
   text-align: center;
  }
  h1:before,
  h1:after {
   background-color: gray;
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
const MathEquation = (props) =>{
  return (
    <Div >
      <Div >

        <Div position='relative' minHeight='400px' display='flex' flexDirection='column' alignItems='center' height='100%' >
          <Div >
            {
                props.FeaturedItems[0] &&
              <HighlightedFeature
                selectCategoryValue = {props.selectCategoryValue}
                moviename={props.FeaturedItems[0] && props.FeaturedItems[0].ItemKey}
                color='black'
                title={props.FeaturedItems[0].ItemMetaTitle}
                hyperlink = {props.FeaturedItems[0].ItemMetaMetaDescription}
                shopButton = {props.FeaturedItems[0].ItemMetaMetaTitle}
              />
            }
          </Div>
          <Div>
            {
                props.FeaturedItems[0] &&
              <HighlightedFeatureExplanation
                color='black'
                title={props.FeaturedItems[0].ItemMetaTitle}
                hyperlink = {props.FeaturedItems[0].ItemMetaMetaDescription}
                shopButton = {props.FeaturedItems[0].ItemMetaMetaTitle}
              />
            }
          </Div>
        </Div>
        <Div margin='10px 0'>
          <StyledDiv  themedLightColor>
            <StyledDivSpan>
              <H1  fontWeight='bold' textAlign="center">
                Jewelry Inspiration
              </H1>
            </StyledDivSpan>
          </StyledDiv>
        </Div>
      </Div>
    </Div>
  )
}
MathEquation.propTypes = {
}
export default MathEquation;
