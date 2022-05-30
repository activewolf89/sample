import React from 'react';
import Div from 'shared/Div';
import Span from 'shared/Span';
import PropTypes from 'prop-types';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import TextArea from 'shared/TextArea';
import Error from 'shared/Error';
// -----
const CommentQuestion = (props) =>{
  return (
    <NoMPUl display='flex' flexDirection='column' childrenPadding='5px 0'>
      <Div display='flex' flexWrap='wrap'   >
        <Span error={props.preferredContact.comment.showError} >

          Comment/Question
          {
            props.isRequired &&
            <Span color='red'>*</Span>
          }
        </Span>
      </Div>
      {
        props.preferredContact.comment.showError &&
        <Error>
          {props.preferredContact.comment.error}
        </Error>
      }
      <Li>
        <Div display='flex' flexWrap='nowrap' alignItems='center'>
          <TextArea
            placeholder="any info. that will help us respond to your question"
            value={props.preferredContact.comment.value} height='200px' onChange={(e)=>{props.onInputChange('preferredContact','comment',e.target.value)}}  />
        </Div>

      </Li>
    </NoMPUl>
  )
}
CommentQuestion.propTypes = {
  preferredContact: PropTypes.object.isRequired,
  onInputChange: PropTypes.func.isRequired
}
export default CommentQuestion;
