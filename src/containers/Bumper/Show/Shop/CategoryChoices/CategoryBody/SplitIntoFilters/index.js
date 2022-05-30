import React from 'react';
import Div from 'shared/Div';
import FilterSection from 'components/ShopDetailsMaster/FilterSection';

// -----
const funcC0mp = (props) =>{
  return (
    <Div >
      <FilterSection
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
        searchableCategoryObject = {props.searchableCategoryObject}
        categoryObjects = {props.categoryObjects}
        loadRest = {true}
        catId = {props.catId}
        onToggleDetail={props.onToggleDetail}
        toggle={props.toggle}
        onToggleFilter={props.handleToggleFilter}
        products = {[]}
        search = {props.history.location.search}
        isFilterOpen = {props.isFilterOpen}
        isShowAll = {props.isShowAll}
      />
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
