import styled from 'styled-components';
import React,{Component} from "react";

import { withRouter,Redirect } from 'react-router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Div from 'shared/Div';
import {
  makeSelectPullCityState,
  makeSelectLoading,
  makeSelectTriggerClock,
  makeSelectTriggerCalendar,
  makeSelectInventoryCheckout,makeSelectCustomerInfo} from 'containers/Checkout/selectors';
import ShippingQuestion from './Components/ShippingQuestion';
import LogisticsQuestion from './Components/LogisticsQuestion';
import ConfirmationQuestion from './Components/ConfirmationQuestion';
import {toggleLoading,handleRemoveFromCartItem,checkSettings,handleChoice,handleInputChange,handleToggle,handleCalendarChange} from 'containers/Checkout/actions';
import {handleAddToWishlist} from 'containers/App/actions';
import Stepper from 'react-stepper-horizontal';
import 'react-accessible-accordion/dist/fancy-example.css';

import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import {H2} from 'shared/H';
// -----

const StyledDiv = styled(Div)`
  width: 100vw;
  @media only screen and (min-width: 996px) {
  width: 996px;
  }
`

var findActiveStep = function(obj){
  if(obj.choice.active){
    return 0;
  } else if(obj.logistics.active){
    return 1
  } else {
    return 2
  }
}
class RequestInfoForm extends Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = function(option){
    this.props.handleToggle(option)
  }
  render(){
  return (
    <StyledDiv border='2px solid gray'>
      {
        this.props.inventoryList.length < 1 &&
        <Redirect to='/cart' />
      }
      <Div >
        <H2 textAlign='center'>Checkout Form</H2>
        <Stepper steps={ [{title: 'Procurement',onClick:()=>{this.handleClick('choice')}}, {title: 'Logistics',onClick:()=>{this.handleClick('logistics')}}, {title: 'Confirmation',onClick:()=>{this.handleClick('confirmation')}}, {title: 'Payment'}] } activeStep={ findActiveStep(this.props.customerInfo) } />
        </Div>

        <NoMPUl childrenBorderBottom='1px solid black'>
          <Li>
            <ShippingQuestion
              onToggle = {this.props.handleToggle}
              active={this.props.customerInfo.choice.active}
              choice={this.props.customerInfo.choice}
              onChoice={this.props.handleChoice}
            />
          </Li>
          <Li>
            <LogisticsQuestion
              isPullCityState = {this.props.isPullCityState}
              isLoading = {this.props.loading}
              onLoadConfirmation = {this.props.toggleLoading}
              triggerClock = {this.props.triggerClock}
              onCalendarChange = {this.props.handleCalendarChange}
              onInputChange={this.props.handleInputChange}
              onToggle = {this.props.handleToggle}
              customerInfo = {this.props.customerInfo}
              active={this.props.customerInfo.logistics.active}
              triggerCalendar = {this.props.triggerCalendar}
            />

          </Li>
          <Li>
            <ConfirmationQuestion
              choiceKey = {this.props.customerInfo.choice.value === "shipping" ? "shipping":"pickup"}
              onInputChange={this.props.handleInputChange}
              isLoading = {this.props.loading}
              onLoadConfirmation = {this.props.toggleLoading}
            onRemoveItem = {this.props.handleAddToWishlist}
            onRemoveFromCartItem = {this.props.handleRemoveFromCartItem}
            inventoryList={this.props.inventoryList}
            onToggle = {this.props.handleToggle}
            customerInfo = {this.props.customerInfo}
            active={this.props.customerInfo.confirmation.active}
          />
        </Li>
      </NoMPUl>
    </StyledDiv>
  )
}
}
export function mapDispatchToProps(dispatch){
  return {
    toggleLoading: (confirmedPayment)=> dispatch(toggleLoading(confirmedPayment)),
    handleCalendarChange: (time) => dispatch(handleCalendarChange(time)),
    handleToggle: (name) => dispatch(handleToggle(name)),
    handleInputChange: (a,b,c,d) => dispatch(handleInputChange(a,b,c,d)),
    handleChoice: (choice) => dispatch(handleChoice(choice)),
    handleAddToWishlist: (itemKey) => dispatch(handleAddToWishlist(itemKey,{},'checkOutItem')),
    handleRemoveFromCartItem: (itemKey) => dispatch(handleRemoveFromCartItem(itemKey)),
    checkSettings: (custInfo) => dispatch(checkSettings(custInfo))
  }
}
const mapStateToProps = createStructuredSelector({
  isPullCityState: makeSelectPullCityState(),
  loading: makeSelectLoading(),
  triggerClock: makeSelectTriggerClock(),
  triggerCalendar: makeSelectTriggerCalendar(),
  customerInfo: makeSelectCustomerInfo(),
  inventoryList: makeSelectInventoryCheckout()

})
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(compose(
  withConnect
)(RequestInfoForm));
