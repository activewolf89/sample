import React from 'react';
import Div from 'shared/Div';
import AddOntoSearchSegment from 'containers/Shop/Helpers/AddOntoSearchSegment';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import getParameterByName from 'containers/Shop/Helpers/getParameterByName';

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
const StaticOptions = (props) =>{
  var existsObj = {

  }
  var checked = CheckIfAnyFilter(props.arrayOfOptions,props.history.location.search,props.searchableKey)
  return (
    <Div cursor='pointer' maxHeight='250px' overflow='scroll'>

      <NoMPUl display='flex' childrenBorderBottom='1px solid lightGray' flexDirection='column' flexWrap='wrap'   childrenPadding='5px' width="100%" >
        {
            checked !== 'Show All' &&
          <Li onClick={()=>{AddOntoSearchSegment(props.searchableKey,'',props.history)}}>

            <Div whiteSpace='nowrap' color='black' textAlign='center' width='100%'  >
              SHOW ALL
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
              <Li key={index}  width="100%" onClick={()=>{  AddOntoSearchSegment(props.searchableKey,value,props.history)}}>

                <Div position='relative'  padding='10px 0'  display='flex' justifyContent='space-between' alignItems='center' flexWrap='nowrap'>
                  <Div  color='black' textAlign='center' width='100%'>
                    {value.toUpperCase()}
                  </Div>
                </Div>

              </Li>
            )
          })
        }
      </NoMPUl>
    </Div>

  )
}
StaticOptions.propTypes = {
}
export default StaticOptions;
