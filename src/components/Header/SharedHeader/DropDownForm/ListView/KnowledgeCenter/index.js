import React from 'react';
import Div from 'shared/Div';
import Ul from 'shared/Ul';
import Li from 'shared/Li';
import KnowledgeLink from './KnowledgeLink';
// -----
import styled from 'styled-components';

const StyledUl = styled(Ul)`

  @media only screen and (max-width: 996px) {
    max-width: 100%;
    position: static;
    list-style-type: none;
    padding: 0;
    margin: 0;
    >li {
      width: auto;

      border-bottom: 1px solid white;
      padding: 5px;
    }

  }
`
const funcC0mp = (props) =>{
  return (
      <Div  themedAccent  >
        <StyledUl  listStyle="none"  width='100%' >
          {props.knowledgeSection.obj && props.knowledgeSection.obj.map((obj,idx)=>{
            return (
              <Li key={idx}>
                <KnowledgeLink
                  sectionId={obj.id}
                  onFaqClick = {props.onFaqClick}
                  topId = {props.topId}
                  obj={obj}
                  onHamburgerClick = {props.onHamburgerClick}
                  travelTo={props.travelTo}
                  rootPath = {props.knowledgeSection.clickTo + '/' + obj.title}
                  section={{title:obj.title,options:obj.options}}
                />
              </Li>
            )
          })}
        </StyledUl>
      </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
