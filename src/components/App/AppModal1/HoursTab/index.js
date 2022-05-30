import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import PropTypes from 'prop-types';
import Span from 'shared/Span';
import CheckCurrentTime from 'containers/App/HelperFunctions/CheckCurrentTime';
//shared
import {H4} from 'shared/H';
import { CSSTransition } from 'react-transition-group';

import FontAwesome from 'react-fontawesome';
// -----
const HoursTab = (props) =>{

  return (
    <Div >

      <Div display="flex"  justifyContent={props.center ? 'center':"space-between"}   >
        {
          !props.earlyClosures &&
          <Div>

            <H4>{!props.noTitle && ' Our Hours: ' }
              {
                CheckCurrentTime(props.earlyClosures) ?
                  <Span fontStyle="italic" color="green">Open Now</Span>:
                  <Span fontStyle="italic" color="red">Closed Now</Span>
              }

            </H4>
            <Div>
              {
                !props.noCaret &&
                <FontAwesome name={props.dropdown ? "caret-up" : "caret-down"}/>
              }
            </Div>
          </Div>
        }
      </Div>
      {
        props.justShowOpen && !props.earlyClosures &&
        <Div >
          {

            CheckCurrentTime(props.earlyClosures) ?
              <Span fontStyle="italic" color="green">Open Now</Span>:
              <Span fontStyle="italic" color="red">Closed Now</Span>
          }
        </Div>
      }
      {
        props.earlyClosures &&
        <Div>
          <Div >

            <Span fontStyle="italic" color="red">Temporary Store Closure</Span>
          </Div>
        </Div>
      }
      {
        !props.justShowOpen &&
        <Div>

          <CSSTransition
            in={props.dropdown}
            timeout={500}
            classNames="view"
            unmountOnExit
          >
            <NoMPUl display="flex" flexDirection="column"   width='100%'>
              <Li>
                Tuesday-Saturday
              </Li>
              <Li>
                <Span fontStyle="italic">
                  (11AM - 6PM)
                </Span>
              </Li>
              <Li>
                <Div >

                  <a style={{color:'white'}} rel="noopener noreferrer" target="_blank" href="https://www.google.com/maps/place/L+T+Denny+Jewelers/@47.5979227,-122.335647,17z/data=!3m1!4b1!4m5!3m4!1s0x54906aa49056dda7:0x4a8e16c0365899b8!8m2!3d47.5979227!4d-122.3334583">
                    515 Occidental Ave S.
                    Seattle, WA 98104
                  </a>
                </Div>
              </Li>
            </NoMPUl>
          </CSSTransition>
        </Div>
      }

        </Div>
        )
}
HoursTab.propTypes = {
  dropdown: PropTypes.bool
}
export default HoursTab;
