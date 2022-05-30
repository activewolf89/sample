  import React,{Component} from "react";
  import styled from 'styled-components';
  import Div from 'shared/Div';
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
class Class extends Component{
  constructor(props){
    super(props)
    this.state = {
      play: false
    }
    this.handleVideo = this.handleVideo.bind(this)
  }
  handleVideo = function(){
    alert('click')
    if(this.state.play){
      this.refs.vidRef.pause();
    } else {
      this.refs.vidRef.play();
    }
    this.setState({
      play: !this.state.play
    })
  }

  render(){
    return(
      <Div maxWidth='640px'>
        <Div pr>
          <div className="content" dangerouslySetInnerHTML={{__html: ''}}></div>
        </Div>
        {/* <video
          onClick={this.handleVideo}
          ref='vidRef'
          poster="https://ltdennyphotobucket.s3.us-west-2.amazonaws.com/001-170-00583/still.jpg"
          autoPlay="autoplay"
          width='100%'
          muted
          controls="controls"
          loop
          >
          <source src="https://ltdennyphotobucket.s3.us-west-2.amazonaws.com/001-170-00583/video.mp4"  type="video/mp4" />
        </video> */}
      </Div>
    )
  }
}

export default Class;
