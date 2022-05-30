import React,{Component} from 'react';
import Div from 'shared/Div';
import Li from 'shared/Li';
import FontAwesome from 'react-fontawesome';
import A from 'shared/A';
import NoMPUl from 'shared/NoMPUl';
import { CSSTransition } from 'react-transition-group';
import StyledLink from 'shared/StyledLink';
import OutsideAlerter from "shared/OutsiderAlert";

// -----
class FaqSection extends Component{
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
    if(!whereFrom === 'button' && !this.state.isAlertOpen){

  this.setState({
    isOpen: !this.state.isOpen,
    isAlertOpen: true
  },()=>{
    if(whereFrom ==='alerter'){
      this.setState({
        isAlertOpen: false,
        isOpen: false
      })
    }
  })
} else {
  this.setState({
    isOpen: !this.state.isOpen,
    isAlertOpen: true
  })
}
  }
  render(){
  return (
      <Div themedNoBorder width="100%"  >
        <Div display="flex" flexWrap='nowrap' alignItems='center' cursor='pointer' onClick={()=>{!this.state.isAlertOpen && this.handleToggle('button')}} >
          FAQ
          <FontAwesome name={this.state.isOpen ? "caret-up": "caret-down"} style={{marginLeft:'3px'}}></FontAwesome>
        </Div>

        <CSSTransition
          in={this.state.isOpen}
          timeout={300}
          classNames="footer"
          onExited={this.handleAllowButton}
        unmountOnExit>
          <OutsideAlerter callback = {()=>{this.handleToggle('alerter')}}>

            <Div  border="1px solid gray" top='37px'  color="black" overflow='visible'  left='0'   zIndex="100" width="100%"  maxWidth='400px' maxHeight='500px' overflowY='auto'   backgroundColor="white">
              <NoMPUl childrenPadding="5px" childrenBorderBottom="1px solid gray" >

                {this.props.faqArray && this.props.faqArray.map((option,idx)=>{
                  return (
                    <Li  key={idx} onClick={()=>{(this.props.onHamburgerClick && this.props.onHamburgerClick()); this.props.onFaqClick();this.props.travelTo()}}>
                      <Div padding='5px'>

                        <StyledLink to={this.props.rootPath + '?faq=' + this.props.combinedId + ',' + option.id} >
                          <A color='black'>

                            {option.question}
                          </A>
                        </StyledLink>
                      </Div>
                    </Li>
                  )
                })}
              </NoMPUl>
            </Div>
          </OutsideAlerter>
          </CSSTransition>
      </Div>
      )
      }
      }


export default FaqSection;
