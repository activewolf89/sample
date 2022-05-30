import React from 'react';
import Div from 'shared/Div';
import LadiesRingStyles from './LadiesRingStyles';
import MatchingRing from './MatchingRing';
import LadiesRingSize from './LadiesRingSize';
import LadiesMetalOptions from './LadiesMetalOptions';

// -----
const LadiesFAQ = (props) =>{
  return (
    <Div >
      {
        props.generalId === "ladies-ring-styles" &&
        <LadiesRingStyles
          detailedId = {props.detailedId}
        />
      }
      {
        props.generalId === "match-my-band" &&
        <MatchingRing
          detailedId = {props.detailedId}
        />
      }
      {
        props.generalId === "ladies-ring-size" &&
        <LadiesRingSize
          detailedId = {props.detailedId}
        />
      }
      {
        props.generalId === "ladies-metal-options" &&
        <LadiesMetalOptions
          detailedId = {props.detailedId}
        />
      }

    </Div>
  )
}
export default LadiesFAQ
LadiesFAQ.propTypes = {
}
