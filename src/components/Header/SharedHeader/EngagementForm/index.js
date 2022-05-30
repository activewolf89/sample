import React from 'react';
import DropDownForm from '../DropDownForm';
import engagement from 'images/engagementRings.jpg';
import UpdateOrganizeCategoryObjects from 'containers/App/HelperFunctions/UpdateOrganizeCategoryObjects'
import UpdateDesignersArray from 'containers/App/HelperFunctions/UpdateDesignersArray'

import findObjInArray from 'containers/App/HelperFunctions/findObjInArray'
import diamonds from 'images/Diamond0.jpg';

// -----
const EngagementForm = (props) =>{
  return (
    <DropDownForm
      searchObj = {
        {
          name:'Engagement Form',
          link: true,
          contactClick:''
        }
      }
      primaryCategoryChoices = {props.primaryCategoryChoices}
      mobile={props.mobile}
      isShop = {props.isShop}
      onHamburgerClick = {props.onHamburgerClick}
      travelTo={props.travelTo}
      history={props.history}
      onFaqClick = {props.onFaqClick}
      categoryArray={[
        {title:'Engagement',
          catId: 140,
          knowledgeSection: findObjInArray('Engagement Rings',props.knowledgeArray),
          shopDetails:UpdateOrganizeCategoryObjects(140,props.categoryObjects),
          designersArray: UpdateDesignersArray(140,props.categoryObjects),
          rootPath:'/shop/engagement-rings',
          basicRootPath:'/engagement-rings',
          knowledgeRootPath:'/knowledge-center/engagement-rings',
          img:engagement,
        faqSection:props.faqObject.engagement},
        {title:'Diamond',
          shopDetails:UpdateOrganizeCategoryObjects(190,props.categoryObjects),
          rootPath:'/shop/loose-diamonds',
          basicRootPath:'/diamonds',
          knowledgeRootPath:'/knowledge-center/loose-diamonds',
          knowledgeSection: findObjInArray('Loose Diamonds',props.knowledgeArray),
          img:diamonds,
        faqSection:props.faqObject.diamond},
      ]}
    />
  )
}
EngagementForm.propTypes = {
}
export default EngagementForm;
