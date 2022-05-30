import React from 'react';
import Div from 'shared/Div';
import SelectSearch from 'react-select-search'
import getParameterByName from 'containers/ShopNew/Helpers/getParameterByName.js';
require('./select.css');
// -----
  var UpdateLink = function(single,history){
    const {search} = history.location
    var newArray = []
    var arrayOfSearch = getParameterByName("ItemKey",search).split(',')
    arrayOfSearch.forEach((itemNumber)=>{
      let needsToRemove = false;
      if(itemNumber === single.name){
        //remove the item from array.
        needsToRemove = true;
      }
      if(!needsToRemove){
        if(itemNumber !== ''){
        newArray.push(itemNumber)
      }
      }
    })
    newArray.push(single.value)
    var stringToReturn = newArray.join(',')

    var link = "/shop?ItemKey=" + stringToReturn


    history.push(link)
  }


const funcC0mp = (props) =>{
  return (
    <Div height='100px' overflowY='scroll'>
      <SelectSearch onChange={(e)=>{UpdateLink(e,props.history)}} className="select"   autoComplete={"on"} search={true}  options={OrganizeOptions(props.itemKeys)}   placeholder="Search by Item#" />
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;

var OrganizeOptions = function(itemKeys){
  var options = [
  ];
  itemKeys.forEach((itemNumber)=>{
    options.push({name:itemNumber,value:itemNumber})
  })

  return options
}
