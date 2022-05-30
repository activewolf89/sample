import React from 'react';
import Div from 'shared/Div';
import ScheduleSuccess from './ScheduleSuccess'
import Appointment from './Appointment'
import AskAQuestion from './AskAQuestion'
import GotItButtons from './GotItButtons'
import SpecialOrder from './SpecialOrder'
import Service from './Service'
import Email from './Email'
import SendHint from './SendHint'
import LittleAboutUs from './LittleAboutUs'
import {H4} from 'shared/H';
// -----

const ShowSuccess = (props) =>{
  return (
    <Div   display='flex' flexDirection='column' alignItems='center' padding='0 0 100px 0'>
      <H4 underline textAlign='center'>
        Confirmation
      </H4>
      <hr />
      {
        props.choiceKey === 'service' &&
        <Service
          onToggleDetail = {props.onToggleDetail}
          choiceKey = {props.choiceKey}
          preferredContact ={props.preferredContact}
        />
      }
      {
        props.choiceKey === 'email' &&
        <Email
          onToggleDetail = {props.onToggleDetail}
          choiceKey = {props.choiceKey}
          preferredContact ={props.preferredContact}
        />
      }
      {
        props.choiceKey === 'appointment' &&
        <Appointment
          onToggleDetail = {props.onToggleDetail}
          choiceKey = {props.choiceKey}
          preferredContact ={props.preferredContact}
        />
      }
      {
        props.choiceKey === 'schedule a viewing' &&
        <ScheduleSuccess
          onToggleDetail = {props.onToggleDetail}
          choiceKey = {props.choiceKey}
          product = {props.product}
          preferredContact ={props.preferredContact}
        />
      }
      {
        props.choiceKey === 'ask a question' &&
        <AskAQuestion
          onToggleDetail = {props.onToggleDetail}
          choiceKey = {props.choiceKey}
          product = {props.product}
          preferredContact ={props.preferredContact}
        />
      }
      {props.choiceKey ==='drop a hint' &&
        <SendHint
          hintObject = {props.hintObject}
          product = {props.product}

        />
      }
      {
        props.choiceKey ==='special order' &&
        <SpecialOrder
          onToggleDetail = {props.onToggleDetail}
          choiceKey = {props.choiceKey}
          product = {props.product}
          preferredContact ={props.preferredContact}
        />
      }
      <Div>
        <LittleAboutUs />
      </Div>
      <Div >
        <GotItButtons
          product = {props.product}
          onToggleDetail={props.onToggleDetail}
        />
      </Div>
    </Div>
  )
}
ShowSuccess.propTypes = {
}
export default ShowSuccess;
