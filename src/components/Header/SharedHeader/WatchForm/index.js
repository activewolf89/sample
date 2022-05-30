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
        {title:'Watches',
          catId: 500,
          knowledgeSection: findObjInArray('Watch',props.knowledgeArray),
          shopDetails:UpdateOrganizeCategoryObjects(500,props.categoryObjects),
          img:'',
          basicRootPath:'/fine-jewelry/watches',
          rootPath:'/shop/fine-jewelry/watches',
          designersArray: UpdateDesignersArray(500,props.categoryObjects),
          knowledgeRootPath:'/knowledge-center/watches',
        faqSection:props.faqObject.watch},

      ]}
    />
  )
}
Form.propTypes = {
}
export default Form;
