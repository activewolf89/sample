import React,{Component} from "react";

import Div from 'shared/Div';
import Vision360 from 'shared/Vision360';
import styled from 'styled-components';
import Video from './Video'
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
class Class extends Component{
  constructor(props){
    super(props)
    this.state = {
      toggle: false,
      lifestyle: this.props.lifestyle
    }
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle = function(){
    this.setState({
      toggle: !this.state.toggle,
    })
  }
  render(){
    return (
      <Div position='relative' >
        {
          this.props.lifestyleOption &&
          <Div   zIndex='1'  top='5px' right='5px' position='absolute' border="2px solid gray" cursor='pointer' onClick={this.handleToggle}>
            {
              !this.state.toggle ?
                <Vision360
                  lifestyle = {'lifestyle_small.jpg'}
                  ItemKey={this.props.ItemKey}
                  MasterStyle = {this.prop.ItemStyle}
                  specs={"120px"}
                />:
                <Div >
                  <Vision360
                    ItemKey={this.props.ItemKey}
                    specs={"120px"}
                    MasterStyle = {this.prop.ItemStyle}

                  />
                </Div>
            }
          </Div>
        }
        {
          !this.state.toggle ?
            // <Div >
            //   <Video title={'001-170-00583'}  />
            // </Div>:
              <Div >
                <StyledIframe title={this.props.moviename}
                  // src={`https://v360.in/viewer4.0/vision360.html?d=${this.props.ItemKey}&btn=0&z=0&isBorderRadius=0&sv=0&surl=https%3a%2f%2fs4.v360.in%2fimages%2fcompany%2f308%2f&autoplay=1`}
                  src={`https://ltdennyphotobucket.s3.us-west-2.amazonaws.com/${this.props.movieName}/${this.props.movieName}.html`}
                scrolling="no" frameBorder="0" seamless='seamless' />
              </Div>:
              <Div >
                <Vision360
                  MasterStyle = {this.prop.ItemStyle}
                  lifestyle = {"lifestyle.jpg"}
                  ItemKey={this.props.ItemKey}
                  specs={"400px"}
                />
              </Div>
        }
      </Div>
  )
}
}
Class.propTypes = {
}
export default Class;
