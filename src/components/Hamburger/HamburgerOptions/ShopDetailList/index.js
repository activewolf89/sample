import React from 'react';
import Div from 'shared/Div';
import ShopDetailsHeader from './ShopDetailsHeader';
import ShpoDetailsBody from './ShpoDetailsBody';
// -----
const funcC0mp = (props) =>{
  return (
    <Div  themed height='100vh'  overflowY='scroll'>
      <Div backgroundColor='white' color='black' >
        <ShopDetailsHeader
          isDetails ={props.isDetails}
          onDetaillist = {props.onDetaillist}
        />
        <Div>
          <ShpoDetailsBody
            onHamburgerClick = {props.onHamburgerClick}
            isDetails ={props.isDetails}
            categoryObjects = {props.categoryObjects}
            knowledgeArray = {props.knowledgeArray}
            travelTo = {props.travelTo}
            history = {props.history}
            onFaqClick = {props.onFaqClick}
            faqObject={props.faqObject}
            onContactClick={props.onContactClick}
            primaryCategoryChoices = {props.primaryCategoryChoices}
          />
        </Div>
      </Div>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
