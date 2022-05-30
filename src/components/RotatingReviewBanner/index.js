/**
 *
 * Shop
 *
 */

import React from 'react';
import Div from 'shared/Div';
import Slider from "react-slick";
import Li from 'shared/Li';
import FontAwesome from 'react-fontawesome';
import ReviewBox from './ReviewBox';
require('./arrows.css')
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

export class RotatingMasterBanner extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props)
    this.state = {
      settings: {},
      fromCategory: props.fromCategory
    }
  }


  UNSAFE_componentWillReceiveProps (props){
    var settings = {}
    settings = {
      variableWidth:true,

      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      infinite: true,

    };

    this.setState({
      settings: settings
    })
  }
  render() {
    return (
      <Div    position="relative" padding="10px" maxWidth='2000px'>
        <Div position='relative' >
          <Slider {...this.state.settings} >
            { this.props.googleReviewObject.reviews.map((review,idx,arr)=>{
              return (
                <Li key={idx} padding='10px'>
                  <ReviewBox
                    review = {review}
                  />
                </Li>
              )
            })}
          </Slider>
        </Div>
      </Div>
    );
  }
}


export default RotatingMasterBanner
