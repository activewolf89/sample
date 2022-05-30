import React from 'react';
import Div from 'shared/Div'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {handleContactClick,handleWishListObject} from 'containers/App/actions';
import {handleToggleBumper} from 'containers/Bumper/actions';
import {makeSelectToggle} from 'containers/Bumper/selectors';
import { compose } from 'redux';
import EmailList from './EmailThisList';
import Filter from './Filter';
import SortBy from './SortBy';
import {makeSelectCurrentOpen} from 'containers/ShopNew/selectors';
import InStockOption from 'shared/InStockOption';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
// -----
const EmailThisList = (props) =>{
  return (
    <Div   width='100%' display='flex' flexDirection='column' alignItems='flex-end' height='100%' justifyContent='flex-end' padding='10px 0'>
      <NoMPUl maxWidth='2000px' display='flex' justifyContent='space-around' width='100%'  alignItems='flex-end' >
        <Li>
          <InStockOption
            history={props.history}
          />
        </Li>
        <Li>
          <Filter
            onScrollToFilter = {props.onScrollToFilter}
            handleToggleBumper = {props.handleToggleBumper}
            onWishlistClick = {props.onWishlistClick}
            ratio = {props.ratio}
          />
        </Li>
        <Li>
          <SortBy
            catId  = {props.catId}
            history = {props.history}
          />
        </Li>
        <Li>
          <EmailList
            handleContactClick = {props.handleContactClick}
          />
        </Li>
      </NoMPUl>
    </Div>

  )
}
export function mapDispatchToProps(dispatch){
  return {
    handleToggleBumper: ()=> dispatch(handleToggleBumper()),
    onWishlistClick: ()=> dispatch(handleWishListObject()),
    handleContactClick: (e)=>dispatch(handleContactClick(e))
  }
}
const mapStateToProps = createStructuredSelector({
  toggle: makeSelectToggle(),
  currentOpen: makeSelectCurrentOpen(),

})
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(compose(
  withConnect
)(EmailThisList));
