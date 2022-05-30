import React from 'react';
import Div from 'shared/Div';
import AddOntoSearchSegment from 'containers/Shop/Helpers/AddOntoSearchSegment';
import DestroySearchSegment from 'containers/Shop/Helpers/DestroySearchSegment';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import getParameterByName from 'containers/Shop/Helpers/getParameterByName';
import FilterProductBySearch from 'containers/Shop/Helpers/FilterProductBySearch';
import CapitalizeFirstLetter from 'containers/App/HelperFunctions/CapitalizeFirstLetter';
import Span from 'shared/Span';

// -----

var CheckIfAnyFilter = function(array,search,searchableKey){
  var returnedValue = 'Show All';
  array.forEach((val,idx)=>{
    if(getParameterByName(searchableKey,search) === val){
      returnedValue = val;
    }
  })

  return returnedValue
}
var foundOne = undefined;
const StaticOptions = (props) =>{
  var existsObj = {

  }
  var checked = CheckIfAnyFilter(props.arrayOfOptions,props.history.location.search,props.searchableKey)
  var toMax = FilterProductBySearch(props.allProducts,DestroySearchSegment(props.history,props.DetailField,true),props.catId).length;
  return (
    <Div  display='flex' flexDirection='column' alignItems='center' minWidth="200px">
      <Div position="sticky" top="0px" width="100%" zIndex='1'>
        <Div display='flex' justifyContent='space-between'   themed padding='10px 0'>
          <Div display='flex' alignItems="center" cursor="pointer" margin='0 10px'>
            <label style={{marginLeft:'3px'}}>
              {CapitalizeFirstLetter(checked)}
            </label>
          </Div>
          {
            props.searchableKey !== 'sort' &&
            <Div>
              ({props.numberForReveal})
            </Div>
          }
        </Div>
      </Div>
      <NoMPUl childrenBorderBottom="1px solid black" width="100%" >
        {
          checked !== 'Show All' &&
          <Li onClick={()=>{props.onDropDown('turn off');AddOntoSearchSegment(props.searchableKey,'',props.history)}}>
            <Div hoverableBackground padding='10px 0' display='flex' justifyContent='space-between'>
              <Div margin='0 10px'>
                Show All
              </Div>
              {toMax}
            </Div>
          </Li>
        }
        {
          !props.loadRest &&
          <Li themed>
            <Div padding = '5px 0' themed textAlign='center'>
              Loading Filters....
            </Div>
          </Li>
        }
        {
          props.arrayOfOptions.filter((a)=>{
            if(!existsObj.hasOwnProperty(a.toLowerCase())){
              existsObj[a.toLowerCase()] = true
              return true
            } else {
              return false
            }
          }).sort()
          .map((value,index,array)=>{
            var newStringIfWasThere = AddOntoSearchSegment(props.DetailField,value,props.history,true);
            var newLength = FilterProductBySearch(props.allProducts,newStringIfWasThere,props.catId).length;
            if(newLength !== 0 && value !== checked){
              foundOne = true
              return (
                <Li key={index}  width="100%" onClick={()=>{props.onDropDown('turn off'); AddOntoSearchSegment(props.searchableKey,value,props.history)}}>
                  <Div position='relative' hoverableBackground padding='10px 0'  display='flex' justifyContent='space-between' alignItems='center' flexWrap='nowrap'>
                    <Div margin="0 10px">
                      {CapitalizeFirstLetter(value)}
                    </Div>
                    {
                      props.searchableKey !== 'sort' &&
                      <Div >
                        <Span fontStyle='italic' color='gray'>
                          {
                          "(" + newLength + ")"}
                        </Span>

                      </Div>
                    }
                  </Div>
                </Li>
              )
            } else {

              return('')
            }

          })
        }
        {
          foundOne === undefined && <Div>
            Unfilterable
          </Div>
        }
      </NoMPUl>
    </Div>

  )
}
StaticOptions.propTypes = {
}
export default StaticOptions;
