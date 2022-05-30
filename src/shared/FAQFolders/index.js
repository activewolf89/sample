import React from 'react';
import Div from 'shared/Div';
import EngagementFAQ from './EngagementFAQ';
import DiamondFAQ from './DiamondFAQ';
import LadiesFAQ from './LadiesFAQ';
import GentsFAQ from './GentsFAQ';
import PolicyFAQ from './PolicyFAQ';
import AboutUsFAQ from './AboutUsFAQ';
import BraceletFAQ from './BraceletFAQ';
import DesignerFAQ from './DesignerFAQ';
import EarringFAQ from './EarringFAQ';
import FineRingFAQ from './FineRingFAQ';
import NecklaceFAQ from './NecklaceFAQ';
import OtherFAQ from './OtherFAQ';
import WatchFAQ from './WatchFAQ';
import ServiceFAQ from './ServiceFAQ';

// -----
const FAQFolders = (props) =>{
  return (
    <Div fontStyle="italic">

      {
        props.category === "about-us" &&
        <AboutUsFAQ
          generalId = {props.generalId}
          detailedId = {props.detailedId}
        />
      }
      {
        props.category === "bracelet" &&
        <BraceletFAQ
          generalId = {props.generalId}
          detailedId = {props.detailedId}
        />
      }
      {
        props.category === "designer" &&
        <DesignerFAQ
          generalId = {props.generalId}
          detailedId = {props.detailedId}
        />
      }
      {
        props.category === "earrings" &&
        <EarringFAQ
          generalId = {props.generalId}
          detailedId = {props.detailedId}
        />
      }
      {
        props.category === "fine-rings" &&
        <FineRingFAQ
          generalId = {props.generalId}
          detailedId = {props.detailedId}
        />
      }
      {
        props.category === "necklace" &&
        <NecklaceFAQ
          generalId = {props.generalId}
          detailedId = {props.detailedId}
        />
      }
      {
        props.category === "other" &&
        <OtherFAQ
          generalId = {props.generalId}
          detailedId = {props.detailedId}
        />
      }
      {
        props.category === "watch" &&
        <WatchFAQ
          generalId = {props.generalId}
          detailedId = {props.detailedId}
        />
      }
      {
        props.category === "engagement" &&
        <EngagementFAQ
          generalId = {props.generalId}
          detailedId = {props.detailedId}
        />
      }
      {
        props.category === "ladies" &&
        <LadiesFAQ
          generalId = {props.generalId}
          detailedId = {props.detailedId}
        />
      }
      {
        props.category === "gents" &&
        <GentsFAQ
          generalId = {props.generalId}
          detailedId = {props.detailedId}
        />
      }
      {
        props.category === "diamond" &&
        <DiamondFAQ
          generalId = {props.generalId}
          detailedId = {props.detailedId}
        />
      }
      {
        props.category === "services" &&
        <ServiceFAQ
          generalId = {props.generalId}
          detailedId = {props.detailedId}
        />
      }
      {
        props.category === "policy" &&
        <PolicyFAQ
          generalId = {props.generalId}
          detailedId = {props.detailedId}
        />
      }
    </Div>
  )
}
FAQFolders.propTypes = {
}
export default FAQFolders;
