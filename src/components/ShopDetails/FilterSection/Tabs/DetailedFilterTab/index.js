import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';

import Li from 'shared/Li';
import ConvertVendorObject from 'containers/Shop/Helpers/ConvertVendorObject';
import AdjustableNoMPUl from 'shared/AdjustableNoMPUl'
import DropdownDisplay from './DropdownDisplay';
import SortBy from 'shared/SortBy';
import SearchBy from 'shared/SearchBy';

//shared

const DetailedFilterTab = (props) =>{
  return (
    <Div >

      <AdjustableNoMPUl >
        {!props.noJewelryFilter &&  !props.isShowAll && props.vendorObject && ConvertVendorObject(props.vendorObject,props.catId).map((obj,idx)=>{
          return (
            <Li  key={idx} onClick={()=>{props.onToggleDetail(idx,props.catId)}}>
              <DropdownDisplay
                loadRest = {props.loadRest}
                vendorObject = {props.vendorObject}
                isVendor
                catId={props.catId}
                obj = {obj}
                history={props.history}
                revealedProducts = {props.revealedProducts}
                allProducts = {props.allProducts}

              />
            </Li>
          )
        })}
        {props.filterObject && !props.history.location.search.includes('onSale') && props.filterObject.price.map((obj,idx)=>{
          return (
            <Li  key={obj.DetailField} onClick={()=>{props.onToggleDetail(idx,props.catId)}}>
              <DropdownDisplay
                loadRest = {props.loadRest}
                obj = {obj}
                catId={props.catId}
                history={props.history}
                revealedProducts = {props.revealedProducts}
                allProducts = {props.allProducts}

              />
            </Li>
          )
        })}
        {props.filterObject && props.history.location.search.includes('onSale') && props.filterObject.specialPrice.map((obj,idx)=>{
          return (
            <Li  key={obj.DetailField} onClick={()=>{props.onToggleDetail(idx,props.catId)}}>
              <DropdownDisplay
                loadRest = {props.loadRest}
                obj = {obj}
                catId={props.catId}
                history={props.history}
                revealedProducts = {props.revealedProducts}
                allProducts = {props.allProducts}

              />
            </Li>
          )
        })}
        {!props.noJewelryFilter && props.filterObject && props.filterObject.jewelry.map((obj,idx)=>{
          return (
            <Li  key={obj.DetailField} onClick={()=>{props.onToggleDetail(idx,props.catId)}}>
              <DropdownDisplay
                loadRest = {props.loadRest}
                catId={props.catId}
                obj = {obj}
                history={props.history}
                revealedProducts = {props.revealedProducts}
                allProducts = {props.allProducts}
              />
            </Li>
          )
        })}

        {props.filterObject && props.filterObject.stones.map((obj,idx)=>{
          if(obj.categories.length >= 1){

            return (
              <Li  key={obj.DetailField} onClick={()=>{props.onToggleDetail(idx,props.catId)}}>
                <DropdownDisplay
                  loadRest = {props.loadRest}
                  catId={props.catId}
                  obj = {obj}
                  history={props.history}
                  revealedProducts = {props.revealedProducts}
                  allProducts = {props.allProducts}

                />
              </Li>
            )
          } else {
            return('')
          }
        })}
        <Li>
          <SearchBy
            history={props.history}
            catId={props.catId}
            searchFor={"high-to-low"}
            title={'Sorting'}
            searchKey={'sort'}

          />
        </Li>
        <Li>
          <SortBy
            history={props.history}
            catId={props.catId}
            searchFor={"true"}
            searchKey={'onSale'}
            title={'On Sale'}
          />
        </Li>
      </AdjustableNoMPUl>


    </Div>

          )
          }
DetailedFilterTab.propTypes = {
  history: PropTypes.object.isRequired,

}
export default DetailedFilterTab;
