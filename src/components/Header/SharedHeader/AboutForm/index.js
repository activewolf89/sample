import React from 'react';
import DropDownForm from '../DropDownForm';
import about from 'images/aboutUs.jpg';
import findObjInArray from 'containers/App/HelperFunctions/findObjInArray'


// -----
const Form = (props) =>{
  return (
    <DropDownForm
      searchObj = {
        {
          name:'About Form',
          link: false,
          contactClick:'about'
        }
      }
      mobile={props.mobile}
      isShop = {props.isShop}
      onContactClick={props.onContactClick}
      nonShop = {props.nonShop}
      onHamburgerClick = {props.onHamburgerClick}
      title="OUR STORY"
      travelTo={props.travelTo}
      onFaqClick = {props.onFaqClick}
      categoryArray={[
        {title:'About',
          rootPath:'/about-us',
          knowledgeSection: findObjInArray('Who We Are',props.knowledgeArray),
          img:about,
          basicRootPath:'/about-us',
          knowledgeRootPath:'/knowledge-center/who-we-are',
        faqSection:props.faqObject.about},
      ]}
    />
  )
}
Form.propTypes = {
}
export default Form;
