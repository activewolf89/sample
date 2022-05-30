import React from 'react';
import Div from 'shared/Div';
import Li from 'shared/Li';
import NoMPUl from 'shared/NoMPUl';
import RemoveFilter from 'containers/ShopNew/Helpers/RemoveFilter';
import FontAwesome from 'react-fontawesome';
import CapitalizeFirstLetter from 'containers/App/HelperFunctions/CapitalizeFirstLetter';

// -----
const ClickableFilters = (props) =>{
  return (
    <Div   backgroundColor='lightGray' height='200px' overflowY='scroll' padding='5px ' >
      <Div>
        <NoMPUl childrenPadding='5px' flexDirection='column'   display="flex" flexWrap="wrap"  >

          {
            props.Filters.map((filter,index)=>{
              var name = filter.SearchString;

              var DetailField = filter.DetailField;
              if(name !== 'Reset All'){
                return (
                  <Li key={index}>
                    <Div minWidth="100px"  width="100%" hoverableLight display="flex" flexDirection="column" flexWrap="wrap" alignItems="center" onClick={()=>{RemoveFilter(props.history,name,DetailField,props.categoryObjects.searchableCategoryObject[props.catId])}}>
                      <Div position='relative' themed width="100%" display="flex" flexDirection="column" alignItems="center" border="1px solid gray" >
                        <Div  display="flex" borderBottom="1px solid white"  justifyContent="space-between" alignItems='center'  width="100%">
                          <Div  width="100%" textAlign='center'>
                            {filter.DetailName}
                          </Div>
                          <Div position="absolute" right="0%"  >
                            {
                              <FontAwesome style={{color:'red'}} name={"minus-circle"}/>
                            }
                          </Div>
                        </Div>
                        <Div >
                          {CapitalizeFirstLetter(name)}
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

        </NoMPUl>

      </Div>
    </Div>
  )
}
ClickableFilters.propTypes = {
}
export default ClickableFilters;
