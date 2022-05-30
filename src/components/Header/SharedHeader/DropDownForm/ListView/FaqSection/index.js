import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import {H4} from 'shared/H';
import Li from 'shared/Li';
import FAQLink from './FAQLink';
import StyledLink from 'shared/StyledLink';
// -----
const FaqSection = (props) =>{
  return (
    <Div >
      <StyledLink to='/'>
        <H4 underline fontStyle="italic">
          FAQ
        </H4>
      </StyledLink>
      <NoMPUl childrenPadding="10px 0">

        {props.knowledgeArray.map((section,idx)=>{
          return (
            <Li key={idx} clickable>
              <FAQLink
                combinedId = {props.topId + ',' + section.id}
                onHamburgerClick = {props.onHamburgerClick}
                travelTo={props.travelTo}
                onFaqClick = {props.onFaqClick}
                rootPath = {section.url}
                section={section}
              />
            </Li>
          )
        })}
      </NoMPUl>
    </Div>
  )
}
FaqSection.propTypes = {
}
export default FaqSection;
