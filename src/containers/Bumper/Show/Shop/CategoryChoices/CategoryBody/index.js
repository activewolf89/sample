import React from 'react';
import Div from 'shared/Div';
import SplitIntoFilters from './SplitIntoFilters';
import CheckHistory from '../CheckHistory';
// -----
const funcC0mp = (props) =>{
  return (
    <Div >

      <Div>
        <SplitIntoFilters
          selectCategoryValue = {props.selectCategoryValue}
          promoObject = {props.promoObject}
          onToggleSearchByItem = {props.onToggleSearchByItem}
          onTheChange = {props.onTheChange}
          CheckHistory = {props.CheckHistory}
          options = {props.options}
          CheckHistoryLink = {props.CheckHistoryLink}
          ConnectValueWithLink = {props.ConnectValueWithLink}
          onLoadItemNumbers = {props.onLoadItemNumbers}
          history = {props.history}
          isOpen={props.isOpen}
          ratio = {props.ratio}
          itemKeys ={props.itemKeys}
          isSearchItemKey = {props.isSearchItemKey}
          onToggleDetail = {props.onToggleDetail}
          searchableCategoryObject = {props.searchableCategoryObject}
          categoryObjects = {props.categoryObjects}
          catId = {CheckHistory(props.history.location.pathname,props.isOpen)}
        />
      </Div>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
