import React from 'react';
import Div from 'shared/Div';
import Span from 'shared/Span';
import Ul from 'shared/Ul';
import Li from 'shared/Li';
import A from 'shared/A';

// -----
const funcC0mp = (props) =>{
  return (
    <Div>
      <Div display='inline-flex'>
        <Span>
          Actions
        </Span>
      </Div>
      <Ul>
        <Li>
          <Div  >
            <A>
              <Span onClick={()=>{(props.onHamburgerClick && props.onHamburgerClick());props.travelTo();props.onContactClick('email')}}>
                Ask A Question
              </Span>
            </A>
          </Div>
        </Li>
        <Li>
          <Div  >
            <A>
              <Span onClick={()=>{(props.onHamburgerClick && props.onHamburgerClick()); props.travelTo();props.onContactClick('appointment')}}>
                Schedule An Appointment

              </Span>
            </A>
          </Div>
        </Li>
        <Li>
          <Div  >
            <A>
              <Span onClick={()=>{(props.onHamburgerClick && props.onHamburgerClick());props.travelTo();props.onContactClick('directions')}}>
                Directions
              </Span>
            </A>
          </Div>
        </Li>
        <Li>
          <Div  >
            <A>
              <Span onClick={()=>{(props.onHamburgerClick && props.onHamburgerClick());props.travelTo();props.onContactClick('service')}}>
                Service Request Form
              </Span>
            </A>
          </Div>
        </Li>
      </Ul>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
