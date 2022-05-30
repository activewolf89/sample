import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import Input from 'shared/Input';
import Span from 'shared/Span';
import Error from 'shared/Error';
// -----
const ZipQuestion = (props) =>{
  return (
    <NoMPUl display='flex' flexDirection='column' childrenPadding='5px 0'>
      <Li>
        <Div display='flex' flexWrap='nowrap' alignItems='center'  error={props.preferredContact.zipcode.showError}>
          <Div  whiteSpace='nowrap' width='120px'>
            Zipcode
            {
              props.isRequired &&
              <Span color='red'>*</Span>
            }
          </Div>
          <Input width='100%' type='number' value={props.preferredContact.zipcode.value} onChange={(e)=>{props.onInputChange('preferredContact','zipcode',e.target.value)}}/>
        </Div>
        {
          props.preferredContact.zipcode.showError &&
          <Error>
            {props.preferredContact.zipcode.error}
          </Error>
        }
      </Li>
      <Div display='flex' flexWrap='nowrap' alignItems='center'  error={props.preferredContact.zipcode.showError}>
        <Div  display='flex'  flexWrap='nowrap'>
          City/State
          <Div maxWidth = '300px'>
            <Input width='100%' onChange={(e)=>{props.onInputChange('preferredContact','city',e.target.value)}}  type='text' value={props.preferredContact.city.value} />
          </Div>
          <Div maxWidth='100px' >
            <Input width='100%' onChange={(e)=>{props.onInputChange('preferredContact','state',e.target.value)}}   type='text' value={props.preferredContact.state.value} />
          </Div>
        </Div>
      </Div>
    </NoMPUl>
  )
}
ZipQuestion.propTypes = {
  preferredContact: PropTypes.object.isRequired,
  onInputChange: PropTypes.func.isRequired
}
export default ZipQuestion;
