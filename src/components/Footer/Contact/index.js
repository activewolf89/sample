import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';
//shared
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import {H5} from 'shared/H';
import DissapearringCaret from 'shared/DissapearringCaret';
import { CSSTransition } from 'react-transition-group';
import DissapearringDiv from 'shared/DissapearringDiv';
import ReapearringDiv from 'shared/ReapearringDiv';
import A from 'shared/A';

require('../footer.css')

// -----
const Contact = (props) =>{
  return (
    <NoMPUl display="flex" flexDirection="column"  childrenPadding="0 10px">
      <Li >
        <Div position="relative" display="flex" justifyContent="space-between" alignItems="center">
          <DissapearringDiv position="absolute" width="100%" height="100%" onClick={()=>{props.onContactDrop('contact')}} />
          <H5 >
            Project 524B Final
          </H5>
          <DissapearringCaret name={props.isOn ?"caret-up":"caret-down"}/>
        </Div>
      </Li>
      <DissapearringDiv>
        <CSSTransition
          in={props.isOn}
          timeout={300}
          classNames="footer"
        unmountOnExit>
          <NoMPUl display="flex" flexDirection="column"  childrenPadding="0 10px">

            <Li >

              <A href="tel:1-206-682-5555">Armoire Prototype</A>


            </Li>
            <Li onClick={()=>{props.onContactClick('email')}}>

              <A>
                Email
              </A>


            </Li>

          </NoMPUl>
        </CSSTransition>
      </DissapearringDiv>
      <ReapearringDiv>
        <NoMPUl display="flex" flexDirection="column"  childrenPadding="0 10px">
          <Li >
          <Div fontStyle='italic'>
          <small>
          Prototype version 1
          </small>
          </Div>
          </Li>
          <Li >
          <Div fontStyle='italic'>
          <small>
          Class of 2022
          </small>
          </Div>
          </Li>

        </NoMPUl>
      </ReapearringDiv>
    </NoMPUl>

  )
}
Contact.propTypes = {
  onContactClick: PropTypes.func.isRequired
}
export default Contact;
