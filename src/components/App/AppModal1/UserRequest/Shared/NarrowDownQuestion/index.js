import React from 'react';
import Div from 'shared/Div';
import Span from 'shared/Span';
import PropTypes from 'prop-types';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import Error from 'shared/Error';
import NarrowOption from './NarrowOption';
import styled from 'styled-components';

const StyledNoMPUl = styled(NoMPUl)`
  flex-wrap: wrap;
  @media only screen and (min-width: 996px) {
  flex-wrap: nowrap;
  }
`
// -----
const CommentQuestion = (props) =>{
  return (
    <NoMPUl display='flex' flexDirection='column' childrenPadding='5px 0'>
      <Div display='flex' flexWrap='wrap'  error={props.preferredContact.service.showError}>
        Details
        {
          props.isRequired &&
          <Span color='red'>*</Span>
        }
      </Div>
      {
        props.preferredContact.service.showError &&
        <Error>
          {props.preferredContact.service.error}
        </Error>
      }
      <Li>
        <StyledNoMPUl display='flex'  childrenPadding='5px'>
          <Li width='100%'>
            <NarrowOption
              preferredContact = {props.preferredContact}
              onInputChange = {props.onInputChange}
              title="Service"
              options={['Custom Jewelry','Jewelry Repair']}
            />
          </Li>
          <Li width='100%'>
            <NarrowOption
              preferredContact = {props.preferredContact}
              onInputChange = {props.onInputChange}
              title="Category"
              options={['Engagement Ring','Diamond','Ladies Band','Gents Band','Earring','Necklace','Watch','Fine Ring']}
            />
          </Li>
          <Li width='100%'>
            <NarrowOption
              onInputChange = {props.onInputChange}
              preferredContact = {props.preferredContact}
              title="Metal"
              options={['Platinum','Yellow Gold','White Gold','Rose Gold']}
            />
          </Li>
        </StyledNoMPUl>

      </Li>
    </NoMPUl>
  )
}
CommentQuestion.propTypes = {
  preferredContact: PropTypes.object.isRequired,
  onInputChange: PropTypes.func.isRequired
}
export default CommentQuestion;
