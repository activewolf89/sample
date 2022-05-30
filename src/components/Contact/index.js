import React from 'react';
import Div from 'shared/Div';
import MasterHours from 'containers/MasterHours';
import AppointmentMap from './AppointmentMap';
import {H1} from 'shared/H';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import StyleBox from './StyleBox';
import P from 'shared/P'
import Email from 'images/email.jpg'
import Zoom from 'images/zoom.jpeg'
import Calendar from 'images/calendar.jpg'
import Text from 'images/text.jpg'
import HeaderTitle from 'shared/HeaderTitle';
import Helmet from 'shared/Helmet'
// -----
const funcC0mp = (props) =>{
  return (
    <Div  color='black' textAlign='center'  >
      <Div width='100%' maxWidth='996px' display='flex' justifyContent='center'>

        <Div >
          <Helmet
            title =  "Contact Us"
            name = "Contact Us"
            href =  "www.ltdenny.com/contact-us"
            content =  "Customers interested in our services, repairs, and jewelry consultation can contact us here.  We respond to text messages at 206-682-5555 within 24 hours."
          />
          <HeaderTitle
            title={"Contact Us"}
          />
        </Div>
        <MasterHours
          center
          noTitle
          dropdown={true}
          noCaret
        />

        <P>
          We are currently working by appointment-only in our only location in Seattle, Washington by the Stadiums. You may contact us through any of these methods below for assistance.
        </P>
        <NoMPUl childrenPadding='5px 0' childrenBorder='1px solid gray'>
          <Li>
            <StyleBox
              onContactClick = {props.onContactClick}
              title="Reach Out"
              direct="email"
              name="Email Us"
              boxImage = {Email}
              description="Your message to us will be returned within 24 hours of a business day"
              link="/contact-us/email"
            />
          </Li>
          <Li>
            <StyleBox
              onContactClick = {props.onContactClick}
              direct="appointment"
              title="Virtual Schedule"
              name="Zoom Meeting"
              boxImage = {Zoom}
              description="We have worked with many of our customers across the country during these times as well as customers that have moved and need to talk remotely"
              link="/contact-us/appointment"
            />

          </Li>
          <Li>

            <StyleBox
              onContactClick = {props.onContactClick}
              direct="appointment"
              title="In-store Appointment"
              name="Calendar Appointment"
              boxImage = {Calendar}
              description="We require appointments to ensure proper spacing and cleaning after each visit"
              link="/contact-us/appointment"
            />

          </Li>
          <Li>

            <StyleBox
              textUs
              title="Call or Text Us"
              name="Start Chat"
              boxImage = {Text}
              description="You can text us anytime at 206-682-5555, or call and we will get back to you within 24 hours of a business day.  You can also gain access to texting by clicking on the bottom right floating icon"

            />
          </Li>
        </NoMPUl>

        <AppointmentMap />
      </Div>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
