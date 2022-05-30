import React from 'react';
import Div from 'shared/Div';
import Overview from './Overview';
import OurMission from './OurMission';
import OurDirection from './OurDirection';

// -----
const AboutUsFAQ = (props) =>{
  return (
    <Div >
      {
        props.generalId === "overview" &&
        <Overview
          detailedId = {props.detailedId}
        />
      }
      {
        props.generalId === "our-mission" &&
        <OurMission
          detailedId = {props.detailedId}
        />
      }
      {
        props.generalId === "our-direction" &&
        <OurDirection
          detailedId = {props.detailedId}
        />
      }
    </Div>
  )
}
AboutUsFAQ.propTypes = {
}
export default AboutUsFAQ;
