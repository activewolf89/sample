import styled,{css} from 'styled-components';
import { prop} from 'styled-tools';
import React,{Component} from "react";

import Button from 'shared/Button'
import Div from 'shared/Div'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Hours from 'components/App/AppModal1/HoursTab';
import {
  makeSelectUserProfile
} from 'containers/MyAccount/selectors'
import A from 'shared/A';
import P from 'shared/P'
import RemoveWishlist from 'containers/App/HelperFunctions/ClearWishlist'
// -----
class ClearWishlist extends Component{
  constructor(props){
    super(props);
    this.state = {
      warning: false
    }
    this.handleAskWarning = this.handleAskWarning.bind(this);
  }
  handleAskWarning = function(){
    this.setState({
      warning: true
    })
  }
  render(){
  return (
    <Div  textAlign='center'>
      <A color='maroon' fontWeight='bold' onClick={()=>{this.handleAskWarning()}}>
        Clear All Wishlist
      </A>
      {
        this.state.warning &&
        <Div>
          <P textAlign='center'>
            This will remove your wishlist & any saved items, proceed?
          </P>
          <Div display='flex' justifyContent='space-around'>

            <Button padding='3px' onClick={()=>{this.props.onToggle();RemoveWishlist();(this.props.userProfile.email && this.props.clearBackendWishlist(this.props.userProfile.email))}}>
              Yes
            </Button>
            <Button padding='3px' onClick={this.props.onToggle}>
              No
            </Button>
          </Div>
        </Div>
      }
    </Div>
  )
}
}
export function mapDispatchToProps(dispatch){
  return {
  }
}
const mapStateToProps = createStructuredSelector({
  userProfile: makeSelectUserProfile()
})
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(compose(
  withConnect
)(ClearWishlist));
