import React from 'react';
import Div from 'shared/Div';
import NameQuestion from '../Shared/NameQuestion';
import CommunicationQuestion from '../Shared/CommunicationQuestion';
import CommentQuestion from '../Shared/CommentQuestion';
import ImageQuestion from '../Shared/ImageQuestion';
import FeedbackQuestion from '../Shared/FeedbackQuestion';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';


// -----
const funcC0mp = (props) =>{
  return (
    <Div >
      <NoMPUl color='white' childrenBorderBottom = '1px solid white'>
        <Li>
          <NameQuestion
            onInputChange = {props.onInputChange}
            preferredContact = {props.preferredContact}
            onPreferredContactChange = {props.onPreferredContactChange}
            isRequired = {props.valuesToCheckArray.includes('name')}
          />
        </Li>
        <Li>
          <CommunicationQuestion
            onInputChange = {props.onInputChange}
            onPreferredContactChange = {props.onPreferredContactChange}
            preferredContact = {props.preferredContact}
            isRequired = {props.valuesToCheckArray.includes('email')}
          />
        </Li>
        <Li>
          <CommentQuestion
            onInputChange = {props.onInputChange}
            onPreferredContactChange = {props.onPreferredContactChange}
            preferredContact = {props.preferredContact}
            isRequired = {props.valuesToCheckArray.includes('comment')}
          />
        </Li>
        <Li>
          <ImageQuestion
            onInputChange = {props.onInputChange}
            onPreferredContactChange = {props.onPreferredContactChange}
            preferredContact = {props.preferredContact}
            isRequired = {props.valuesToCheckArray.includes('photo')}
            photos = {props.photos}
            onPhotoChange= {props.onPhotoChange}
            onPhotoDelete = {props.onPhotoDelete}
          />
        </Li>
        <Li>
          <FeedbackQuestion
            onFeedback = {props.onFeedback}
            onInputChange = {props.onInputChange}
            onPreferredContactChange = {props.onPreferredContactChange}
            preferredContact = {props.preferredContact}
            feedback = {props.feedback}
            isRequired = {props.valuesToCheckArray.includes('feedback')}
          />
        </Li>
      </NoMPUl>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
