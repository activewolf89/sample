import styled from 'styled-components';
import React,{Component} from "react";

import Button from 'shared/Button'
import Div from 'shared/Div'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Video from './Video';
import {handleContactClick} from 'containers/App/actions';
import NoMPUl from 'shared/NoMPUl'
import Li from 'shared/Li';
import {H3} from 'shared/H';
import P from 'shared/P';
import VideoDescription from './VideoDescription';
const StyledButton = styled(Button)`
  width: 100vw;
  @media only screen and (min-width: 450px) {
  width: 600px;
  }
`
// -----
class VideoMaster extends Component{

  render(){
  return (
    <Div display='none'>
      <NoMPUl   display='flex' flexDirection='column' alignItems='center' >

        <Li>
          <H3>
            <P textAlign='center' fontStyle='italic'>
              {this.props.description}
            </P>
          </H3>
        </Li>
        <Li>
          <Video
            name={this.props.name}
          />
          {
            this.props.desList &&
            <VideoDescription
              desList = {this.props.desList}
            />
          }
        </Li>
        <Li>

          {
            this.props.contactButton &&
            <StyledButton  themedAccentNoBorder onClick={()=>{this.props.handleContactClick(this.props.contactButton.contactKey)}}>
              {this.props.contactButton.title}
            </StyledButton>
          }
        </Li>
      </NoMPUl>
    </Div>
  )
}
}
export function mapDispatchToProps(dispatch){
  return {
    handleContactClick: (evt,obj,comment) => dispatch(handleContactClick(evt,obj,comment)),
  }
}
const mapStateToProps = createStructuredSelector({
})
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(compose(
  withConnect
)(VideoMaster));
