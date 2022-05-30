import React, { Component } from "react";
import Slider from "react-slick";
import Li from 'shared/Li';
import Div from 'shared/Div';
import DetailBox from './DetailBox';
import StyledLink from 'shared/StyledLink';
import FontAwesome from 'react-fontawesome';
const RotateBanner = (props) =>{

  let imageArray = props.imageArray.map((imageObject,idx)=>{
    return (
      <Li key={idx}>

        <StyledLink to={imageObject.link}>
          <DetailBox
            backgroundImg = {imageObject.image}
            backgroundTitle = {imageObject.title}
          />
        </StyledLink>
      </Li>
    )
  })
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

    return (
      <Div themed padding="0 0 30px 0" >
        {
          props.loading ?
            <Div display="flex" justifyContent="center" padding="150px">
              <FontAwesome name="spinner" spinning spin size="lg" />
            </Div>
          :
          <Slider {...settings}>
            {imageArray}
          </Slider>
        }
      </Div>
    );
}


export default RotateBanner;
