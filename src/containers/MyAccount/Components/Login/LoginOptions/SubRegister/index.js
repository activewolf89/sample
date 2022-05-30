import React,{Component} from "react";

import Div from 'shared/Div';
import {H3} from 'shared/H';
import RegisterForm from './RegisterForm';
import CheckIfAlreadyInSystem from './CheckIfAlreadyInSystem'
import cookie from 'react-cookies'

// -----
class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      response: cookie.loadAll()['hasBeenIn'] ? true:false,
      hasBeenIn: cookie.loadAll()['hasBeenIn'] ? true: false
    }
    this.handleResponse = this.handleResponse.bind(this);
    this.handleHasBeenIn = this.handleHasBeenIn.bind(this);
  }
  handleResponse = function(){
    var TenYears = new Date(Date.now() + (3600 * 1000 * 24 * 365 * 10));
    cookie.save('hasBeenIn', true, {expires:TenYears});
    this.setState({
      response: true
    })
  }
  handleHasBeenIn = function(){
    this.setState({
      hasBeenIn: true
    })
  }
  render(){
  return (
    <Div fontStyle='italic'>
      <H3 >
        Register
      </H3>
      <Div  position='relative'>
        {
          !this.state.response &&
          <CheckIfAlreadyInSystem
            onHasBeenIn = {this.handleHasBeenIn}
            onResponse = {this.handleResponse}
            hasBeenIn = {this.state.hasBeenIn}
            onForgetPassword ={this.props.onForgetPassword}
          />
        }
        <RegisterForm
          onInputChange = {this.props.onInputChange}
          objName = {this.props.objName}
          registerInfoObject = {this.props.registerInfoObject}
          onInputSubmit = {this.props.onInputSubmit}
          serverErrorObject ={this.props.serverErrorObject}
          onCheckIfEmailExists = {this.props.onCheckIfEmailExists}
          onAskQuestion = {this.props.onAskQuestion}

        />
      </Div>
      </Div>
  )
}
}
Register.propTypes = {
}
export default Register;
