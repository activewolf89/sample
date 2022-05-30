/**
 *
 * Shop
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {toggleLoading,handleChoice,handleCreatePendingSold,handleCheckout,handleRemoveFromCartItem,handleResetView,handlePullCartInfo} from './actions';
import {handleRemoveCheckoutCookie,handleAddToWishlist} from 'containers/App/actions';
import {makeSelectCustomerInfo,makeSelectStripeKey,makeSelectInventoryCheckout,makeSelectHasInventoryPUlled} from './selectors';
import {} from 'containers/Item/selectors';
import {makeSelectEventsChecklist,makeSelectCheckOutCookie} from 'containers/App/selectors';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import { withRouter } from 'react-router';
import Div from 'shared/Div';
import saga from './saga';
import injectSaga from 'utils/injectSaga';

import { loadStripe } from '@stripe/stripe-js';

import { Switch, Route } from 'react-router-dom';
import Cart from './Components/Cart';
import RequestInfoForm from 'containers/RequestInfoForm';
import Cancel from './Components/Cancel';
import Success from './Components/Success';
const {REACT_APP_LIVE_STRIPE_PUBLIC_KEY } = process.env;
const stripePromise = loadStripe(REACT_APP_LIVE_STRIPE_PUBLIC_KEY);
const bringAsync = async (sessionId) => {
const stripe = await stripePromise;
const result = await stripe.redirectToCheckout({
      sessionId: sessionId,
    });
    if (result.error) {

      console.log(result.error)
     // If `redirectToCheckout` fails due to a browser or network
     // error, display the localized error message to your customer
     // using `result.error.message`.
   }
 };

export class Checkout extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this._handleKeyDown = this._handleKeyDown.bind(this);

  }
  _handleKeyDown = (event) => {
    const {location} = this.props.history
    const {pathname} = location;
    var customerInfo = this.props.customerInfo
    if(event.keyCode === 13){

    if(pathname === "/cart/checkout"){
      if(!customerInfo.choice.value){
        this.props.handleChoice('shipping')
      } else if(!customerInfo.confirmation.active){
        this.props.toggleLoading()
      } else {
        this.props.toggleLoading(true)
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      this.props.history.push('/cart/checkout')
    }
  }

}
  componentDidMount(){
      document.addEventListener("keydown", this._handleKeyDown);
  }
  componentWillUnmount(){
      document.removeEventListener("keydown",()=>{
      });
  }
  componentWillReceiveProps (props){
    if(props.stripeKey){
      bringAsync(props.stripeKey)
    }
  }
  render() {
    return (
      <Div maxWidth="996px" width='100vw' >

        <Switch>
          <Route exact path="/cart" render={routeProps => {
            return <Cart
              eventsChecklist = {this.props.eventsChecklist}
              onPullCartInfo = {this.props.handlePullCartInfo}
              onResetView = {this.props.handleResetView}
              handleResetView = {this.props.handleResetView}
              checkOutCookie = {this.props.checkOutCookie}
              inventoryList = {this.props.inventoryList}
              hasInventoryPulled = {this.props.hasInventoryPulled}
              history={this.props.history}
              onRemoveItem = {this.props.handleAddToWishlist}
              onRemoveFromCartItem = {this.props.handleRemoveFromCartItem}
              onContactClick = {this.props.onContactClick}
              onCheckout = {this.props.handleCheckout}
                   />
          }} />
          <Route exact path="/cart/checkout" render={routeProps => {
            return <RequestInfoForm
                   />
          }} />
          <Route exact path="/cart/cancel" render={routeProps => {
            return <Cancel
              checkOutCookie = {this.props.checkOutCookie}
              inventoryList = {this.props.inventoryList}
              hasInventoryPulled = {this.props.hasInventoryPulled}
              history={this.props.history}
              onRemoveItem = {this.props.handleAddToWishlist}
              onRemoveFromCartItem = {this.props.handleRemoveFromCartItem}
              onContactClick = {this.props.onContactClick}
              onCheckout = {this.props.handleCheckout}
                   />
          }} />
          <Route exact path="/cart/success" render={routeProps => {
            return <Success
              checkOutCookie = {this.props.checkOutCookie}
              onCreatePendingSold = {(e)=>{this.props.handleCreatePendingSold(e);this.props.handleRemoveCheckoutCookie()}}
                   />
          }} />
        </Switch>
      </Div>

        );
  }
}



const mapStateToProps = createStructuredSelector({
  customerInfo: makeSelectCustomerInfo(),
  stripeKey: makeSelectStripeKey(),
  eventsChecklist: makeSelectEventsChecklist(),
  checkOutCookie: makeSelectCheckOutCookie(),
  hasInventoryPulled: makeSelectHasInventoryPUlled(),
  inventoryList: makeSelectInventoryCheckout()
});

function mapDispatchToProps(dispatch) {
  return {
    toggleLoading: (confirmation) => dispatch(toggleLoading(confirmation)),
    handleChoice: (choice) => dispatch(handleChoice(choice)),
    handleRemoveCheckoutCookie: ()=> dispatch(handleRemoveCheckoutCookie()),
    handleAddToWishlist: (itemKey) => dispatch(handleAddToWishlist(itemKey,{},'checkOutItem')),
    handleRemoveFromCartItem: (itemKey) => dispatch(handleRemoveFromCartItem(itemKey)),
    handleCreatePendingSold: (itemArray)=>dispatch(handleCreatePendingSold(itemArray)),
    handleCheckout: (x)=> dispatch(handleCheckout(x)),
    handleResetView: () => dispatch(handleResetView()),
    handlePullCartInfo: (itemKeys) => dispatch(handlePullCartInfo(itemKeys)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'Checkout', reducer });
const withSaga = injectSaga({ key: 'Checkout', saga });

export default withRouter(compose(
  withConnect,
  withReducer,
  withSaga,
)(Checkout));
