import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import CategoryDetail from '../CategoryDetail';
import updateSearchString from 'containers/App/HelperFunctions/UpdateSearchString.js';
//shared
import HoverDiv from 'shared/HoverDiv';
// -----
const MetalTab = (props) =>{

  return (
    <Div>
      <NoMPUl display="flex" justifyContent="center" flexWrap="wrap" padding="10px" childrenPadding="0 5px">

        <Li onClick={()=>{updateSearchString('metal','roseGold',props.history)}}>
          <HoverDiv highlighted={props.history.location.search.includes("metal=roseGold")}>
            <CategoryDetail name="Rose-Gold" fontAwesome = "bullseye" color="orange" />
          </HoverDiv>
        </Li>
        <Li onClick={()=>{updateSearchString('metal','yellowGold',props.history)}}>
          <HoverDiv highlighted={props.history.location.search.includes("metal=yellowGold")}>
            <CategoryDetail name="Yellow-Gold"  fontAwesome = "bullseye" color="yellow" />
          </HoverDiv>
        </Li>
        <Li onClick={()=>{updateSearchString('metal','whiteGold',props.history)}}>
          <HoverDiv highlighted={props.history.location.search.includes("metal=whiteGold")}>
            <CategoryDetail name="White-Gold"  fontAwesome = "bullseye" color="gray" />
          </HoverDiv>
        </Li>
        <Li onClick={()=>{updateSearchString('metal','platinum',props.history)}}>
          <HoverDiv highlighted={props.history.location.search.includes("metal=platinum")}>
            <CategoryDetail name="Platinum"  fontAwesome = "bullseye" color="gray" />
          </HoverDiv>
        </Li>
      </NoMPUl>
    </Div>
  )
}
MetalTab.propTypes = {
  history: PropTypes.object.isRequired
}
export default MetalTab;
