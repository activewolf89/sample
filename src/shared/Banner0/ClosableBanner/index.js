import React,{Component} from "react";
import Div from 'shared/Div';
import OpeningImage from './OpeningImage';
import ClosingImage from './ClosingImage';
import CenterImage from './CenterImage';
import backgroundImg from 'images/backgroundImg.jpg';

class ClosableBanner extends Component{
  constructor(props){
    super(props)
    this.state ={
      isOpen: false
    }
    this.handleClickableImage=this.handleClickableImage.bind(this)
  }
  handleClickableImage = function(){
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render(){
    return(
      <Div>
        <Div position="relative" width="100%" height="320px" flexWrap="nowrap" display="flex">
          <OpeningImage left image={backgroundImg}  />

          <CenterImage
            highlightedProduct = {this.props.highlightedProduct}
            isOpen = {this.state.isOpen}
            onClickableImage = {this.handleClickableImage} />

        </Div>

        {
          this.state.isOpen &&
          <ClosingImage
            highlightedProduct = {this.props.highlightedProduct}
            isOpen={this.state.isOpen} />
        }
      </Div>
    )
  }
}

export default ClosableBanner;
