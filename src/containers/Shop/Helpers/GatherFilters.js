import getParameterByName from 'containers/Shop/Helpers/getParameterByName.js';

export default function(history,filterObject,designerObject){
  //the idea of this function is to break down what we are searching for into options
  var newArrayOfFilters = [];
  const {search} = history.location
  for(let key in filterObject){
    filterObject[key].forEach((obj)=>{
      //checking each if detailfield
      let {DetailField,DetailName} = obj;
          var CheckParameter = getParameterByName(DetailField,search)
      if(CheckParameter){
        newArrayOfFilters.push(
          {
          DetailField: DetailField,
          SearchString:CheckParameter,
          DetailName: DetailName
        }
        )
        //found a match
      }
    })
  }
  var CheckIfDesignerParameter = getParameterByName('ItemVendorName',search)
  var CheckIfItemNumber = getParameterByName('ItemKey',search)
  if(search.includes('onSale')){
    newArrayOfFilters.push(
      {
      DetailField: 'onSale',
      SearchString: 'On',
      DetailName: 'Sale'
    }
    )
  }
  if(CheckIfItemNumber){
    //add designesr
    newArrayOfFilters.push(
      {
      DetailField: 'ItemKey',
      SearchString:CheckIfItemNumber,
      DetailName: 'ItemKeys'
    }
    )
  }
  if(CheckIfDesignerParameter){
    //add designesr
    newArrayOfFilters.push(
      {
      DetailField: 'ItemVendorName',
      SearchString:CheckIfDesignerParameter,
      DetailName: 'Designer'
    }
    )
  }
  return newArrayOfFilters
}
