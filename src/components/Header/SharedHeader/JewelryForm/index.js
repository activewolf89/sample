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
      number={props.number}
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
        {title:'Bracelets',
          knowledgeSection: findObjInArray('Bracelet',props.knowledgeArray),
          catId: 170,
          shopDetails:UpdateOrganizeCategoryObjects(170,props.categoryObjects),
          rootPath:'/shop/fine-jewelry/bracelets',
          basicRootPath:'/fine-jewelry/bracelets',
          knowledgeRootPath:'/knowledge-center/bracelets',
          designersArray: UpdateDesignersArray(170,props.categoryObjects),
          img:'',
        faqSection:props.faqObject.bracelet},
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
