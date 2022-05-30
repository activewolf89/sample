import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import PropTypes from 'prop-types';
//shared
import Title from 'shared/Title';

import { CSSTransition } from 'react-transition-group';
import FontAwesome from 'react-fontawesome';
import Info from './Info';
require('../details.css')

// -----
const GeneralTab = (props) =>{
  return (
    <Div>
      <NoMPUl display="flex" flexDirection="column"  >
        <Li >
          <Div backgroundColor="lightgray"
            display="flex"
            padding="20px"
            justifyContent="space-between"
            onClick={()=>{props.onDetailClick('general')}}
          alignItems="center">
            <Title>Details</Title>
            <FontAwesome name={props.isOn ?"minus":"plus"}/>
          </Div>
        </Li>
        <Div>
          <CSSTransition
            in={props.isOn}
            timeout={300}
            classNames="footer"
          unmountOnExit>
            <Div maxwidth="600px" >
              <Info
                jewelryArray = {props.jewelryArray}
                stoneArray = {props.stoneArray}
                knowledgeArray = {props.knowledgeArray}
                onContactClick={props.onContactClick}
                Item={props.Item}

              />
            </Div>
          </CSSTransition>
        </Div>
      </NoMPUl>
    </Div>
  )
}
GeneralTab.propTypes = {
  item: PropTypes.object,
  isOn: PropTypes.bool.isRequired,
}
export default GeneralTab;
