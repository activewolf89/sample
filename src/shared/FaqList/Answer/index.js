
import React,{Component} from "react";
import Span from 'shared/Span';
import Div from 'shared/Div';
import FontAwesome from 'react-fontawesome';
import P from 'shared/P'
class Class extends Component{
constructor(props){
  super(props)
  this.state = {
    isOpen: false
  }
  this.handleToggle = this.handleToggle.bind(this);
}
handleToggle = function(){
  this.setState({
    isOpen: !this.state.isOpen
  })
}
render(){
  return(
    <Div onClick={this.handleToggle} cursor='pointer'>
      <Span fontStyle='italic' underline={this.state.isOpen ? true:false} fontWeight={this.state.isOpen ? 'bold':''}>
        {this.props.obj.question}
        <FontAwesome name={this.state.isOpen ? 'caret-up':'caret-down'} />
      </Span>
      {
        this.state.isOpen &&
        <P>
          {this.props.obj.answer}
        </P>
      }
    </Div>
  )
}
}

export default Class;
