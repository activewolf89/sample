import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';
//shared

import GeneralTab from './GeneralTab';
import SimilarTab from './SimilarTab';
import RecentlyViewedTab from './RecentlyViewedTab';
import ProductDescription from './ProductDescription';
import ReturnCategoryIdViaPathname from 'containers/KnowledgeCenter/Functions/ReturnCategoryIdViaPathname'
import FindObjectOfKnowledgeArray from 'containers/KnowledgeCenter/Functions/FindObjectOfKnowledgeArray'
import ReturnTab from './ReturnTab';
// -----

const Details = (props) =>{
  return (
    <Div  >


      <Div gridArea="col0" padding="3px 0" >
        {
          props.categoryObjects.searchableCategoryObject && props.categoryObjects &&
          <GeneralTab
            Item={props.item}
            onContactClick = {props.onContactClick}
            onDetailClick = {props.onDetailClick}
            isOn = {props.detailItemObject.general}
            jewelryArray = {props.categoryObjects.searchableCategoryObject[ReturnCategoryIdViaPathname(props.history.location.pathname)].jewelry}
            stoneArray = {props.categoryObjects.searchableCategoryObject[ReturnCategoryIdViaPathname(props.history.location.pathname)].stones}
            knowledgeArray ={FindObjectOfKnowledgeArray(props.knowledgeObjects,props.history.location.pathname)}
            catId={ReturnCategoryIdViaPathname(props.history.location.pathname)}
          />
        }

      </Div>
      <Div gridArea="col4" padding="3px 0">
        {
          <ProductDescription
            description={props.item.Online_Web_Description}
            title={props.item.Online_Web_Title}
            onContactClick = {props.onContactClick}
            onDetailClick = {props.onDetailClick}
            isOn={props.detailItemObject.general}
          />
        }
      </Div>
      <ReturnTab
        isOn = {props.detailItemObject.gaurantee}
        onDetailClick = {props.onDetailClick}
      />
      <Div gridArea="col1" padding="3px 0">
        {
          props.similar && props.similar.length > 0 &&
          <SimilarTab
            onUnmount = {props.onUnmount}
            history={props.history}
            similar = {props.similar}
            onDetailClick = {props.onDetailClick}
            isOn = {props.detailItemObject.similar}
            onUpdateItem = {props.onUpdateItem}
            onAddToWishlist = {props.onAddToWishlist}

          />
        }
      </Div>
      <Div gridArea="col2" padding="3px 0">
        {
          props.recentlyViewed && props.recentlyViewed.length > 0 &&
          <RecentlyViewedTab
            onUpdateItem = {props.onUpdateItem}
            onUnmount = {props.onUnmount}
            recentlyViewed = {props.recentlyViewed}
            history={props.history}
            onDetailClick = {props.onDetailClick}
            isOn = {props.detailItemObject.recentlyViewed}
            onAddToWishlist = {props.onAddToWishlist}
            item={props.item}
          />
        }
      </Div>
    </Div>
  )
}
Details.propTypes = {
  onDetailClick: PropTypes.func.isRequired,
  detailItemObject: PropTypes.object
}
export default Details;
