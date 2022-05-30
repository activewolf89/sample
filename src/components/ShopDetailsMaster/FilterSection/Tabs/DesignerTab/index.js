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
const DesignerTab = (props) =>{
  return (
    <Div>
    <NoMPUl display="flex" justifyContent="center" flexWrap="wrap" padding="10px" childrenPadding="0 5px">
      <Li onClick={()=>{updateSearchString('designer','ltd',props.history)}}>
        <HoverDiv highlighted={props.history.location.search.includes("designer=ltd")}>
          <CategoryDetail name="L/T/Denny" fontAwesome = "bullseye" color="orange" />
        </HoverDiv>
      </Li>
      <Li onClick={()=>{updateSearchString('designer','tac',props.history)}}>
        <HoverDiv highlighted={props.history.location.search.includes("designer=tac")}>
          <CategoryDetail name="Tacori"  fontAwesome = "bullseye" color="yellow" />
        </HoverDiv>
      </Li>
      <Li onClick={()=>{updateSearchString('designer','danhov',props.history)}}>
        <HoverDiv highlighted={props.history.location.search.includes("designer=danhov")}>
          <CategoryDetail name="Danhov"  fontAwesome = "bullseye" color="gray" />
        </HoverDiv>
      </Li>
      <Li onClick={()=>{updateSearchString('designer','simonG',props.history)}}>
        <HoverDiv highlighted={props.history.location.search.includes("designer=simonG")}>
          <CategoryDetail name="SimonG"  fontAwesome = "bullseye" color="gray" />
        </HoverDiv>
      </Li>
      <Li onClick={()=>{updateSearchString('designer','maevona',props.history)}}>
        <HoverDiv highlighted={props.history.location.search.includes("designer=maevona")}>
          <CategoryDetail name="Maevona"  fontAwesome = "bullseye" color="gray" />
        </HoverDiv>
      </Li>

    </NoMPUl>
  </Div>
  )
}
DesignerTab.propTypes = {
  history: PropTypes.object.isRequired

}
export default DesignerTab;
