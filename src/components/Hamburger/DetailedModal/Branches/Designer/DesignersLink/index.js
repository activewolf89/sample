import React,{Component} from "react";

import Div from 'shared/Div';
import FontAwesome from 'react-fontawesome';
import { CSSTransition } from 'react-transition-group';
import OutsideAlerter from "shared/OutsiderAlert";
import Span from 'shared/Span';
import Li from 'shared/Li';
import StyledLink from 'shared/StyledLink';
import styled from 'styled-components';
import Ul from 'shared/Ul';
import ShopCategoryName from 'containers/App/HelperFunctions/ShopCategoryName';
import A from 'shared/A'
// -----
const StyledDiv = styled(Div)`
  width: auto;
  position: block;

`

var GenerateLink = function(designer,catId){
  var obj = {
    110: '/shop/wedding-bands/mens-band',
    115: 'shop/wedding-bands/ladies-band',
    150: '/shop/fine-jewelry/earring',
    165: '/shop/fine-jewelry/pendant',
    130: '/shop/fine-jewelry/fine-ring',
    170: '/shop/fine-jewelry/bracelet',
    999: '/shop/fine-jewelry/other',
    500: '/shop/fine-jewelry/watches',
    190: '/shop/loose-diamonds',
    140: '/shop/engagement-rings',
    'all':'/shop'
  }

  return obj[catId] + "?ItemVendorName=" + designer
}
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
          onClick={()=>{!this.state.isAlertOpen && this.handleToggle('button')}}>
          <Span whiteSpace="nowrap" clickable>
            {this.props.obj.name}
            <FontAwesome style={{marginLeft:'3px'}} name={this.state.isOpen ? "caret-up": "caret-down"}></FontAwesome>
          </Span>
          <CSSTransition
            in={this.state.isOpen}
            timeout={300}
            classNames="footer"
            onExited={this.handleAllowButton}
          unmountOnExit>
            <OutsideAlerter callback = {()=>{this.handleToggle('alert')}}>
              <StyledDiv color='black'   zIndex="100" width="100%"  opacity="100%" backgroundColor="white">
                <Ul childrenBorderBottom='1px solid black'  >
                  <Li onClick={()=>{this.props.travelTo()}} padding='5px'>
                    <StyledLink to={GenerateLink(this.props.obj.name, 'all')}  underline>
                      <A color='black'>
                        Shop All
                      </A>
                    </StyledLink>
                  </Li>

                  {
                    this.props.obj.categories.map((catId,idx)=>{
                      return(
                        <Li key={idx} onClick={()=>{this.props.travelTo()}} padding='5px'>
                          <StyledLink to={GenerateLink(this.props.obj.name, catId)}  underline>
                            <A color='black'>
                              {ShopCategoryName(catId)}
                            </A>
                          </StyledLink>
                        </Li>
                      )
                    })
                  }
                </Ul>
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
