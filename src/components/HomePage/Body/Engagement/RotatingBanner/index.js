import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';
//shared
import {HalfDiv,Circle,ShapeSection,Diamond,LargerDiamond,DiamondText,BackgroundBanner,BackgroundBannerLarge} from '../../../CSS';
import RotatingBanner from 'shared/RotatingBanner';
import Title from 'shared/Title';
import Line from 'shared/Line';
import StyledLink from 'shared/StyledLink';

import solitaire from 'images/Solitaire-Classic-Engagement-Ring.png';
import halo from 'images/Halo-Engagement-Ring.png';
import pave from 'images/pave-engagement-ring.png';
import roseGoldRing from 'images/Side-stone-Engagement-Ring.png';
import eternityRing from 'images/eternity-ring.png';
import ThreeStoneRing from 'images/ThreeStoneRing.jpg';
import AnniversaryRing from 'images/Anniversary-Ring.png';
import StackableRing from 'images/Stackable-Ring.png';
import cushion from 'images/cushion.jpg';
import emerald from 'images/emerald.jpg';
import round from 'images/round.jpg';
import princess from 'images/princess.jpg';
import styled from 'styled-components';
import Banner from 'shared/Banner';
import Select from 'shared/Select';
import Option from 'shared/Option';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import ShopLink from '../../ShopLink';
// -----
const Engagement = (props) =>{

  return (
    <Div backgroundColor="white">

        <RotatingBanner data={
          [
            {solitaire:{title:'Solitaire',description:'Knife Edge Solitaire Engagement Ring', img:solitaire}},
            {halo:{title:'Round',description:'Round Diamonds',img:round}},
            {pave:{title:'Cushion',description:'Cushion Diamonds',img:cushion}},
            {pave:{title:'Princess',description:'Princess Diamonds',img:princess}},
            {halo:{title:'Halo',description:'Halo Engagement Ring',img:halo}},
            {pave:{title:'Pave',description:'Pave Engagement Ring',img:pave}},
            {pave:{title:'roseGold',description:'Rose-GoldRing',img:roseGoldRing}},
            {pave:{title:'eternityRing',description:'EternityBand',img:eternityRing}},
            {pave:{title:'AnniversaryRing',description:'EternityBand',img:AnniversaryRing}},
            {pave:{title:'StackableRing',description:'EternityBand',img:StackableRing}},
        ]} />
    </Div>
  )
}
Engagement.propTypes = {
}
export default Engagement;
