import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import PropTypes from 'prop-types';
import Span from 'shared/Span';
import CheckCurrentTime from 'containers/App/HelperFunctions/CheckCurrentTime';
//shared
import {H3} from 'shared/H';
import { CSSTransition } from 'react-transition-group';

import FontAwesome from 'react-fontawesome';
// -----
const HoursTab = (props) =>{

  return (
    <Div>
      <Div  display="flex" alignItems="center" justifyContent="space-between">
        {!props.noTitle && ' Our Hours: ' }
        {
          CheckCurrentTime() ?
            <Span fontStyle="italic" color="green"><H3>Open Now</H3></Span>:
            <Span fontStyle="italic" color="red"><H3>Closed Now</H3></Span>
        }
        {
          !props.noCaret &&
          <FontAwesome name={props.dropdown ? "caret-up" : "caret-down"}/>
        }
      </Div>
      <CSSTransition
        in={props.dropdown}
        timeout={500}
        classNames="view"
        unmountOnExit
      >
        <NoMPUl display="flex" flexDirection="column"  childrenPadding="5px 0" margin="10px 0">

          <Li>
            Monday - Friday 10AM - 6PM
          </Li>
          <Li>
            Saturday 11AM - 5:30PM
          </Li>
        </NoMPUl>
      </CSSTransition>
    </Div>
  )
}
HoursTab.propTypes = {
  dropdown: PropTypes.bool
}
export default HoursTab;
