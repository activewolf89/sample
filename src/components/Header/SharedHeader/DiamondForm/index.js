import React from 'react';
import DropDownForm from '../DropDownForm';
import diamonds from 'images/Diamond0.jpg';
import findObjInArray from 'containers/App/HelperFunctions/findObjInArray'
import engagement from 'images/engagementRings.jpg';
import UpdateOrganizeCategoryObjects from 'containers/App/HelperFunctions/UpdateOrganizeCategoryObjects'
import UpdateDesignersArray from 'containers/App/HelperFunctions/UpdateDesignersArray'


// -----
const Form = (props) =>{
  return (
    <DropDownForm
      mobile={props.mobile}
      isShop = {props.isShop}
      searchObj = {
        {
          name:'Diamond Form',
          link: true,
          contactClick:''
        }
      }
      history={props.history}
      primaryCategoryChoices = {props.primaryCategoryChoices}
      onHamburgerClick = {props.onHamburgerClick}
      travelTo={props.travelTo}
      onFaqClick = {props.onFaqClick}
      categoryArray={[
        {title:'Diamond',
          shopDetails:UpdateOrganizeCategoryObjects(190,props.categoryObjects),
          rootPath:'/shop/loose-diamonds',
          basicRootPath:'/loose-diamonds',
          knowledgeRootPath:'/knowledge-center/loose-diamonds',
          knowledgeSection: findObjInArray('Loose Diamonds',props.knowledgeArray),
          img:diamonds,
        faqSection:props.faqObject.diamond},
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
      ]}
    />
  )
}
Form.propTypes = {
}
export default Form;
