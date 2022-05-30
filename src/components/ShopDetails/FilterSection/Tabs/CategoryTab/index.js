import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import CategoryDetail from '../CategoryDetail';
//shared
import HoverDiv from 'shared/HoverDiv';
import SolitaireRing from 'shared/Shapes//SolitaireRing.svg';
import PaveRing from 'shared/Shapes/PaveRing.svg';
import HaloRing from 'shared/Shapes/HaloRing.svg';
import ThreeStone from 'shared/Shapes/ThreeStoneRing.svg';
import updateSearchString from 'containers/App/HelperFunctions/UpdateSearchString.js';
// -----
const CategoryTab = (props) =>{

  return (
    <Div>
      <NoMPUl display="flex" justifyContent="center" flexWrap="wrap" padding="10px" childrenPadding="0 5px">

      <Li onClick={()=>{updateSearchString('style','solitaire',props.history)}}>
        <HoverDiv highlighted={props.history.location.search.includes("style=solitaire")}>
        <CategoryDetail name="solitaire" img = {SolitaireRing} />
      </HoverDiv>
      </Li>
      <Li onClick={()=>{updateSearchString('style','pave',props.history)}}>
        <HoverDiv highlighted={props.history.location.search.includes("style=pave")}>
        <CategoryDetail name="pave" img = {PaveRing} />
      </HoverDiv>
      </Li>
      <Li onClick={()=>{updateSearchString('style','halo',props.history)}}>
        <HoverDiv highlighted={props.history.location.search.includes("style=halo")}>
        <CategoryDetail name="halo" img = {HaloRing} />
      </HoverDiv>
      </Li>
      <Li onClick={()=>{updateSearchString('style','threeStone',props.history)}}>
        <HoverDiv highlighted={props.history.location.search.includes("style=threeStone")}>
        <CategoryDetail name="three-stone" img = {ThreeStone} />
      </HoverDiv>
      </Li>
    </NoMPUl>
  </Div>
  )
}
CategoryTab.propTypes = {
  history: PropTypes.object.isRequired
}
export default CategoryTab;
