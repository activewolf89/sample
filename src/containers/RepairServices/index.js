/**
 *
 * Shop
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {} from './actions';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import {handleServiceSubmit,handleToggleDetail} from './actions';
import { withRouter } from 'react-router';
//shared

import {makeSelectToggle,makeSelectName,makeSelectPhone,makeSelectEmail} from './selectors';

import Div from 'shared/Div';
import ServiceForm from 'components/Service/Form';

export class RepairService extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <Div>
        <ServiceForm
        onServiceSubmit = {this.props.handleServiceSubmit}
      />
      </Div>
    );
  }
}



const mapStateToProps = createStructuredSelector({
  isToggle: makeSelectToggle(),
  name: makeSelectName(),
  phone: makeSelectPhone(),
  email: makeSelectEmail(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleServiceSubmit: (obj) => dispatch(handleServiceSubmit(obj)),
    handleToggleDetail: () => dispatch(handleToggleDetail())
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'repairServices', reducer });
const withSaga = injectSaga({ key: 'repairServices', saga });

export default withRouter(compose(
  withReducer,
  withSaga,
  withConnect,
)(RepairService));
