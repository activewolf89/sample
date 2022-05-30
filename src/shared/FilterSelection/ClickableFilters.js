import React from 'react';
import Div from 'shared/Div';
import Li from 'shared/Li';
import NoMPUl from 'shared/NoMPUl';
import RemoveFilter from 'containers/ShopNew/Helpers/RemoveFilter';
import CapitalizeFirstLetter from 'containers/App/HelperFunctions/CapitalizeFirstLetter';
import A2 from 'shared/A2';
// -----
const ClickableFilters = (props) =>{
  return (
    <Div   backgroundColor='lightGray'  overflowY='auto' height='60px' padding='0 5px ' borderBottom='2px solid gray'>
      <Div  height='100%'>
        <NoMPUl  height='100%'    display="flex" flexWrap="wrap"  >
          {
            props.Filters.map((filter,index)=>{
              var name = filter.SearchString;

              var DetailField = filter.DetailField;
              if(name !== 'Reset All'){
                return (
                  <Li key={index}>
                    <Div padding=' 5px' position='relative'   maxWidth='300px' minWidth="50px"  width="100%" hoverableLight display="flex" flexDirection="column" flexWrap="wrap" alignItems="center"
                      onClick={function(e){
                        if(filter.SearchString === "Search"){
                          props.history.push('/shop' + props.history.location.search)
                        } else {
                          RemoveFilter(props.history,name,DetailField,props.categoryObjects.searchableCategoryObject[props.catId])

                        }
                      }}>
                      <Div display='flex' flexWrap='nowrap'  alignItems='flex-end'>
                        {
                          filter.SearchString === "Search" ?
                            <A2 fontSize='20px'>
                              {filter.DetailName}
                            </A2>:
                            <A2 fontSize='20px'>
                              {CapitalizeFirstLetter(name)}
                            </A2>
                        }

                      </Div>
                    </Div>

                  </Li>
                )
              } else {
                return('')
              }
            })
          }

        </NoMPUl>
      </Div>
    </Div>
  )
}
ClickableFilters.propTypes = {
}
export default ClickableFilters;
