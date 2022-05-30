import React from 'react';
import Div from 'shared/Div';
import CategoryChoices from './CategoryChoices';
var Immutable = require('immutable');
// -----
const funcC0mp = (props) =>{
  return (
    <Div  display='flex' flexWrap='nowrap' >
      <Div width='100%'>
        {
          !(props.searchableCategoryObject instanceof Immutable.Map) &&
          <CategoryChoices
            selectCategoryValue = {props.selectCategoryValue}
            promoObject = {props.promoObject}
            onToggleSearchByItem = {props.onToggleSearchByItem}
            onLoadItemNumbers = {props.onLoadItemNumbers}
            searchableCategoryObject = {props.searchableCategoryObject}
            categoryObjects = {props.categoryObjects}
            history={props.history}
            onToggleDetail = {props.onToggleDetail}
            onTheChange = {props.onTheChange}
            options = {props.options}
            isOpen = {props.isOpen}
            itemKeys ={props.itemKeys}
            isSearchItemKey = {props.isSearchItemKey}
            ratio = {props.ratio}
          />
        }
      </Div>

    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
