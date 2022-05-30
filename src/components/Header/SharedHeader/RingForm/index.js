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
        {title:'Fine Ring',
          knowledgeSection: findObjInArray('Fine Ring',props.knowledgeArray),
          shopDetails:UpdateOrganizeCategoryObjects(130,props.categoryObjects),
          rootPath:'/shop/fine-jewelry/fine-ring',
          basicRootPath:'/fine-jewelry/fine-ring',
          knowledgeRootPath:'/knowledge-center/fine-rings',
          designersArray: UpdateDesignersArray(130,props.categoryObjects),
          img:'',
          catId: 130,
        faqSection:props.faqObject.fineRing},

      ]}
    />
  )
}
Form.propTypes = {
}
export default Form;
