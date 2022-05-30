import React,{Component} from "react";

import Div from 'shared/Div';
import Li from 'shared/Li';
import FontAwesome from 'react-fontawesome';
import { CSSTransition } from 'react-transition-group';
import OutsideAlerter from "shared/OutsiderAlert";
import StyledLink from "shared/StyledLink";
import Span from 'shared/Span';
import NoMPUl from 'shared/NoMPUl';
import styled from 'styled-components';
import A from 'shared/A';
const StyledDiv = styled(Div)`
position: relative;
  @media only screen and (min-width: 996px) {
  position: absolute;
  }
`
// -----
class FAQLink extends Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen: false,
      isAlertOpen: false
    }
    this.handleToggle = this.handleToggle.bind(this)
    this.handleAllowButton = this.handleAllowButton.bind(this)
  }
  handleAllowButton = function(){
    this.setState({
      isAlertOpen: false
    })
  }
  handleToggle = function(whereFrom){

  this.setState({
    isOpen: !this.state.isOpen,
    isAlertOpen: true
  })
  }
  render(){

    return (
      <Div position="relative" >
        <Div themedNoBorder width="100%" color="white" onClick={()=>{!this.state.isAlertOpen && this.handleToggle('button')}}>
          <Div display="flex">

            <Span whiteSpace="nowrap">
              {this.props.section.title}(?)s
              <FontAwesome name={this.state.isOpen ? "caret-up": "caret-down"} style={{marginLeft:'3px'}}></FontAwesome>
            </Span>
          </Div>
        </Div>
        <CSSTransition
          in={this.state.isOpen}
          timeout={300}
          classNames="footer"
          onExited={this.handleAllowButton}
        unmountOnExit>
          <OutsideAlerter callback = {()=>{this.handleToggle('alert')}}>
            <StyledDiv  border="1px solid gray" color="black"  zIndex="100" width="100%"  opacity="100%" backgroundColor="white">
              <NoMPUl childrenPadding="5px" childrenBorderBottom="1px solid gray"  maxHeight="300px" overflow="auto">

                {this.props.section.faqArray && this.props.section.faqArray.map((option)=>{
                  return (
                    <Li  key={option.question} onClick={()=>{this.props.onFaqClick();this.props.travelTo()}}>
                      <StyledLink to={this.props.rootPath + '?faq=' + this.props.combinedId + ',' + option.id} >
                        <A>
                          z  {option.question}
                        </A>
                      </StyledLink>
                    </Li>
                  )
                })}
              </NoMPUl>
            </StyledDiv>
          </OutsideAlerter>
        </CSSTransition>
      </Div>
    )
  }

}
FAQLink.propTypes = {
}
export default FAQLink;
