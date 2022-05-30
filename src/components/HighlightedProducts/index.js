/**
 *
 * Shop
 *
 */

import React from 'react';
import Div from 'shared/Div';
import Title from 'shared/Title';
import ExtractImages from 'containers/App/HelperFunctions/ExtractImages';
import ShopCategory from 'containers/App/HelperFunctions/ShopCategory';
import ImageGallery from 'react-image-gallery';
require('./image-gallery.css')


export class HighlightedProducts extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props)
    this.state = {
      currentIndex: 0,

    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick = function(evt){
    this.setState({
      currentIndex: evt
    })
  }
  componentDidMount(){
    this.props.onGetHighlightedProducts(this.props.fromCategory,this.props.fromWhere)
  }

  render() {
    return (

      <Div >
        {
          this.props.highlightedProducts && this.props.highlightedProducts.length > 0 &&
          <Div minHeight="300px" >
            <Div borderBottom="1px solid white">
              <Title  capitalize>{this.props.fromWhere}</Title>
            </Div>
            <Div textAlign="center">

            </Div>
            <Div  display="flex" justifyContent="center">
              <ImageGallery
                onClick={(e)=>{this.props.history.push(ShopCategory(this.props.highlightedProducts[this.state.currentIndex].catId,'shop') + this.props.highlightedProducts[this.state.currentIndex].itKey)}}
                onSlide={(e)=>{this.handleClick(e)}}
                showFullscreenButton={false}
                showPlayButton={false}
                items={ExtractImages(this.props.highlightedProducts)}
              />
            </Div>
          </Div>
        }
      </Div>
    );
  }
}


export default HighlightedProducts
