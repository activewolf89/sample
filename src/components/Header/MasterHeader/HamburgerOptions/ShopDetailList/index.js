import React from 'react';
import Div from 'shared/Div';
import ShopDetailsHeader from './ShopDetailsHeader';
import ShpoDetailsBody from './ShpoDetailsBody';
// -----
const funcC0mp = (props) =>{
  return (
    <Div  themed height='100%' >
      <Div backgroundColor='white' color='black'>
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
            onHamburgerClick = {props.onHamburgerClick}
            onContactClick={props.onContactClick}
          />
        </Div>
      </Div>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
