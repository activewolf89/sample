import React,{Component} from "react";

import Div from 'shared/Div';
import Greeting from './Greeting';
import GreetingOptions from './GreetingOptions';
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
    <Div cursor = 'pointer' height='100%' display='flex' justifyContent='center' >
      <Div  position='relative'>
        <Greeting
          onToggle = {this.handleToggle}
          color={this.props.color}
          isOpen = {this.state.isOpen}
          email = {this.props.userProfile.email}
          onContactClick={this.props.onContactClick}
        />
        {
            this.props.userProfile.email && this.state.isOpen &&
          <GreetingOptions
            onToggle={this.handleToggle}
            onLogOut = {this.props.onLogOut}
            userProfile={this.props.userProfile}
            onContactClick={this.props.onContactClick}

          />

        }

      </Div>

    </Div>
  )
}
}
funcC0mp.propTypes = {
}
export default funcC0mp;
