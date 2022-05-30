import React,{Component} from "react";

import Div from 'shared/Div';
import Span from 'shared/Span';
import StyledLink from 'shared/StyledLink';
import FontAwesome from 'react-fontawesome';
import ReactCardFlip from 'react-card-flip';
import styled,{css} from 'styled-components';
// -----
class Class extends Component{
  constructor(props){
    super(props);
    this.state = {
      toggle:false,
      cap: 4,
      count: 0,
    }
  }
  componentDidMount(){
    this.timeout = setInterval(()=>{
      if(this.state.count < this.state.cap){
        this.setState({
          toggle: !this.state.toggle,
          count: this.state.count + 1
        })
      } else {
        clearInterval(this.timeout)
      }
    },4000)
  }
  componentWillUnmount(){
    clearInterval(this.timeout)
}
  render(){
  const {link,name,code,value,comment,justSuggestion} = this.props.promoObject;
  var StyledDiv = styled(Div)`
  ${ props => props.bottom && css`
    position: fixed;
    bottom:0;
    width:100vw;
    background-color: lightgray;
  `}
  `
  return (
    <Div>
      Test
    </Div>
  )
}

}

export default Class;
