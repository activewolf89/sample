import React from 'react';
import Div from 'shared/Div';
//shared
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import {H5} from 'shared/H';
import DissapearringCaret from 'shared/DissapearringCaret';
import { CSSTransition } from 'react-transition-group';
import DissapearringDiv from 'shared/DissapearringDiv';
import ReapearringDiv from 'shared/ReapearringDiv';
import StyledLink from 'shared/StyledLink'
require('../footer.css')

// -----
const Contact = (props) =>{


  return (
    <Div >

      <NoMPUl display="flex" flexDirection="column"  childrenPadding="0 10px" width='100%'>
        <Li  width='100%'>
          <Div position="relative" display="flex" justifyContent="space-between" alignItems="center"  >
            <DissapearringDiv position="absolute" width="100%" height="100%" onClick={()=>{props.onContactDrop('contact')}} />
            <H5 >
              Contact Us
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
                <a href = "mailto: reedd2@uw.edu">email:reedd2@uw.edu </a>
              </Li>
              <Li >
                <a href = "mailto: reedd2@uw.edu">email:reedd2@uw.edu </a>
              </Li>
              <Li >
                <a href = "mailto: reedd2@uw.edu">email:reedd2@uw.edu </a>
              </Li>
              <Li >
                <a href = "mailto: ykim9848@uw.edu">email:ykim9848@uw.edu </a>
              </Li>
              <Li >
                <a href = "mailto: jneha@uw.edu">email:jneha@uw.edu </a>
              </Li>
              <Li >
                <a href = "mailto: reedd2@uw.edu">email:reedd2@uw.edu </a>
              </Li>

            </NoMPUl>
          </CSSTransition>
        </DissapearringDiv>
        <ReapearringDiv>
        <NoMPUl display="flex" flexDirection="column"  childrenPadding="0 10px">
          <Li >
            <a href = "mailto: reedd2@uw.edu">email:reedd2@uw.edu </a>
          </Li>
          <Li >
            <a href = "mailto: reedd2@uw.edu">email:reedd2@uw.edu </a>
          </Li>
          <Li >
            <a href = "mailto: reedd2@uw.edu">email:reedd2@uw.edu </a>
          </Li>
          <Li >
          <a href = "mailto: ykim9848@uw.edu">email:ykim9848@uw.edu </a>

          </Li>
          <Li >
          <a href = "mailto: jneha@uw.edu">email:jneha@uw.edu </a>
          </Li>
          <Li >
            <a href = "mailto: reedd2@uw.edu">email:reedd2@uw.edu </a>
          </Li>

        </NoMPUl>
        </ReapearringDiv>
      </NoMPUl>
    </Div>

  )
}

export default Contact;
