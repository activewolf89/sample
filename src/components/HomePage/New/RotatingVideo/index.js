import React from 'react';
import Div from 'shared/Div';
import styled from 'styled-components';
import StyledLink from 'shared/StyledLink';
import Button from 'shared/Button';
import FloatingButton from '../FloatingButton';
import { RibbonContainer,  LeftLargeRibbon,RightLargeRibbon  } from "react-ribbons";

const StyledIframe =  styled.iframe`
  width: 100vw;
  height: 100vw;
  @media only screen and (min-width: 500px) {
    width: 500px;
    height: 500px;
  }
@media only screen and (min-width: 996px) {
  width: 400px;
  height: 400px;
}
@media only screen and (min-width: 1500px) {
  width: 600px;
  height: 600px;
}

`

// -----
const funcC0mp = (props) =>{
  return (
    <Div backgroundColor='black' textAlign='center'>
      {
        props.ribbonColor &&
        <RibbonContainer>
          <LeftLargeRibbon backgroundColor={props.ribbonColor} color="#f0f0f0" fontFamily="Arial">
            <small style={{whiteSpace:'noWrap', fontWeight:'bold'}}>
              {props.ribbonText}
            </small>
          </LeftLargeRibbon>
        </RibbonContainer>
      }
      <StyledIframe title={props.moviename}
        // src={`https://v360.in/viewer4.0/vision360.html?d=${props.ItemKey}&btn=0&z=0&isBorderRadius=0&sv=0&surl=https%3a%2f%2fs4.v360.in%2fimages%2fcompany%2f308%2f&autoplay=1`}
        src={`https://ltdennyphotobucket.s3.us-west-2.amazonaws.com/${props.movieName}/${props.movieName}.html`}
      scrolling="no" frameBorder="0" seamless='seamless' />
      <Div >

        <FloatingButton
          buttonObj={props.buttonObj}
          text={props.text}
        />
      </Div>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
