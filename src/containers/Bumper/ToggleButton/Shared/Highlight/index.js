import React,{Component} from "react";

import Span from 'shared/Span';
import Div from 'shared/Div';
import FontAwesome from 'react-fontawesome';
// -----
class funcC0mp extends Component{
  constructor(props){
    super(props);
    this.state = {
      flashColor:this.props.flashColor ? this.props.flashColor:'green',
      toggle: false,
      off: 'gray',
      count: 0,
      interval: false
    }
    this.handleToggle = this.handleToggle.bind(this)
  }
  componentDidMount(){
    if(this.props.flash){

    var self = this;
  var interval =  setInterval(function(){
    if(self.state.count > 4){
    clearInterval(interval)
    }
      self.handleToggle()
    }, 2000);
    this.setState({
      interval: interval
    })
  }


  }
  componentWillUnmount(){
    if(this.state.interval){
  clearInterval(this.state.interval)
}
  }
  handleToggle = function(){
    this.setState({
      toggle: !this.state.toggle,
      count: this.state.count + 1
    })
  }
  render(){

  return (
    <Div

      border='2px solid gray'
      borderRadius="0 10px 10px 0"
      padding="5px"
      display='flex' justifyContent='center' flexWrap='noWrap' alignItems='center'  backgroundColor={this.state.toggle ? 'green': 'white'}>
      <Span>
        {this.props.name}
      </Span>
      <FontAwesome name={this.props.toggle ? "caret-right":"caret-left"} />
    </Div>
  )
}
}
funcC0mp.propTypes = {
}
export default funcC0mp;
