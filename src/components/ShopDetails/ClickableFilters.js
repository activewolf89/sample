import React from 'react';
import Div from 'shared/Div';
import Li from 'shared/Li';
import NoMPUl from 'shared/NoMPUl';
import GatherFilters from 'containers/Shop/Helpers/GatherFilters';
import RemoveFilter from 'containers/Shop/Helpers/RemoveFilter';
import Title from 'shared/Title';
import FontAwesome from 'react-fontawesome';
import CapitalizeFirstLetter from 'containers/App/HelperFunctions/CapitalizeFirstLetter';

// -----
const ClickableFilters = (props) =>{
  var Filters = GatherFilters(props.history,props.categoryObjects.searchableCategoryObject[props.catId],props.categoryObjects.vendorCategoryObject)
  return (
    <Div   backgroundColor='lightGray' >
      <Div>
        <NoMPUl  display="flex" flexWrap="wrap" childrenPadding="3px"  >
          {
            Filters.map((filter,index)=>{
              var name = filter.SearchString;

              var DetailField = filter.DetailField;
              if(name !== 'Reset All'){
                return (
                  <Li key={index}>
                    <Div minWidth="100px"  width="100%" hoverableLight display="flex" flexDirection="column" flexWrap="wrap" alignItems="center" onClick={()=>{RemoveFilter(props.history,name,DetailField,props.categoryObjects.searchableCategoryObject[props.catId])}}>
                      <Div position='relative' themed width="100%" display="flex" flexDirection="column" alignItems="center" border="1px solid gray" borderRadius="10px">
                        <Div  display="flex" borderBottom="1px solid white"  justifyContent="space-between" alignItems='center'  width="100%">
                          <Div  width="100%" textAlign='center'>
                            {filter.DetailName}
                          </Div>
                          <Div position="absolute" right="0%" bottom="70%" >
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
          {
            Filters.length > 0 &&
            <Li >
              <Div width="100%"
                hoverable
                alignItems="center"
                display='flex'
                position="relative"
                themed
                borderRadius="10px"
                height="100%"
                onClick={()=>{RemoveFilter(props.history,'Reset All','',props.categoryObjects.searchableCategoryObject[props.catId])}}>
                <Div position="absolute" right="0%" bottom="70%">
                  {
                    <FontAwesome style={{color:'red'}} name={"minus-circle"}/>
                  }
                </Div>
                <Title>Reset All</Title>
              </Div>
            </Li>
          }
        </NoMPUl>

      </Div>
    </Div>
  )
}
ClickableFilters.propTypes = {
}
export default ClickableFilters;
