import React from 'react';
import Div from 'shared/Div';
import Question from 'containers/RequestInfoForm/Components/Shared/Question';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import P from 'shared/P';
import ShippingInformation from './ShippingInformation'
import Span from 'shared/Span';
import CheckCalendar from 'containers/RequestInfoForm/Components/CheckCalendar'
// -----
const funcC0mp = (props) =>{
  return (
    <Div >
      <NoMPUl childrenBorderBottom='1px solid gray'>
        <Li>
          <Question  question={'Please enter shipping address'} asterisk ={"Ships within two business days UPS/Fedex Insured, no PO Boxes are allowed."} />
          <ShippingInformation
            onInputChange={props.onInputChange}
            choiceKey={props.choiceKey}
            shippingObject = {props.choices[props.choiceKey]}
            isPullCityState = {props.isPullCityState}

          />
        </Li>
        <Li>

          <P>
            The estimate delivery is <Span fontWeight='bold'>{props.choices[props.choiceKey].receivedDay.value}</Span>
            <Span cursor='pointer' textDecoration='underline' color='maroon' onClick={()=>{props.onCalendarChange()}}>Change Date</Span>
          </P>
          <Div position='relative'>
            {
              props.triggerCalendar &&
              <CheckCalendar
                onCalendarChange = {props.onCalendarChange}
                onInputChange={props.onInputChange}
                choiceKey = {props.choiceKey}
              />
            }
          </Div>
        </Li>
      </NoMPUl>

    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
