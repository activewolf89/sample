import React from 'react';
import Div from 'shared/Div';
import HistorySelect from './HistorySelect';
import 'react-tabs/style/react-tabs.css';
import InStockOption from './InStockOption';
require('./element.css');
// -----
const funcC0mp = (props) =>{
  return (
    <Div  width='100%' >
      <HistorySelect
        history={props.history}
        searchableCategoryObject = {props.searchableCategoryObject}
        selectCategoryValue = {props.selectCategoryValue}
        primaryCategoryChoices = {props.primaryCategoryChoices}
        whichRoute = {props.whichRoute}
      />

    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
