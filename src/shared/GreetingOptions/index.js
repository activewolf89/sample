import React,{Component} from "react";

import Div from 'shared/Div';
import Greeting from './Greeting';

// -----
class funcC0mp extends Component {
  constructor(props){
    super(props);
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
  return (
    <Div >
      <Div onClick={this.handleToggle} position='relative'>

        <Greeting
          isOpen = {this.state.isOpen}
          email = {this.props.userProfile.email}
        />
        {
          this.state.isOpen &&
          <Div height='300px' width='300px' right='0' backgroundColor='white' color='black'  position='absolute'>
            Test
          </Div>
        }
      </Div>

    </Div>
  )
}
}
funcC0mp.propTypes = {
}
export default funcC0mp;
