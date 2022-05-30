import React from 'react';
import Div from 'shared/Div';
//shared
import FontAwesome from 'react-fontawesome';
import CapitalizeFirstLetter from 'containers/App/HelperFunctions/CapitalizeFirstLetter.js';
import Title from 'shared/Title';
import PropTypes from 'prop-types';

import EngagementForm from 'components/Header/SharedHeader/EngagementForm';
import DiamondForm from 'components/Header/SharedHeader/DiamondForm';
import ServiceForm from 'components/Header/SharedHeader/ServiceForm';
import AboutForm from 'components/Header/SharedHeader/AboutForm';
import DesignerForm from 'components/Header/SharedHeader/DesignerForm';
import WeddingForm from 'components/Header/SharedHeader/WeddingForm';
import JewelryForm from 'components/Header/SharedHeader/JewelryForm';
// -----
const DetailBar = (props) =>{
  return (
    <Div  height="100vh"  themed>
      <Div themed onClick={()=>{props.onNavigationClick('')}} display='flex' flexWrap="nowrap" justifyContent="space-between" alignItems="center" padding="10px" >
        <Div>
          <FontAwesome size="2x" name="caret-left" />
        </Div>
        <Title>{props.detailOpen && CapitalizeFirstLetter(props.detailOpen)}</Title>
        <Div />
      </Div>
      {
        props.detailOpen === "engagement"  &&
        <EngagementForm
          onHamburgerClick = {props.onHamburgerClick}
          categoryObjects = {props.categoryObjects}
          faqObject = {props.faqObject}
          onFaqClick = {props.onFaqClick}
          travelTo = {props.travelTo}
        />
      }
      {
        props.detailOpen === "diamond"  &&
        <DiamondForm
          onHamburgerClick = {props.onHamburgerClick}
          categoryObjects = {props.categoryObjects}
          faqObject = {props.faqObject}
          onFaqClick = {props.onFaqClick}
          travelTo = {props.travelTo}
        />
      }
      {
        props.detailOpen === "services"  &&
        <ServiceForm
          onHamburgerClick = {props.onHamburgerClick}
          categoryObjects = {props.categoryObjects}
          faqObject = {props.faqObject}
          onFaqClick = {props.onFaqClick}
          travelTo = {props.travelTo}
        />
      }
      {
        props.detailOpen === "designers"  &&
        <DesignerForm
          designersArray = {props.designersArray}
          onHamburgerClick = {props.onHamburgerClick}
          categoryObjects = {props.categoryObjects}
          faqObject = {props.faqObject}
          onFaqClick = {props.onFaqClick}
          travelTo = {props.travelTo}
        />
      }
      {
        props.detailOpen === "about"  &&
        <AboutForm
          onHamburgerClick = {props.onHamburgerClick}
          categoryObjects = {props.categoryObjects}
          faqObject = {props.faqObject}
          onFaqClick = {props.onFaqClick}
          travelTo = {props.travelTo}
        />
      }
      {
        props.detailOpen === "ladies-bands"  &&
        <WeddingForm
          onHamburgerClick = {props.onHamburgerClick}
          categoryObjects = {props.categoryObjects}
          faqObject = {props.faqObject}
          onFaqClick = {props.onFaqClick}
          travelTo = {props.travelTo}
          number={0}
        />
      }
      {
        props.detailOpen === "mens-bands"  &&
        <WeddingForm
          onHamburgerClick = {props.onHamburgerClick}
          categoryObjects = {props.categoryObjects}
          faqObject = {props.faqObject}
          onFaqClick = {props.onFaqClick}
          travelTo = {props.travelTo}
          number={1}
        />
      }
      {
        props.detailOpen === "necklaces"  &&
        <JewelryForm
          onHamburgerClick = {props.onHamburgerClick}
          categoryObjects = {props.categoryObjects}
          faqObject = {props.faqObject}
          onFaqClick = {props.onFaqClick}
          travelTo = {props.travelTo}
          number={0}
        />
      }
      {
        props.detailOpen === "earrings"  &&
        <JewelryForm
          onHamburgerClick = {props.onHamburgerClick}
          categoryObjects = {props.categoryObjects}
          faqObject = {props.faqObject}
          onFaqClick = {props.onFaqClick}
          travelTo = {props.travelTo}
          number={1}
        />
      }
      {
        props.detailOpen === "fine-rings"  &&
        <JewelryForm
          onHamburgerClick = {props.onHamburgerClick}
          categoryObjects = {props.categoryObjects}
          faqObject = {props.faqObject}
          onFaqClick = {props.onFaqClick}
          travelTo = {props.travelTo}
          number={2}
        />
      }
      {
        props.detailOpen === "bracelets"  &&
        <JewelryForm
          onHamburgerClick = {props.onHamburgerClick}
          categoryObjects = {props.categoryObjects}
          faqObject = {props.faqObject}
          onFaqClick = {props.onFaqClick}
          travelTo = {props.travelTo}
          number={3}
        />
      }
      {
        props.detailOpen === "watches"  &&
        <JewelryForm
          onHamburgerClick = {props.onHamburgerClick}
          categoryObjects = {props.categoryObjects}
          faqObject = {props.faqObject}
          onFaqClick = {props.onFaqClick}
          travelTo = {props.travelTo}
          number={4}
        />
      }
      {
        props.detailOpen === "other"  &&
        <JewelryForm
          onHamburgerClick = {props.onHamburgerClick}
          categoryObjects = {props.categoryObjects}
          faqObject = {props.faqObject}
          onFaqClick = {props.onFaqClick}
          travelTo = {props.travelTo}
          number={5}
        />
      }
    </Div>
  )
}
DetailBar.propTypes = {
  travelTo: PropTypes.func.isRequired,
  onFaqClick: PropTypes.func.isRequired,
  categoryObjects: PropTypes.object.isRequired,
  faqObject: PropTypes.object.isRequired,
}
export default DetailBar;
