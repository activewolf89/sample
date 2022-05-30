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
      primaryCategoryChoices = {props.primaryCategoryChoices}
      history={props.history}
      onHamburgerClick = {props.onHamburgerClick}
      travelTo={props.travelTo}
      onFaqClick = {props.onFaqClick}
      number={0}
      categoryArray={[
        {title:'Earrings',
          knowledgeSection: findObjInArray('Earrings',props.knowledgeArray),
          shopDetails:UpdateOrganizeCategoryObjects(150,props.categoryObjects),
          rootPath:'/shop/fine-jewelry/earrings',
          basicRootPath:'/fine-jewelry/earrings',
          knowledgeRootPath:'/knowledge-center/earrings',
          designersArray: UpdateDesignersArray(150,props.categoryObjects),

          catId: 150,
          img:'',
        faqSection:props.faqObject.earring},

      ]}
    />
  )
}
Form.propTypes = {
}
export default Form;
