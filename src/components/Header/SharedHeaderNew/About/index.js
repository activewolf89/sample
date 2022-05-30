import React from 'react';
import Div from 'shared/Div';
import Ul from 'shared/Ul';
import {H3} from 'shared/H';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import Option from '../Organizer/Option';
import HighlightSpan from 'shared/HighlightSpan';
import MasterHours from 'containers/MasterHours';

// -----
const funcC0mp = (props) =>{
    return (

      <Div >
        <NoMPUl display='flex' flexDirection='column'  childrenPadding='10px 0' alignItems='center' justifyContent='center'>
          <Li width='100%'>
            <NoMPUl childrenBorder='1px solid white' >
              <Li>

                <MasterHours
                  center
                  noTitle
                  dropdown={true}
                  noCaret
                />
              </Li>
            </NoMPUl>
          </Li>
          <Li width='100%'>
            <NoMPUl childrenBorder='1px solid white' >

              <Li>
                <H3 textAlign='center'  whiteSpace='nowrap' >Contact</H3>
                <Ul>
                  <Li >
                    <Div  fontStyle='italic' >

                      Call/Text(24/7)
                    </Div>
                  </Li>
                  <Li>

                    <Div>

                      <small style={{fontWeight:'bold'}}>
                        <HighlightSpan width='100%'>
                          <a href="tel:2066825555" style={{"text-decoration":"none"}} style={{color:'white'}}>
                            206-682-5555
                          </a>
                        </HighlightSpan>
                      </small>
                    </Div>
                  </Li>
                </Ul>
                <Ul childenPadding='10px 0'>
                  <Li onClick={()=>{props.onContactClick('email');props.travelTo(false)}}>
                    <Option name="envelope" title="Email" />
                  </Li>
                  <Li onClick={()=>{props.onContactClick('appointment');props.travelTo(false)}}>
                    <Option name="book" title="Set Appointment" />
                  </Li>
                </Ul>
              </Li>
            </NoMPUl>
          </Li>
          <Li width='100%'>
            <NoMPUl childrenBorder='1px solid white'>
              <Li>
                <H3 textAlign='center'  whiteSpace='nowrap' >About Us</H3>
                <Ul childenPadding='10px 0' >
                  <Li onClick={()=>{props.history.push('/knowledge-center/who-we-are');props.travelTo(false)}}>
                    <Option name="shopping-cart" title="Who We Are" />
                  </Li>
                  <Li onClick={()=>{props.history.push('/knowledge-center/services');props.travelTo(false)}}>
                    <Option name="book" title="Our Services" />
                  </Li>
                  <Li onClick={()=>{props.history.push('/knowledge-center/who-we-are/the-team');props.travelTo(false)}}>
                    <Option name="book" title="Our Team" />
                  </Li>
                  <Li onClick={()=>{props.history.push('/knowledge-center/who-we-are/our-reviews');props.travelTo(false)}}>
                    <Option name="star" title="Google Reviews" />
                  </Li>
                </Ul>
              </Li>
            </NoMPUl>
          </Li>
        </NoMPUl>
      </Div>

  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
