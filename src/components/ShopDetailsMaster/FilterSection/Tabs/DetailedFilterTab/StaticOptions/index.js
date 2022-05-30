import React from 'react';
import Div from 'shared/Div';
import AddOntoSearchSegment from 'containers/Shop/Helpers/AddOntoSearchSegment';
import Ul from 'shared/Ul';
import Li from 'shared/Li';
import getParameterByName from 'containers/Shop/Helpers/getParameterByName';

var CheckIfAnyFilter = function(array,search,searchableKey){
  var returnedValue = 'Show All';
  array.forEach((val,idx)=>{
    if(getParameterByName(searchableKey,search) === val){
      returnedValue = val;
    }
  })

  return returnedValue
}
const StaticOptions = (props) =>{
  var existsObj = {

  }
  var checked = CheckIfAnyFilter(props.arrayOfOptions,props.history.location.search,props.searchableKey)
  return (
    <Div  display='flex' flexDirection='column' alignItems='center' minWidth="200px">

      <Div maxHeight='40vh' overflowY='scroll' width='100%'>
        <Ul childrenBorderBottom="1px solid black" width="100%" >
          {
            checked !== 'Show All' &&
            <Li onClick={()=>{props.onShow();props.onDropDown('turn off');AddOntoSearchSegment(props.searchableKey,'',props.history)}}>
              <Div padding = '5px 0' hoverableBackground display='flex' justifyContent='space-between'>
                <Div margin="0 10px">
                  Show All
                </Div>
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
              if(!existsObj.hasOwnProperty(a.toLowerCase()) && checked.toLowerCase() !== a.toLowerCase()){
                existsObj[a.toLowerCase()] = true
                return true
              } else {
                return false
              }
            }).sort()
            .map((value,index,array)=>{
              return (
                <Li key={index}  width="100%" onClick={()=>{props.onShow(); props.onDropDown('turn off'); AddOntoSearchSegment(props.searchableKey,value,props.history)}}>
                  <Div position='relative' hoverableBackground padding='10px 0'  display='flex' justifyContent='space-between' alignItems='center' flexWrap='nowrap'>
                    <Div margin="0 10px">
                      {value.toUpperCase()}
                    </Div>
                  </Div>
                </Li>
              )
            })
          }
        </Ul>
      </Div>

    </Div>

  )
}
StaticOptions.propTypes = {
}
export default StaticOptions;
