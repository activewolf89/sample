import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import Button from 'shared/Button';
import FontAwesome from 'react-fontawesome';
import A from 'shared/A';
import {H1} from 'shared/H';
import styled from 'styled-components';
import MasterHours from 'containers/MasterHours';


const StyledNoMPUl = styled(NoMPUl)`
> li {
  width:100%;
}
@media only screen and (min-width: 996px) {
  > li {
    width: auto;
  }
}
`
// -----
const ReachOption = (props) =>{
  return (
    <CSSTransition
      in={props.isReachToggle}
      timeout={400}
      classNames="shopTheToggle"
    unmountOnExit>
      <Div themed padding='10px'>
        <Div display='flex' alignItems='center' flexDirection='column'>
          <H1 textAlign='center'>Contact</H1>
          <MasterHours
            center
            noTitle
            dropdown={true}
            noCaret
          />
        </Div>
        <StyledNoMPUl display='flex' justifyContent='center' flexWrap='wrap' childrenPadding='10px'>
          <Li>
            <Div display='flex' flexDirection='column' alignItems='center'>

              <Button themed width='100%'>
                <A nonA color="white" href="tel:1-206-682-5555">
                  <Div textDecoration='underline'>
                    Call/Text
                  </Div>
                  <Div>
                    (206) 682-5555
                  </Div>
                </A>
              </Button>

            </Div>
          </Li>
          <Li>
            <Button width='100%' themed>

              <Div textDecoration='underline' onClick={()=>{props.onContactClick('email')}}>
                Email
              </Div>
              <Div>
                customerservice@ltdenny.com
              </Div>
            </Button>
          </Li>
          <Li>
            <Button width='100%' themed onClick={()=>{props.onContactClick('service')}}>
              <Div textDecoration='underline'>
                Service Form
              </Div>
              <Div>
                <FontAwesome name='book' />
              </Div>
            </Button>
          </Li>
          <Li>
            <Button width='100%' themed onClick={()=>{props.onContactClick('appointment')}}>
              <Div textDecoration='underline'>
                Appointment
              </Div>
              <Div>
                <FontAwesome name='calendar' />
              </Div>
            </Button>
          </Li>
          <Li>
            <Button  width='100%' themed onClick={()=>{props.onContactClick('directions')}}>
              <Div textDecoration='underline'>
                Directions
              </Div>
              <Div>
                <FontAwesome name='map' />
              </Div>
            </Button>
          </Li>

        </StyledNoMPUl>
      </Div>
      </CSSTransition>
  )
}
ReachOption.propTypes = {
}
export default ReachOption;
