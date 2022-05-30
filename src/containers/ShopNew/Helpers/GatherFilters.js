import getParameterByName from 'containers/Shop/Helpers/getParameterByName.js';
import CapitalizeRemoveDash from 'containers/App/HelperFunctions/CapitalizeRemoveDash.js';
export default function(history,filterObject,designerObject){

  //the idea of this function is to break down what we are searching for into options
  var newArrayOfFilters = [];
  const {search,pathname} = history.location
  for(let key in filterObject){
    filterObject[key].forEach((obj)=>{
      //checking each if detailfield
      let {DetailField,DetailName} = obj;
          var CheckParameter = getParameterByName(DetailField,search)
      if(DetailField !== "" && typeof CheckParameter === 'string' && CheckParameter !== "" && !CheckParameter.includes('=')){
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
  var CheckIfItemKey = getParameterByName('ItemKey',search)
  var CheckGenDesc = getParameterByName('CategoryGenDesc',search)
  if(search.includes('ItemSignage')){
    newArrayOfFilters.push(
      {
      DetailField: 'ItemSignage',
      SearchString: 'On Sale',
      DetailName: 'ItemSignage'
    }
    )
  }
  if(search.includes('search')){
    newArrayOfFilters.push(
      {
      DetailField: 'search',
      SearchString: 'search',
      DetailName: 'search'
    }
    )
  }
  if(search.includes('CategoryGenDesc')){
    newArrayOfFilters.push(
      {
      DetailField: 'CategoryGenDesc',
      SearchString: CheckGenDesc,
      DetailName: "General Description"
    }
    )
  }
  if(search.includes('ItemStatus')){
    newArrayOfFilters.push(
      {
      DetailField: 'ItemStatus',
      SearchString: 'All',
      DetailName: 'Item Status'
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
  }  if(CheckIfItemKey){
      //add designesr
      newArrayOfFilters.push(
        {
        DetailField: 'ItemKey',
        SearchString:CheckIfItemKey,
        DetailName: 'Item(s)'
      }
      )
    }
    var pSplit = pathname.split('/');
    if(pSplit.length > 3){
      //['',/shop/]
      newArrayOfFilters.unshift(
        {
        DetailField: 'Shop All',
        SearchString:'Search',
        DetailName: CapitalizeRemoveDash(pSplit[3])
      }
      )
    }
   if(pSplit.length > 2){
     //['',/shop/]
     newArrayOfFilters.unshift(
       {
       DetailField: 'Shop All',
       SearchString:'Search',
       DetailName: CapitalizeRemoveDash(pSplit[2])
     }
     )
   }
  return newArrayOfFilters
}
