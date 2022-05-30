import React from 'react';
import Div from 'shared/Div';
import P from 'shared/P';
import Button from 'shared/Button';
import Shipping from './Shipping';
import Pickup from './Pickup';
import FontAwesome from 'react-fontawesome';
// -----
const funcC0mp = (props) =>{
  return (
    <Div  >
      {
        props.customerInfo.choice.value === "shipping" ?
          <Div error={!props.customerInfo.logistics.choices.shipping.passed && props.customerInfo.logistics.choices.shipping.error}>

            <Shipping
              isPullCityState = {props.isPullCityState}
              onInputChange={props.onInputChange}
              choiceKey = {'shipping'}
              onCalendarChange = {props.onCalendarChange}
              choices = {props.customerInfo.logistics.choices}
              triggerCalendar = {props.triggerCalendar}

            />
          </Div>:
          <Pickup
            triggerClock = {props.triggerClock}
            choiceKey = {'pickup'}
            onCalendarChange = {props.onCalendarChange}
            onInputChange={props.onInputChange}
            choices = {props.customerInfo.logistics.choices}
            triggerCalendar = {props.triggerCalendar}

          />
      }
      {
        props.isLoading ?
          <Div>
            <Button width='100%'>
              <FontAwesome name='spinner' spin size="lg" />
            </Button>

          </Div>:
          <Div  padding='10px 0' display='flex' justifyContent='space-between' width='100%' onClick={()=>{props.onLoadConfirmation()}}>
            <Div textAlign='center' width='100%'>
              <P fontWeight='bold' textAlign='center' padding='5px'>
                {props.customerInfo.logistics.choices.shipping.error}
              </P>
            </Div>
            <Button add width='100%'>Continue</Button>
          </Div>
      }
    </Div>

  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
