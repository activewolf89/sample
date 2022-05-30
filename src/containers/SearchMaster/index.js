import React from 'react';
import Div from 'shared/Div'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {makeSelectSearchableCategoryObjects,makeSelectPrimaryCategoryChoices,makeSelectCategoryObjects} from 'containers/App/selectors';
import {makeSelectMoreFilters,makeSelectCurrentOpen,makeSelectLoading,makeSelectTotalCount} from 'containers/ShopNew/selectors';
import { compose } from 'redux';
import {handleAdjustMoreFilters,handleOpenFilterQuestion} from 'containers/ShopNew/actions'
import {handleSearchChange} from 'containers/App/actions';
import SearchInput from './SearchInput';
import getParameterByName from 'containers/ShopNew/Helpers/getParameterByName';
import Helmet from 'shared/Helmet';
// -----
var SearchInHistory = function(str){
  var result = '';
  var resultOfSearch = getParameterByName('search',str)
  if(resultOfSearch){
    result = resultOfSearch
  }
  return result
}
const SearchMaster = (props) =>{
  return (
    <Div >
      <Helmet
        title =  "Search"
        name = "Search"
        href =  "www.ltdenny.com/search"
        content =  "Search our selection of in-stock jewelry inventory or schedule times to talk about custom here"
      />
      <Div padding = '10px 0'>
        <SearchInput
          searchInput={SearchInHistory(props.history.location.search)}
          onOpenFilterQuestion = {props.handleOpenFilterQuestion}
          history={props.history}
          onSearch = {props.handleSearchChange}
        />
      </Div>
    </Div>
  )
}
export function mapDispatchToProps(dispatch){
  return {
    handleSearchChange: (e)=> dispatch(handleSearchChange(e)),
    handleAdjustMoreFilters: ()=> dispatch(handleAdjustMoreFilters()),
    handleOpenFilterQuestion:(currentOpen) => dispatch(handleOpenFilterQuestion(currentOpen)),
  }
}
const mapStateToProps = createStructuredSelector({
  totalCount: makeSelectTotalCount(),
  loading: makeSelectLoading(),
  categoryObjects: makeSelectCategoryObjects(),
  moreFilters: makeSelectMoreFilters(),
  currentOpen: makeSelectCurrentOpen(),
  searchableCategoryObjects: makeSelectSearchableCategoryObjects(),
  primaryCategoryChoices: makeSelectPrimaryCategoryChoices()
})
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(compose(
  withConnect
)(SearchMaster));
