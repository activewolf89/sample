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
        {title:'Necklaces',
          catId: 165,
          knowledgeSection: findObjInArray('Necklaces',props.knowledgeArray),
          shopDetails:UpdateOrganizeCategoryObjects(165,props.categoryObjects),
          rootPath:'/shop/fine-jewelry/necklaces',
          basicRootPath:'/fine-jewelry/necklaces',
          knowledgeRootPath:'/knowledge-center/necklaces',
          designersArray: UpdateDesignersArray(165,props.categoryObjects),
          img:'',
        faqSection:props.faqObject.necklace},

      ]}
    />
  )
}
Form.propTypes = {
}
export default Form;
