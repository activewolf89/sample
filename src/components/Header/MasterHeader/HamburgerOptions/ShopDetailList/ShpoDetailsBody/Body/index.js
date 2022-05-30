import React from 'react';
import Div from 'shared/Div';
import EngagementForm from 'components/Header/SharedHeader/EngagementForm'
import DiamondForm from 'components/Header/SharedHeader/DiamondForm'
import WeddingForm from 'components/Header/SharedHeader/WeddingForm'
import JewelryForm from 'components/Header/SharedHeader/JewelryForm'
import ServiceForm from 'components/Header/SharedHeader/ServiceForm'
import DesignerForm from 'components/Header/SharedHeader/DesignerForm'
import AboutForm from 'components/Header/SharedHeader/AboutForm'

// -----
const funcC0mp = (props) =>{
  return (
    <Div  >
      {
        props.isDetails ==="Engagement" ?
          <EngagementForm
            mobile={true}
            isShop = {props.isShop}
            history={props.history}
            knowledgeArray = {props.knowledgeArray}
            travelTo={props.travelTo}
            onFaqClick = {props.onFaqClick}
            categoryObjects = {props.categoryObjects}
            faqObject = {props.faqObject}
            onHamburgerClick={props.onHamburgerClick}
          />:
        props.isDetails ==="Diamond" ?
          <DiamondForm
            mobile={true}
            isShop = {props.isShop}
            history={props.history}
            knowledgeArray = {props.knowledgeArray}
            travelTo={props.travelTo}
            onFaqClick = {props.onFaqClick}
            categoryObjects = {props.categoryObjects}
            faqObject = {props.faqObject}
            onHamburgerClick={props.onHamburgerClick}

          />:
        props.isDetails ==="Ladies Bands" ?
          <WeddingForm
            mobile={true}
            isShop = {props.isShop}
            history={props.history}
            number = {0}
            knowledgeArray = {props.knowledgeArray}
            travelTo={props.travelTo}
            onFaqClick = {props.onFaqClick}
            categoryObjects = {props.categoryObjects}
            faqObject = {props.faqObject}
            onHamburgerClick={props.onHamburgerClick}

          />:
        props.isDetails ==="Necklaces" ?
          <JewelryForm
            mobile={true}
            isShop = {props.isShop}
            number = {0}
            knowledgeArray = {props.knowledgeArray}
            history={props.history}
            travelTo={props.travelTo}
            onFaqClick = {props.onFaqClick}
            categoryObjects = {props.categoryObjects}
            faqObject = {props.faqObject}
            onHamburgerClick={props.onHamburgerClick}

          />:
        props.isDetails ==="Earrings" ?
          <JewelryForm
            mobile={true}
            isShop = {props.isShop}
            number = {1}
            knowledgeArray = {props.knowledgeArray}
            history={props.history}
            travelTo={props.travelTo}
            onFaqClick = {props.onFaqClick}
            categoryObjects = {props.categoryObjects}
            faqObject = {props.faqObject}
            onHamburgerClick={props.onHamburgerClick}

          />:
        props.isDetails ==="Fine Ring" ?
          <JewelryForm
            mobile={true}
            isShop = {props.isShop}
            number = {2}
            knowledgeArray = {props.knowledgeArray}
            history={props.history}
            travelTo={props.travelTo}
            onFaqClick = {props.onFaqClick}
            categoryObjects = {props.categoryObjects}
            faqObject = {props.faqObject}
            onHamburgerClick={props.onHamburgerClick}

          />:
        props.isDetails ==="Bracelets" ?
          <JewelryForm
            mobile={true}
            isShop = {props.isShop}
            number = {3}
            knowledgeArray = {props.knowledgeArray}
            history={props.history}
            travelTo={props.travelTo}
            onFaqClick = {props.onFaqClick}
            categoryObjects = {props.categoryObjects}
            faqObject = {props.faqObject}
            onHamburgerClick={props.onHamburgerClick}

          />:
        props.isDetails ==="Watches" ?
          <JewelryForm
            mobile={true}
            isShop = {props.isShop}
            number = {4}
            knowledgeArray = {props.knowledgeArray}
            history={props.history}
            travelTo={props.travelTo}
            onFaqClick = {props.onFaqClick}
            categoryObjects = {props.categoryObjects}
            faqObject = {props.faqObject}
            onHamburgerClick={props.onHamburgerClick}

          />:
        props.isDetails ==="Other" ?
          <JewelryForm
            mobile={true}
            isShop = {props.isShop}
            number = {5}
            knowledgeArray = {props.knowledgeArray}
            history={props.history}
            travelTo={props.travelTo}
            onFaqClick = {props.onFaqClick}
            categoryObjects = {props.categoryObjects}
            faqObject = {props.faqObject}
            onHamburgerClick={props.onHamburgerClick}
          />:
        props.isDetails ==="Services" ?
          <ServiceForm
            mobile={true}
            isShop = {props.isShop}
            nonShop
            onContactClick={props.onContactClick}
            knowledgeArray = {props.knowledgeArray}
            travelTo={props.travelTo}
            onFaqClick = {props.onFaqClick}
            categoryObjects = {props.categoryObjects}
            faqObject = {props.faqObject}
            onHamburgerClick={props.onHamburgerClick}
          />:
        props.isDetails ==="Designers" ?

          <DesignerForm
            nonShop
            onContactClick={props.onContactClick}
            mobile={true}
            isShop = {props.isShop}
            knowledgeArray = {props.knowledgeArray}
            designersArray={props.designersArray}
            travelTo={props.travelTo}
            onFaqClick = {props.onFaqClick}
            categoryObjects = {props.categoryObjects}
            faqObject = {props.faqObject}
            onHamburgerClick={props.onHamburgerClick}
          />:
          <Div>
            <AboutForm
              mobile={true}
              isShop = {props.isShop}
              nonShop
              onContactClick={props.onContactClick}
              knowledgeArray = {props.knowledgeArray}
              travelTo={props.travelTo}
              onFaqClick = {props.onFaqClick}
              categoryObjects = {props.categoryObjects}
              faqObject = {props.faqObject}
              onHamburgerClick={props.onHamburgerClick}

            />
          </Div>
            }
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
