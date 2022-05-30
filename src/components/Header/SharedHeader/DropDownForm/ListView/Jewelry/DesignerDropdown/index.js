import React,{Component} from "react";

import Div from 'shared/Div';
import FontAwesome from 'react-fontawesome';
import { CSSTransition } from 'react-transition-group';
import OutsideAlerter from "shared/OutsiderAlert";
import Span from 'shared/Span';
import A from 'shared/A';
import Li from 'shared/Li';
import StyledLink from 'shared/StyledLink';
import NoMPUl from 'shared/NoMPUl';
// -----

import styled from 'styled-components';

const StyledDiv = styled(Div)`
  width: auto;
  position: block;

`

class DesignerLink extends Component {
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
      <Div position="relative"  >
        <Div themedNoBorder
          width="100%"

          onClick={()=>{!this.state.isAlertOpen && this.handleToggle('button')}}>
          <Span whiteSpace="nowrap" clickable>
            Designers
            <FontAwesome style={{marginLeft:'3px'}} name={this.state.isOpen ? "caret-up": "caret-down"}></FontAwesome>
          </Span>
          <CSSTransition
            in={this.state.isOpen}
            timeout={300}
            classNames="footer"
            onExited={this.handleAllowButton}
          unmountOnExit>
            <OutsideAlerter callback = {()=>{this.handleToggle('alert')}}>
              <StyledDiv  border="1px solid gray" color="black"  zIndex="100" width="100%"  opacity="100%" backgroundColor="white" maxHeight='400px' overflowY='auto'>
                <NoMPUl childrenPadding='10px' childrenBorderBottom='1px solid black'>

                  {
                    this.props.designersArray.filter((a)=>{

                      return a.categories.includes(this.props.catId)
                    }).map((designer,idx)=>{
                      return(
                        <Li key={idx} onClick={()=>{(this.props.onHamburgerClick && this.props.onHamburgerClick('close')) && this.props.travelTo()}}>
                          <StyledLink to={this.props.rootPath + "?ItemVendorName=" + designer.name} underline>
                            <A color='black'>
                              {designer.name}
                            </A>
                          </StyledLink>
                        </Li>
                      )
                    })
                  }
                </NoMPUl>
              </StyledDiv>


            </OutsideAlerter>
          </CSSTransition>

        </Div>
      </Div>

    )
  }

}
DesignerLink.propTypes = {
}
export default DesignerLink;
