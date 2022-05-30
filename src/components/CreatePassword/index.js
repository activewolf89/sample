import React,{Component} from "react";
import Div from 'shared/Div';
import {Redirect} from 'react-router'
import WrongEntry from './WrongEntry'
import CreateNewPassword from './CreateNewPassword'
class CreatePassword extends Component{
  constructor(props){
    super(props)
    this.state = {
      triggeredOnce: false,
      instantWrong: false
    }
  }

  componentDidMount(){
    if(this.props.history.location.search.length > 2){
      this.props.onCheckToken(this.props.history.location.search.slice(2,this.props.history.location.search.length - 1))
    } else {
      this.setState({
        instantWrong: true
      })
    }
  }
  UNSAFE_componentWillReceiveProps(props){
    if(props.newPasswordObject.submit && !this.state.triggeredOnce){
      var email = sessionStorage.getItem('aToken');

    this.props.updateUserPassword(props.newPasswordObject.password.value,email)
    sessionStorage.removeItem('aToken')

      this.setState({
        triggeredOnce: true
      })
    }
  }
  render(){
    return(
      <Div display='flex' justifyContent='center' >
        {
          this.props.isRedirectToAccount &&
          <Redirect to='/my-account' />
        }
        <Div border='1px solid black'>
          {
            this.props.isPasswordCreation === null && !this.state.instantWrong ?
              <Div>
                Loading...
              </Div>:
            this.props.isPasswordCreation === false || this.state.instantWrong ?
              <Div>
                <WrongEntry />
              </Div>:
              <CreateNewPassword
                onResetPassword = {this.props.onResetPassword}
                onInputChange = {this.props.onInputChange}
                newPasswordObject = {this.props.newPasswordObject}
              />
          }
        </Div>
      </Div>
    )
  }
}

export default CreatePassword;
