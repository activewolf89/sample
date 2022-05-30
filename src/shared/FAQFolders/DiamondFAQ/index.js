import React from 'react';
import Div from 'shared/Div';
import DiamondCertificate from './DiamondCertificate';
import DiamondCut from './DiamondCut';
import DiamondColor from './DiamondColor';
import DiamondClarity from './DiamondClarity';
import DiamondCarat from './DiamondCarat';
import StoneSourcing from './StoneSourcing';

// -----
const DiamondFAQ = (props) =>{
  return (
    <Div >
      {
        props.generalId === "diamond-certificate" &&
        <DiamondCertificate
          detailedId = {props.detailedId}
        />
      }
      {
        props.generalId === "four-c-cut" &&
        <DiamondCut
          detailedId = {props.detailedId}
        />
      }
      {
        props.generalId === "four-c-color" &&
        <DiamondColor
          detailedId = {props.detailedId}
        />
      }
      {
        props.generalId === "four-c-clarity" &&
        <DiamondClarity
          detailedId = {props.detailedId}
        />
      }
      {
        props.generalId === "four-c-carat" &&
        <DiamondCarat
          detailedId = {props.detailedId}
        />
      }
      {
        props.generalId === "stone-sourcing" &&
        <StoneSourcing
          detailedId = {props.detailedId}
        />
      }
    </Div>
  )
}
export default DiamondFAQ
DiamondFAQ.propTypes = {
}
