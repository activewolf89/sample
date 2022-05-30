import React from 'react';
import DropDownForm from '../DropDownForm';
import mensBand from 'images/mensBand.jpg';
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
      history={props.history}
      primaryCategoryChoices = {props.primaryCategoryChoices}
      onHamburgerClick = {props.onHamburgerClick}
      travelTo={props.travelTo}
      onFaqClick = {props.onFaqClick}
      onContactClick={props.onContactClick}
      number={props.number}
      categoryArray={[
        {title:'Mens Bands',
          shopDetails:UpdateOrganizeCategoryObjects(110,props.categoryObjects),
          catId: 110,
          knowledgeSection: findObjInArray('Gents Bands',props.knowledgeArray),
          knowledgeRootPath:'/knowledge-center/gents-bands',
          designersArray: UpdateDesignersArray(110,props.categoryObjects),
          rootPath:'/shop/wedding-bands/mens-bands',
          basicRootPath:'/wedding-bands/mens-bands',
          img:mensBand,
        faqSection:props.faqObject.gents},
      ]}
    />
  )
}
Form.propTypes = {
}
export default Form;
