import React from 'react';
import Div from 'shared/Div';
import Span from 'shared/Span';
import ClickableFilters from './ClickableFilters.js';
import GatherFilters from 'containers/ShopNew/Helpers/GatherFilters';
import RemoveFilter from 'containers/ShopNew/Helpers/RemoveFilter';
import FontAwesome from 'react-fontawesome';
import {H4} from 'shared/H';

// -----
const funcC0mp = (props) =>{
  var Filters = GatherFilters(props.history,props.categoryObjects.searchableCategoryObject[props.catId],props.categoryObjects.vendorCategoryObject)
  return (
    <Div themed >

      {
        !props.onlyRemovable &&
        <Div>

          <Div themed borderBottom='1px solid white' display='flex' justifyContent={ 'space-around'} padding='5px 0'>
            <H4   onClick={()=>{Filters.length > 0 && RemoveFilter(props.history,'Reset All','',props.categoryObjects.searchableCategoryObject[props.catId])}}>
              {
                Filters.length > 0 &&
                <FontAwesome name="close" style={{color:'maroon'}}/>
              }
              <Span cursor={Filters.length > 0 ? "pointer":""} color={Filters.length > 0 ? 'maroon':'black'}>Filters({Filters.length}) </Span>
            </H4>
            {
              <Span>
                -
              </Span>
            }
            {
              props.ratio !== "null/null" ?
                <Div textAlign='center'>
                  <H4>

                    {props.ratio} Items
                  </H4>
                </Div>:
                <Div textAlign='center'>
                  <H4>
                    loading...
                  </H4>
                </Div>
            }

          </Div>

        </Div>
      }
      <ClickableFilters
        Filters = {Filters}
        history={props.history}
        categoryObjects={props.categoryObjects}
        catId = {props.catId}

      />
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
