import React from 'react';
import Div from 'shared/Div';
import lightbox from 'images/lightbox.jpg'
import { RibbonContainer,  LeftLargeRibbon,RightLargeRibbon  } from "react-ribbons";
import Button from 'shared/Button';
import StyledLink from 'shared/StyledLink';
import styled from 'styled-components';
import CallToAction from '../Banner/CallToAction'
import ReWords from '../Banner/ReWords'
import FloatingButton from '../FloatingButton'

const StyledDivCover = styled(Div)`
  background-size: cover;
  @media only screen and (min-width: 996px) {
  background-size: cover;
  }
`

const StyledDiv = styled(Div)`
margin: 0px 0px 30px 0px;

  @media only screen and (min-width: 996px) {
  margin: 0px;
  }
`
const FloatingDiv = styled(Div)`
  position: absolute
  top: 100%;
  left: 50%;
  width: 100%;
  @media only screen and (min-width: 996px) {
  width: auto;
  }
  transform: translate(-50%,-50%);
`
const FloatingDiv2 = styled(Div)`

  position: absolute
  top: 10%;
  left: 50%;
  width: 100%;
  @media only screen and (min-width: 996px) {
  width: auto;
  }
  transform: translate(-50%,-50%);
`
// -----
const funcC0mp = (props) =>{
  return (
    <StyledLink to={props.buttonObj.url} stop={!props.noButton}>

      <StyledDiv position='relative' cursor={props.noButton ? 'pointer':''} >

        <StyledDivCover height={props.height ? props.height: '300px'} border='2px solid black' margin='5px 0' backgroundImg={props.img} backgroundRepeat='no-repeat' backgroundPosition='center' backgroundColor='black' >
          {
            props.ribbonColor &&
            <RibbonContainer className="custom-class">
              {
                props.left ?
                  <LeftLargeRibbon backgroundColor={props.ribbonColor} color="#f0f0f0" fontFamily="Arial">
                    <small style={{whiteSpace:'noWrap', fontWeight:'bold'}}>
                      {props.ribbonText}
                    </small>
                  </LeftLargeRibbon>:
                  <RightLargeRibbon backgroundColor={props.ribbonColor} color="#f0f0f0" fontFamily="Arial">
                    <small style={{whiteSpace:'noWrap', fontWeight:'bold'}}>
                      {props.ribbonText}
                    </small>
                  </RightLargeRibbon>
              }
            </RibbonContainer>
          }
        </StyledDivCover>
        {
          !props.noButton &&

          <FloatingButton
            buttonObj={props.buttonObj}
            text={props.text}
          />
        }

      </StyledDiv>
    </StyledLink>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
