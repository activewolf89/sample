import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
// -----
const FeedbackQuestion = (props) =>{
  return (
    <NoMPUl display='flex' flexDirection='column' childrenPadding='5px 0'>
      <Div display='flex' flexWrap='wrap'   >
        Next Steps for L T Denny
      </Div>

      <Li>
        <Div display='flex' flexDirection='column' >
          <Div hoverable  >
            <input readOnly type='checkbox' checked={true} style={{width:'30px', height:'30px'}}  />
            Start the Conversation
          </Div>
          <Div hoverable onChange={()=>{props.onFeedback('Provide Quote')}} >
            <input  type='checkbox' checked={props.feedback.includes('Provide Quote')}  style={{width:'30px', height:'30px'}}  />
            Provide Quote
          </Div>
          <Div hoverable  onChange={()=>{props.onFeedback('Setup Appointment Time')}}>
            <input type='checkbox'  checked={props.feedback.includes('Setup Appointment Time')}  style={{width:'30px', height:'30px'}}  />
            Setup Appointment Time
          </Div>

        </Div>
      </Li>
    </NoMPUl>
  )
}
FeedbackQuestion.propTypes = {
}
export default FeedbackQuestion;
