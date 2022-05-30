import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import Input from 'shared/Input';
import Span from 'shared/Span';
import Error from 'shared/Error';
import NumberFormat from 'react-number-format';
// -----
const Question = (props) =>{
  return (
    <NoMPUl display='flex' flexDirection='column' childrenPadding='5px 0'>
      <Li>
        <Span  error={props.preferredContact.email.showError || props.preferredContact.text.showError || props.preferredContact.call.showError}>
          Best Form Of Communication
        </Span>
        {
          props.preferredContact.email.showError &&
          <Error>
            {props.preferredContact.email.error}
          </Error>
        }
        {
          props.preferredContact.text.showError &&
          <Error>
            {props.preferredContact.text.error}
          </Error>
        }
        {
          props.preferredContact.call.showError &&
          <Error>
            {props.preferredContact.call.error}
          </Error>
        }
      </Li>
      <Li>
        <Div display='flex' flexWrap='nowrap' alignItems='center'  width='100%' >

          <Div width='100px' whiteSpace='nowrap'>
            Email
            {
              props.isRequired &&
              <Span color='red'>*</Span>
            }
          </Div>
          <input type='checkbox' style={{width:'30px',height:'30px'}} onChange={(e)=>{props.onPreferredContactChange('email')}} checked={props.preferredContact.email.preference} />
          <Div  width='100%'>

            <Input onClick={(e)=>{props.onPreferredContactChange('email')}} width='100%' type='text' value={props.preferredContact.email.value} onChange={(e)=>{props.onInputChange('preferredContact','email',e.target.value)}}/>
          </Div>

        </Div>

      </Li>
      <Li>
        <Div display='flex' flexWrap='nowrap' alignItems='center' width='100%' >
          <Div width='100px'>
            Call
          </Div>
          <input type='checkbox' style={{width:'30px',height:'30px'}} onChange={(e)=>{props.onPreferredContactChange('call')}} checked={props.preferredContact.call.preference}  />
          <NumberFormat style={{width:'100%'}} format="(###) ###-####"  onClick={(e)=>{props.onPreferredContactChange('call')}} type='tel' name='phone' value={props.preferredContact.call.value} onChange={(e)=>{props.onInputChange('preferredContact','call',e.target.value)}}/>

        </Div>
      </Li>
      <Li>

        <Div display='flex' flexWrap='nowrap' alignItems='center' width='100%'>
          <Div width='100px'>
            Text
          </Div>
          <input type='checkbox' style={{width:'30px',height:'30px'}} onChange={(e)=>{props.onPreferredContactChange('text')}} checked={props.preferredContact.text.preference}  />
          <NumberFormat style={{width:'100%'}}  format="(###) ###-####" onClick={(e)=>{props.onPreferredContactChange('text')}} width='100%' type='tel' name='phone' value={props.preferredContact.text.value} onChange={(e)=>{props.onInputChange('preferredContact','text',e.target.value)}}/>

        </Div>
      </Li>
    </NoMPUl>
  )
}
Question.propTypes = {
  preferredContact: PropTypes.object.isRequired,
  onInputChange: PropTypes.func.isRequired
}
export default Question;
