import React,{Component} from "react";
import Div from 'shared/Div';
import Icon from './Icon';
import IconDetail from './IconDetail';
import { CSSTransition } from 'react-transition-group';

class HamburgerOptions extends Component{
  constructor(props){
    super(props)
    this.state = {
      isOpen: false
    }
    this.handleIconClick = this.handleIconClick.bind(this)

  }
  handleIconClick = function(){
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render(){
    var key = Object.keys(this.props.object)[0]
    return (
      <Div position="relative" >
        {this.props.object[key].options ?
          <Div width="100%" onClick={this.handleIconClick}>
            <Div >
              <Icon bold={this.state.isOpen} iconKey={key} caretName={this.state.isOpen ? "caret-up":"caret-down"} />
              <CSSTransition
                in={this.state.isOpen}
                timeout={0}
                classNames="anotherGeneral"
              unmountOnExit>
                <Div >
                  <IconDetail
                    onNavigationClick = {this.props.onNavigationClick}
                    options = {this.props.object[key].options}
                  />
                </Div>
              </CSSTransition>
            </Div>
          </Div>:
          <Div onClick={()=>{this.props.onNavigationClick(key)}} display='flex' justifyContent='space-between'>
            <Icon iconKey={key} caretName={"caret-right"} />
          </Div>}
      </Div>
    )
  }
}

export default HamburgerOptions;
