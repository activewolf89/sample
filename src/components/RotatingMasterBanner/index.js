/**
 *
 * Shop
 *
 */

import React from 'react';
import Div from 'shared/Div';
import Slider from "react-slick";
import Li from 'shared/Li';
import HomepageFeatured from './HomepageFeatured';
import DetailBox from './DetailBox';
import FontAwesome from 'react-fontawesome';
import Skeleton from 'react-loading-skeleton';
import MasterItemStyleConverter from 'containers/App/HelperFunctions/MasterItemStyleConverter.js'
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

  componentDidMount(){
    this.props.onGetRotatingBanner(this.props.fromCategory,this.props.getUnique, this.props.fromDesigner ? this.props.fromDesigner:'generic')
  }
  UNSAFE_componentWillReceiveProps (props){
    var settings = {}
    if(this.state.fromCategory !== props.fromCategory){
      this.props.onGetRotatingBanner(props.fromCategory,this.props.getUnique, props.fromDesigner ? props.fromDesigner:'generic')
      this.setState({
        fromCategory: props.fromCategory
      })
    }
    if(!props.isRotatingBannerLoading){
      settings = {
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        variableWidth:true,
        infinite: false
      };
    }

    this.setState({
      settings: settings
    })
  }
  render() {
    return (
      <Div themed   position="relative" maxWidth='2000px' >
        {
          this.props.isRotatingBannerLoading ?
            <Div display="flex" justifyContent="center" padding="150px">
              <FontAwesome name="spinner"  spin size="lg" />
            </Div>
          :
          <Div position='relative' >
            {
              this.props.rotatingBannerArray.length > 0 ?

                <Slider {...this.state.settings} >
                  { this.props.rotatingBannerArray.map((productObject,idx,arr)=>{
                    return (
                      <Li key={idx} >
                        <Div padding='10px' width='250px' overflow='hidden' >

                          {
                            this.props.getUnique === 'Homepage.featured' ?
                              <HomepageFeatured
                                productObject = {productObject}
                                idx={idx}
                                uniqueName={productObject.ItemMetaTitle}
                                to={productObject.ItemMetaMetaKeywords}
                                pictureName={productObject.ItemKey}
                              />:
                              <DetailBox
                                idx={idx}
                                MasterStyle = {MasterItemStyleConverter(productObject.ItemVendStyleCode)}
                                uniqueName={productObject[this.props.getUnique]}
                                getUnique = {this.props.getUnique}
                                to={this.props.to}
                                ItemCatId = {productObject.ItemCatId}
                                ItemKey = {productObject.ItemKey}
                                backgroundTitle = {productObject.ItemStyle}
                              />
                          }

                        </Div>
                      </Li>
                    )
                  })}
                </Slider>:
                <Div>
                  <Skeleton height={200} count={1} />
                </Div>
            }
          </Div>

        }
      </Div>
    );
  }
}


export default RotatingMasterBanner
