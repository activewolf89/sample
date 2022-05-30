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
      <Li>
        <Span error={props.preferredContact.name.showError}>
          Enter Your Name
        </Span>
        {
          props.preferredContact.name.showError &&
          <Error>
            {props.preferredContact.name.error}
          </Error>
        }
      </Li>
      <Li>
        <Div  display='flex' flexWrap='nowrap' alignItems='center'  >
          <Div  whiteSpace='nowrap' width='100px'>
            Name
            {
              props.isRequired &&
              <Span color='red'>*</Span>
            }
          </Div>
          <Div  width='100%'>
            <Input width='100%' type='text' value={props.preferredContact.name.value} onChange={(e)=>{props.onInputChange('preferredContact','name',e.target.value)}}/>
          </Div>
        </Div>

      </Li>
    </NoMPUl>
  )
}
NameQuestion.propTypes = {
  preferredContact: PropTypes.object.isRequired,
  onInputChange: PropTypes.func.isRequired
}
export default NameQuestion;
