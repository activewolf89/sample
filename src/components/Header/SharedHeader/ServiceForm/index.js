import React from 'react';
import DropDownForm from '../DropDownForm';
import findObjInArray from 'containers/App/HelperFunctions/findObjInArray'

// -----
const Form = (props) =>{
  return (
    <DropDownForm
      searchObj = {
        {
          name:'Service Form',
          link: false,
          contactClick:'services'
        }
      }
      mobile={props.mobile}
      isShop = {props.isShop}
      nonShop = {props.nonShop}
      onContactClick={props.onContactClick}
      serviceButton
      onHamburgerClick = {props.onHamburgerClick}
      travelTo={props.travelTo}
      onFaqClick = {props.onFaqClick}
      categoryArray={[
        {title:'Services',
          knowledgeSection: findObjInArray('Services',props.knowledgeArray),
          rootPath:'/services',
          basicRootPath:'/services',
          knowledgeRootPath:'/knowledge-center/services',
          img:'',
        faqSection:props.faqObject.services},
      ]}
    />
  )
}
Form.propTypes = {
}
export default Form;
