import React from 'react';
import Div from 'shared/Div';
import SpecialOrders from './SpecialOrders';
import Service from './Service';
import JewelryInsurance from './JewelryInsurance';
import JewelryCleaning from './JewelryCleaning';

// -----
const PolicyFAQ = (props) =>{
  return (
    <Div >
      {
        props.generalId === "special-orders" &&
        <SpecialOrders
          detailedId = {props.detailedId}
        />
      }
      {
        props.generalId === "services" &&
        <Service
          detailedId = {props.detailedId}
        />
      }
      {
        props.generalId === "insurance" &&
        <JewelryInsurance
          detailedId = {props.detailedId}
        />
      }
      {
        props.generalId === "jewelry-cleaning" &&
        <JewelryCleaning
          detailedId = {props.detailedId}
        />
      }
    </Div>
  )
}
PolicyFAQ.propTypes = {
}
export default PolicyFAQ;
