import React from 'react';
import Div from 'shared/Div'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Hours from 'components/App/AppModal1/HoursTab';
import {makeSelectEarlyClosure} from 'containers/Bumper/selectors'
// -----
const MasterHours = (props) =>{
  return (
    <Div >
      <Hours
        earlyClosures = {props.earlyClosures}
        center = {props.center}
        noTitle = {props.noTitle}
        dropdown={props.dropdown}
        noCaret = {props.noCaret}
      />
    </Div>

  )
}
export function mapDispatchToProps(dispatch){
  return {
  }
}
const mapStateToProps = createStructuredSelector({
  earlyClosures: makeSelectEarlyClosure()
})
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(compose(
  withConnect
)(MasterHours));
