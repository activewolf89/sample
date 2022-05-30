import React from 'react';
import Div from 'shared/Div';
import EngagementForm from 'components/Header/SharedHeader/EngagementForm'
import DiamondForm from 'components/Header/SharedHeader/DiamondForm'
import LadiesForm from 'components/Header/SharedHeader/LadiesForm'
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
            primaryCategoryChoices = {props.primaryCategoryChoices[140]}
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
            primaryCategoryChoices = {props.primaryCategoryChoices[190]}
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
        props.isDetails ==="Gents Bands" ?
          <WeddingForm
            primaryCategoryChoices = {props.primaryCategoryChoices[110]}
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
        props.isDetails ==="Ladies Bands" ?
          <LadiesForm
            mobile={true}
            primaryCategoryChoices = {props.primaryCategoryChoices[115]}
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
            primaryCategoryChoices = {props.primaryCategoryChoices[165]}
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
            primaryCategoryChoices = {props.primaryCategoryChoices[150]}
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
        props.isDetails ==="Fashion Rings" ?
          <JewelryForm
            mobile={true}
            primaryCategoryChoices = {props.primaryCategoryChoices[130]}
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
            primaryCategoryChoices = {props.primaryCategoryChoices[170]}
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
            primaryCategoryChoices = {props.primaryCategoryChoices[500]}
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
            primaryCategoryChoices = {props.primaryCategoryChoices[999]}
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
