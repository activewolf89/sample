import React,{Component} from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import SubLogin from './SubLogin';
import styled from 'styled-components';

const StyledNoMPUl = styled(NoMPUl)`
  display: flex;
  flex-direction: column;
  alignItems;center;
  @media only screen and (min-width: 996px) {
    flex-direction: row;
    justify-content: center;

  }
`


// -----
class funcC0mp extends Component{
    constructor(props){
      super(props)
      this.state = {
        askedQuestion: false
      }
      this.handleQuestion = this.handleQuestion.bind(this);
    }
    handleQuestion = function(){
      this.setState({
        askedQuestion: !this.state.askedQuestion
      })
    }
    render(){
  return (
    <Div >
      <StyledNoMPUl >
        <Li>
          <Div  minWidth='300px' >
            <form>
              <SubLogin
                onContactClick = {this.props.onContactClick}
                onToggleDetail = {this.props.onToggleDetail}
                onClose = {this.props.onClose}
                objName = {'loginInfo'}
                loginInfoObject = {this.props.loginInfoObject}
                onInputChange = {this.props.onInputChange}
                onInputSubmit = {this.props.onInputSubmit}
                serverErrorObject = {this.props.serverErrorObject}
                onForgetPassword = {this.props.onForgetPassword}
                isPasswordRequestReset = {this.props.isPasswordRequestReset}
                onSendEmailResetLink = {this.props.onSendEmailResetLink}
                isPasswordRequestSuccess = {this.props.isPasswordRequestSuccess}
                onAskQuestion = {this.handleQuestion}

              />
            </form>
          </Div>
        </Li>

      </StyledNoMPUl>
    </Div>
  )
}

}
funcC0mp.propTypes = {
}

export default funcC0mp;
