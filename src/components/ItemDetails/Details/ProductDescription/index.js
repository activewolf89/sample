import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import PropTypes from 'prop-types';
//shared
import Title from 'shared/Title';
import {H4} from 'shared/H';

import { CSSTransition } from 'react-transition-group';
import FontAwesome from 'react-fontawesome';
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
            <Title>Description</Title>
            <FontAwesome name={props.isOn ?"minus":"plus"}/>
          </Div>
        </Li>
        <Div>
          <CSSTransition
            in={props.isOn}
            timeout={300}
            classNames="footer"
          unmountOnExit>
            <Div padding='5px 0' >

              <H4>
                {props.title}
              </H4>
              <Div fontStyle='italic'>
                <Div  >
                  {props.description}
                </Div>
              </Div>
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
