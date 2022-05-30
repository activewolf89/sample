import React from 'react';
import DropDownForm from '../DropDownForm';
import ladiesBands from 'images/ladiesBands.jpg';
import UpdateOrganizeCategoryObjects from 'containers/App/HelperFunctions/UpdateOrganizeCategoryObjects'
import findObjInArray from 'containers/App/HelperFunctions/findObjInArray'
import UpdateDesignersArray from 'containers/App/HelperFunctions/UpdateDesignersArray'

// -----
const Form = (props) =>{
  return (
    <DropDownForm
      mobile={props.mobile}
      isShop = {props.isShop}
      searchObj = {
        {
          name:'Wedding Form',
          link: 'false',
          contactClick:''
        }
      }
      primaryCategoryChoices = {props.primaryCategoryChoices}
      history={props.history}
      onHamburgerClick = {props.onHamburgerClick}
      travelTo={props.travelTo}
      onFaqClick = {props.onFaqClick}
      onContactClick={props.onContactClick}
      number={0}
      categoryArray={[
        {title:'Ladies Bands',
          catId: 115,
          knowledgeSection: findObjInArray('Ladies Bands',props.knowledgeArray),
          shopDetails:UpdateOrganizeCategoryObjects(115,props.categoryObjects),
          rootPath:'/shop/wedding-bands/ladies-bands',
          knowledgeRootPath:'/knowledge-center/ladies-bands',
          basicRootPath:'/wedding-bands',
          designersArray: UpdateDesignersArray(115,props.categoryObjects),
          img:ladiesBands,
        faqSection:props.faqObject.ladies},

      ]}
    />
  )
}
Form.propTypes = {
}
export default Form;
