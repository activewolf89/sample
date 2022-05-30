import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Div from 'shared/Div';
import LandingPage from './LandingPage';
// -----
const ReachOption = (props) =>{
  return (
    <CSSTransition
      in={props.isKnowledgeToggle}
      timeout={400}
      classNames="shopTheToggle"
    unmountOnExit>
      <Div themed padding='10px'>
        <LandingPage
          knowledgeArray = {props.knowledgeArray}
          history={props.history}
          
        />
        </Div>
      </CSSTransition>
  )
}
ReachOption.propTypes = {
}
export default ReachOption;
