import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';

import Li from 'shared/Li';
import NoMPUl from 'shared/NoMPUl';
import ConvertVendorObject from 'containers/Shop/Helpers/ConvertVendorObject';
import DropdownDisplay from './DropdownDisplay';
import SortBy from 'shared/SortBy';
import SearchBy from 'shared/SearchBy';
import ItemLookup from './ItemLookup';
import SearchByItemLoader from './SearchByItemLoader';
import InStockOnly from './InStockOnly';
import OutsiderAlert from 'shared/OutsiderAlert';
//shared

const DetailedFilterTab = (props) =>{
  return (
    <Div themed>
      <NoMPUl childrenPadding='8px 0' borderBottom='1px solid gray'>
        <Li>
          <SortBy
            onShow = {props.onShow}
            history={props.history}
            catId={props.catId}
            searchFor={"true"}
            searchKey={'onSale'}
            title={'On Sale'}
          />
        </Li>
        <Li>
          <SearchBy
            onShow = {props.onShow}
            history={props.history}
            catId={props.catId}
            searchFor={"high-to-low"}
            title={'Sorting'}
            searchKey={'sort'}
          />
        </Li>
        <Li>

          <Div>
            {
              !props.isSearchItemKey ?
                <Div >
                  <SearchByItemLoader
                    onToggleSearchByItem = {props.onToggleSearchByItem}
                    itemKeys ={props.itemKeys}
                    onLoadItemNumbers = {props.onLoadItemNumbers}
                  />
                </Div>:
                <Div >
                  <OutsiderAlert callback = {()=>{props.onToggleSearchByItem()}}>
                    {
                      props.itemKeys.length > 0 ?
                        <ItemLookup
                          history={props.history}
                          itemKeys ={props.itemKeys}
                        />:
                        <Div>
                          No Items Found
                        </Div>
                    }
                  </OutsiderAlert>
                </Div>
            }
          </Div>
        </Li>
        <Li>
          <InStockOnly
            history={props.history}
          />

        </Li>
        <Li >
          <DropdownDisplay
            onShow = {props.onShow}
            onToggleDetail = {props.onToggleDetail}
            loadRest = {props.loadRest}
            vendorObject = {props.vendorObject}
            isVendor
            catId={props.catId}
            obj = {
              {
                DetailField:"CategoryGenDesc",
                DetailName:"General Description",
                categories:["WeddingBand"]
              }
            }
            history={props.history}
            revealedProducts = {props.revealedProducts}
            allProducts = {props.allProducts}
          />
        </Li>
        { props.vendorObject && ConvertVendorObject(props.vendorObject,props.catId).map((obj,idx)=>{
          return (
            <Li  key={idx}>
              <DropdownDisplay
                onShow = {props.onShow}
                onToggleDetail = {props.onToggleDetail}
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
        { props.filterObject && props.filterObject.price.map((obj,idx)=>{
          return (
            <Li  key={obj.DetailField}>
              <DropdownDisplay
                onToggleDetail = {props.onToggleDetail}
                onShow = {props.onShow}
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
        {props.filterObject &&  props.filterObject.jewelry[0].categories.length > 0 &&  props.filterObject.jewelry.map((obj,idx)=>{
          return (
            <Li  key={obj.DetailField}>
              <DropdownDisplay
                onToggleDetail = {props.onToggleDetail}
                onShow = {props.onShow}
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

        {props.filterObject &&  props.filterObject.stones.map((obj,idx)=>{
          if(obj.categories.length >= 1){

            return (
              <Li  key={obj.DetailField}>
                <DropdownDisplay
                  onToggleDetail = {props.onToggleDetail}
                  onShow = {props.onShow}
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

      </NoMPUl>
    </Div>

          )
          }
DetailedFilterTab.propTypes = {
  history: PropTypes.object.isRequired,

}
export default DetailedFilterTab;
