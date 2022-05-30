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

        {title:'Other',
          catId: 999,
          shopDetails:UpdateOrganizeCategoryObjects(999,props.categoryObjects),
          img:'',
          knowledgeSection: findObjInArray('Other',props.knowledgeArray),
          rootPath:'/shop/fine-jewelry/other',
          designersArray: UpdateDesignersArray(999,props.categoryObjects),
          basicRootPath:'/fine-jewelry/other',
          knowledgeRootPath:'/knowledge-center/others',
        faqSection:props.faqObject.other},
      ]}
    />
  )
}
Form.propTypes = {
}
export default Form;
