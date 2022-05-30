import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import PropTypes from 'prop-types';
//shared
import {H5} from 'shared/H';
import DissapearringCaret from 'shared/DissapearringCaret';
import { CSSTransition } from 'react-transition-group';
import ReapearringDiv from 'shared/ReapearringDiv';
import DissapearringDiv from 'shared/DissapearringDiv';
import Hours from 'components/App/AppModal1/HoursTab';
require('../footer.css')

// -----
const HoursTab = (props) =>{
  return (
    <Div >
      <NoMPUl display="flex" flexDirection="column"  childrenPadding="0 10px">
        <Li >
          <Div position="relative" display="flex" justifyContent="space-between" alignItems="center">
            <DissapearringDiv position="absolute" width="100%" height="100%"  onClick={()=>{props.onHourClick('hours')}} />

            <H5>Purple Team 1</H5>
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
                  Jaspreet
              </Li>
              <Li >
                  Reed Denny
              </Li>
              <Li >
                  Geoffrey Ssebagala
              </Li>
              <Li >
                  Young Dong Kim
              </Li>
              <Li >
                  Neha Jain
              </Li>
              <Li >
                  Jane Stander
              </Li>
            </NoMPUl>
          </CSSTransition>
        </DissapearringDiv>
        <ReapearringDiv>
        <NoMPUl display="flex" flexDirection="column"  childrenPadding="0 10px">
          <Li >
              Jaspreet
          </Li>
          <Li >
              Reed Denny
          </Li>
          <Li >
            Geoffrey Ssebagala
          </Li>
          <Li >
              Young Dong Kim
          </Li>
          <Li >
              Neha Jain
          </Li>
          <Li >
              Jane Stander
          </Li>
        </NoMPUl>
        </ReapearringDiv>
      </NoMPUl>
  </Div>
  )
}
HoursTab.propTypes = {
  isOn: PropTypes.bool.isRequired,
  onHourClick: PropTypes.func.isRequired
}
export default HoursTab;
