import React,{Component} from "react";

import Div from 'shared/Div';
import Span from 'shared/Span';
import Li from 'shared/Li';
import StyledLink from "shared/StyledLink";
import NoMPUl from 'shared/NoMPUl';
import FaqSection from './FaqSection'
// -----
class KnowledgeLink extends Component {
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
      <Div position="relative"  width='100%' >
        <Div  width="100%" onClick={()=>{!this.state.isAlertOpen && this.handleToggle('button')}}>
          <NoMPUl display="flex" childrenPadding='0 5px'>
            {
              this.props.obj.faqArray &&
              <Li>
                <FaqSection
                  combinedId = {this.props.topId + ',' + this.props.sectionId}
                  rootPath = {this.props.rootPath}
                  onFaqClick = {this.props.onFaqClick}
                  topId={this.props.topId}
                  faqArray = {this.props.obj.faqArray}
                  onHamburgerClick = {this.props.onHamburgerClick}
                  travelTo={this.props.travelTo}
                />
              </Li>
            }
            <Div position='absolute' left="100px">
              <Li onClick={()=>{(this.props.onHamburgerClick && this.props.onHamburgerClick()); this.props.travelTo()}}>
                <StyledLink to={this.props.obj.url}>
                  <Div themedAccent>
                    <Span whiteSpace='nowrap'>
                      {this.props.section.title}
                    </Span>
                  </Div>
                </StyledLink>
              </Li>

            </Div>
          </NoMPUl>
        </Div>

      </Div>
    )
  }

}
KnowledgeLink.propTypes = {
}
export default KnowledgeLink;
