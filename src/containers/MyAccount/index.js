/**
 *
 * Shop
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {handleEditUser,handleClose,handleSendEmailResetLink,handleForgetPassword,handleCheckIfEmailsExists,clearUserInput,handleAttemptLogin,handlePullSessionData,handleInputChange,handleInputSubmit,handleDataToSend,handleLogOut} from './actions';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import { withRouter} from 'react-router';
import Login from './Components/Login';
import {handleUpdateItem,} from 'containers/Item/actions'
import {handleAddToWishlist,handleContactClick} from 'containers/App/actions'
import Div from 'shared/Div';

import {
  makeSelectRequestPasswordSuccess,
  makeSelectRequestPasswordReset,
  makeSelectServerErrors,
  makeSelectLoginInfo,
  makeSelectRegisterInfo,
  makeSelectUserToken,
  makeSelectUserProfile
} from './selectors';


export class MyAccount extends React.Component { // eslint-disable-line react/prefer-stateless-function

  UNSAFE_componentWillReceiveProps(props){
    if(props.loginInfoObject.submit){
      props.handleAttemptLogin(props.loginInfoObject,false,props.history)
    }
    if(Object.keys(props.userProfile).length > 0){
      props.handleContactClick('closeIt')
    }
  }
  render() {
    return (
      <Div padding='0 0 50px 0'  display='flex' justifyContent='center'>
        <Login
          onContactClick = {this.props.handleContactClick}
          onToggleDetail = {this.props.onToggleDetail}
          onClose = {this.props.handleClose}
          history = {this.props.history}
          onInputSubmit = {this.props.handleInputSubmit}
          loginInfoObject = {this.props.loginInfoObject}
          registerInfoObject = {this.props.registerInfoObject}
          onInputChange={this.props.handleInputChange}
          onCheckIfEmailExists = {this.props.handleCheckIfEmailsExists}
          serverErrorObject = {this.props.serverErrorObject}
          isPasswordRequestReset = {this.props.isPasswordRequestReset}
          isPasswordRequestSuccess = {this.props.isPasswordRequestSuccess}
          onForgetPassword = {this.props.handleForgetPassword}
          onSendEmailResetLink = {this.props.handleSendEmailResetLink}
        />
      </Div>
    );
  }
}



const mapStateToProps = createStructuredSelector({
  isPasswordRequestReset: makeSelectRequestPasswordReset(),
  isPasswordRequestSuccess: makeSelectRequestPasswordSuccess(),
  serverErrorObject: makeSelectServerErrors(),
  loginInfoObject:makeSelectLoginInfo(),
  registerInfoObject:makeSelectRegisterInfo(),
  userToken: makeSelectUserToken(),
  userProfile: makeSelectUserProfile()
});

function mapDispatchToProps(dispatch) {
  return {
    handleEditUser:(key,obj,custId) => dispatch(handleEditUser(key,obj,custId)),
    handleUpdateItem: (obj) => dispatch(handleUpdateItem(obj)),
    handleContactClick: (evt,obj) => dispatch(handleContactClick(evt,obj)),
    handleAddToWishlist: (itemNumber,userProfile) => dispatch(handleAddToWishlist(itemNumber,userProfile)),
    handleClose:() =>{dispatch(handleClose())},
    handleSendEmailResetLink: (email)=>{dispatch(handleSendEmailResetLink(email))},
    handleForgetPassword: ()=>{dispatch(handleForgetPassword())},
    handleCheckIfEmailsExists: (email)=>{dispatch(handleCheckIfEmailsExists(email))},
    handleClearUserInput: ()=>{dispatch(clearUserInput())},
    handleAttemptLogin: (userObj,checkIfdirect,history) => dispatch(handleAttemptLogin(userObj,checkIfdirect,history)),
    handlePullSessionData: (sessionToken)=> dispatch(handlePullSessionData(sessionToken)),
    handleLogOut: ()=> dispatch(handleLogOut()),
    handleDataToSend: (userRequest,obj) => dispatch(handleDataToSend(userRequest,obj)),
    handleInputChange: (objName,name,val)=> dispatch(handleInputChange(objName,name,val)),
    handleInputSubmit: (objName) => dispatch(handleInputSubmit(objName))
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'myAccount', reducer });
const withSaga = injectSaga({ key: 'myAccount', saga });

export default withRouter(compose(
  withReducer,
  withSaga,
  withConnect,
)(MyAccount));
