import React from 'react';
import DropDownForm from '../DropDownForm';
import designer from 'images/tacori.jpg';
import findObjInArray from 'containers/App/HelperFunctions/findObjInArray'


// -----
const Form = (props) =>{
  return (
    <DropDownForm
      searchObj = {
        {
          name:'Designer Form',
          link: '/designers',
          contactClick:''
        }
      }
      mobile={props.mobile}
      isShop = {props.isShop}
      history={props.history}
      nonShop = {props.nonShop}
      onHamburgerClick = {props.onHamburgerClick}
      travelTo={props.travelTo}
      title="SHOP"
      designersArray={props.categoryObjects.vendorCategoryObject}
      onFaqClick = {props.onFaqClick}
      fromDesigner
      categoryArray={[
        {title:'Designers',
          knowledgeSection: findObjInArray('Designers',props.knowledgeArray),
          rootPath:'/designers',
          basicRootPath:'/designers',
          knowledgeRootPath:'/knowledge-center/designers',
          img:designer,
        faqSection:props.faqObject.designer},
      ]}
    />
  )
}
Form.propTypes = {
}
export default Form;
