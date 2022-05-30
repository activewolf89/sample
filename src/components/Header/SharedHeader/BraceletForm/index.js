import React from 'react';
import DropDownForm from '../DropDownForm';
import UpdateOrganizeCategoryObjects from 'containers/App/HelperFunctions/UpdateOrganizeCategoryObjects'
import UpdateDesignersArray from 'containers/App/HelperFunctions/UpdateDesignersArray'
import findObjInArray from 'containers/App/HelperFunctions/findObjInArray'

// -----
const Form = (props) =>{
  return (
    <DropDownForm
      mobile={props.mobile}
      isShop = {props.isShop}
      searchObj = {
        {
          name:'Jewelry Form',
          link: true,
          contactClick:''
        }
      }
      history={props.history}
      primaryCategoryChoices = {props.primaryCategoryChoices}
      onHamburgerClick = {props.onHamburgerClick}
      travelTo={props.travelTo}
      onFaqClick = {props.onFaqClick}
      number={0}
      categoryArray={[

        {title:'Bracelets',
          knowledgeSection: findObjInArray('Bracelet',props.knowledgeArray),
          catId: 170,
          shopDetails:UpdateOrganizeCategoryObjects(170,props.categoryObjects),
          rootPath:'/shop/fine-jewelry/bracelets',
          basicRootPath:'/fine-jewelry/bracelets',
          knowledgeRootPath:'/knowledge-center/bracelets',
          designersArray: UpdateDesignersArray(170,props.categoryObjects),
          img:'',
        faqSection:props.faqObject.bracelet},

      ]}
    />
  )
}
Form.propTypes = {
}
export default Form;
