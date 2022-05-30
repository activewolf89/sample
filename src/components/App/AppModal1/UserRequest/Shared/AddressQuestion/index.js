import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import Input from 'shared/Input';
import Span from 'shared/Span';
import Error from 'shared/Error';
// -----
const NameQuestion = (props) =>{
  return (
    <NoMPUl display='flex' flexDirection='column' childrenPadding='5px 0'>
      Enter Shipping Info.

      <Li>
        <Div display='flex' flexWrap='nowrap' alignItems='center'  error={props.preferredContact.address.showError}>
          <Div  whiteSpace='nowrap' width='120px'>
            Address
            {
              props.isRequired &&
              <Span color='red'>*</Span>
            }
          </Div>
          <Input  width='100%' type='text' value={props.preferredContact.address.value} onChange={(e)=>{props.onInputChange('preferredContact','address',e.target.value)}}/>
        </Div>
        {
          props.preferredContact.address.showError &&
          <Error>
            {props.preferredContact.address.error}
          </Error>
        }
      </Li>
    </NoMPUl>
  )
}
NameQuestion.propTypes = {
  preferredContact: PropTypes.object.isRequired,
  onInputChange: PropTypes.func.isRequired
}
export default NameQuestion;
