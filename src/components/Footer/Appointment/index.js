import React from 'react';
import PropTypes from 'prop-types';
//shared
import Div from 'shared/Div';
import Title from 'shared/Title';
import LTDennyHome from 'images/ladiesBands.jpg';
import FontAwesome from 'react-fontawesome';
import {Diamond,DiamondText,BackgroundBannerLarge} from './CSS';

// -----
const Appointment = (props) =>{

  return (
    <Div position="relative" border="1px solid black"  themed display="flex" flexDirection="column" justifyContent="center">
      <BackgroundBannerLarge
        height="60%"
        backgroundPosition="center"
        backgroundAttachment="fixed"
        backgroundSize="cover"
        backgroundImg={LTDennyHome}
        width="100%"
      >
        <Diamond themed>
          <DiamondText onClick={()=>{props.onContactClick('appointment')}}>
            <Title capitalize >Visit Us</Title>
            <Title capitalize >In Seattle</Title>
            <Div margin="10px 0 0 0">

              <Title whiteSpace="noWrap"  capitalize underline>APPOINTMENT <FontAwesome name="caret-right" style={{color:'green'}}/></Title>
            </Div>
          </DiamondText>
        </Diamond>
      </BackgroundBannerLarge>

    </Div>
  )
}
Appointment.propTypes = {
  onContactClick: PropTypes.func.isRequired
}
export default Appointment;
