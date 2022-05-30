import React from 'react';
import Div from 'shared/Div';
import Styles from './Styles';
import Metal from './Metal';
import CenterStone from './CenterStone';
import Budget from './Budget';
import RingSize from './RingSize';

// -----
const EngagementFAQ = (props) =>{
  return (
    <Div >
      {
        props.generalId === "styles" &&
        <Styles
          detailedId = {props.detailedId}
        />
      }
      {
        props.generalId === "metal-choices" &&
        <Metal
          detailedId = {props.detailedId}
        />
      }
      {
        props.generalId === "center-stone" &&
        <CenterStone
          detailedId = {props.detailedId}
        />
      }
      {
        props.generalId === "budget" &&
        <Budget
          detailedId = {props.detailedId}
        />
      }
      {
        props.generalId === "ring-size" &&
        <RingSize
          detailedId = {props.detailedId}
        />
      }
    </Div>
  )
}
EngagementFAQ.propTypes = {
}
export default EngagementFAQ;
