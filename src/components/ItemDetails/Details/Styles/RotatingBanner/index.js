import React from 'react';
import Div from 'shared/Div';
import Slider from "react-slick";
import ProductBox1 from 'components/ShopDetailsMaster/ProductBox1'
import FontAwesome from 'react-fontawesome';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <Div position='absolute' height='100%' right='0%' top='0' width='auto' zIndex='1' themed opacity='.7' onClick={onClick}>
      <Div
        cursor='pointer'
        display='flex'
        height='100%'
        alignItems='center'
        justifyContent='center'
      >
        <Div>
          <FontAwesome name="arrow-circle-right" size="3x" />
        </Div>
      </Div>
    </Div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <Div position='absolute' height='100%' width='auto' zIndex='1' themed opacity='.7' onClick={onClick}>
      <Div
        cursor='pointer'
        display='flex'
        height='100%'
        alignItems='center'
        justifyContent='center'
      >
        <Div>
          <FontAwesome name="arrow-circle-left" size="3x" />
        </Div>
      </Div>
    </Div>
  );
}
var settings = {
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
   infinite: false,
   variableWidth: true,
   responsive: [
  {
    breakpoint: 996,
    settings: {
      variableWidth: false
    }
  }
  ]
};
//shared

//-----------------
const RotatingBanner = (props) =>{
  return (

      <Div backgroundColor='white' width='100vw' maxWidth='1500px' overflow='hidden'>
        <Slider {...settings}>
          {props.similar.map((obj,idx)=>{
            return (
              <Div key={idx} padding="5px" overflow='hidden'>
                <ProductBox1
                  mobile
                  fromStyles
                  onListPage
                  onUpdateItem = {props.onUpdateItem}
                  product={obj}
                  history={props.history}
                  onAddToWishlist = {props.onAddToWishlist}
                />
              </Div>
            )
          })}
        </Slider>
      </Div>

  )
}
export default RotatingBanner;
