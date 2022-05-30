import React from 'react';
import Div from 'shared/Div';
import TacoriBanner from 'images/Tacori/Slider.png'
import Conversation from './Conversation';
import Slider from "react-slick";
import Button from 'shared/Button';
import FontAwesome from 'react-fontawesome';
import StyledLink from 'shared/StyledLink';
import P from 'shared/P';
import {H2} from 'shared/H';
import styled from 'styled-components'
var settings = {

  autoplaySpeed: 3000,
  slidesToShow: 1,
  dots: true,
  autoplay: true,
  speed:4000,
  infinite: true
};
const StyleH1 = styled.h1`
  font-size: 24px;
  @media only screen and (min-width: 996px) {
  font-size: 36px;
  }
`
const ChangingDiv = styled(Div)`
display: block;
height:210px;
background-position: center;
background-size: 95%;
background-repeat: no-repeat;
background-color: black;
  @media only screen and (min-width: 996px) {
  display: none;
  }
`
const ChangingDiv2 = styled(Div)`
display: none;
  @media only screen and (min-width: 996px) {
    display: block;
    height:600px;
    background-position: center;
    background-size: 95%;
    background-repeat: no-repeat;
    background-color: black;
    display: block;
  }
`
function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      style={{ ...style, position:'absolute', top:'85%',left:'90%', height:'50px',zIndex:1,  display: "block" }}
      onClick={onClick}
    >
      <FontAwesome name="arrow-circle-right" size="3x" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      style={{ ...style, position:'absolute', top:'85%',right:'90%', height:'50px',zIndex:1,  display: "block" }}
      onClick={onClick}
    >
      <FontAwesome name="arrow-circle-left" size="3x" />
    </div>
  );
}

// -----
const funcC0mp = (props) =>{
  return (
    <Div style={{maxWidth:'2000px', width:'100vw',height:'100%'}}>
      <Slider {...settings}>
        { props.destinationObj.map((obj,idx,arr)=>{
          return (
            <Div key={idx} position='relative'>
              <ChangingDiv  backgroundImg={obj.mobileImage}>
              </ChangingDiv>
              <ChangingDiv2 backgroundImg={obj.img}>
              </ChangingDiv2>
              <Div  textAlign='center' >
                <StyledLink textDecoration='underline' color='black'  to={obj.linkObj.link}>
                  <StyleH1 style={{color:'black'}}>
                    Shop {obj.header}
                  </StyleH1>
                </StyledLink>
                <P style={{fontStyle:'italic'}}>
                  {obj.description}
                </P>

              </Div>
            </Div>
          )
        })}
      </Slider>
      <Conversation />
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
