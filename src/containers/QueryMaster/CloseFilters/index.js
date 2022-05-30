import React from 'react';
import Div from 'shared/Div';
import Li from 'shared/Li';
import NoMPUl from 'shared/NoMPUl';
import GatherFilters from 'containers/ShopNew/Helpers/GatherFilters';
import RemoveFilter from 'containers/ShopNew/Helpers/RemoveFilter';
import FontAwesome from 'react-fontawesome';
import CapitalizeFirstLetter from 'containers/App/HelperFunctions/CapitalizeFirstLetter';

// -----
const ClickableFilters = (props) =>{
  var Filters = GatherFilters(props.history,props.categoryObjects.searchableCategoryObject[props.catId],props.categoryObjects.vendorCategoryObject).filter((a)=>{
    if(props.specificDetailName){
      if(a.DetailName === props.specificDetailName){
        return a
      } else {
        return('')
      }
    } else {
      return a
    }
  })
  return (
    <Div  >
      <NoMPUl  display="flex" flexWrap="wrap" childrenPadding="0 5px"  >
        {
          Filters.map((filter,index)=>{
              var name = filter.SearchString;
              var DetailField = filter.DetailField;
            if(name !== 'Reset All'){

              return (
                <Li key={index}>
                  <Div backgroundColor='lightGray' cursor='pointer' fontWeight='bold' textDecoration='underline'   display="flex" flexDirection="column" flexWrap="wrap" alignItems="center" onClick={()=>{RemoveFilter(props.history,name,DetailField,props.categoryObjects.searchableCategoryObject[props.catId])}}>

                    <Div display='flex' flexWrap='nowrap' alignItems='center' justifyContent='space-between' width='100%'>
                      {
                        filter.DetailName === "Item(s)" ?
                          <small>
                            Item Number(s)
                          </small>:
                        filter.DetailName === "ItemSignage" ?
                          <small>
                            On Sale
                          </small>:
                          <small>
                            {CapitalizeFirstLetter(name) === "Search" ? filter.DetailName:CapitalizeFirstLetter(name)}
                          </small>
                      }
                      <Div padding='0 5px' >
                        <FontAwesome style={{color:'black'}} name={"close"}/>
                      </Div>
                    </Div>
                  </Div>
                </Li>
              )
            } else {
              return('')
            }
          })
        }
        {
            Filters.length > 0 &&
          <Li >
            <Div
              underline='red'
              cursor='pointer'
              color='maroon'
              onClick={()=>{RemoveFilter(props.history,'Reset All','',props.categoryObjects.searchableCategoryObject[props.catId])}}>

              <small>Reset Search</small>
            </Div>
          </Li>
        }
      </NoMPUl>
    </Div>
  )
}
ClickableFilters.propTypes = {
}
export default ClickableFilters;
