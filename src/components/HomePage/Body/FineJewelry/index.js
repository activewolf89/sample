import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';
//shared
import {HalfDiv,Circle,ShapeSection,Diamond,LargerDiamond,DiamondText,BackgroundBanner,BackgroundBannerLarge} from '../../CSS';
import bracelet from 'images/bracelet.png';
import earring from 'images/earring.jpg';
import BackgroundImg from 'images/backgroundImg.jpg';
import necklace from 'images/necklace.jpg';
import gentsWatch from 'images/gWatch.png';
import ladiesWatch from 'images/lWatch.jpg';
import RotatingBanner from 'shared/RotatingBanner';
import Title from 'shared/Title';
import Line from 'shared/Line';
import StyledLink from 'shared/StyledLink';
import EngagementBanner from 'images/EngagementBanner.jpg';
import engagementRing from 'images/engagementRing.jpg';
import fineRing from 'images/fineRing.jpg';
import diamonds from 'images/diamonds.png';
// -----
const FineJewelry = (props) =>{

  return (
    <Div  gridArea="firstZero">
      <Div position="relative" border="1px solid black"  margin="0 0 50px 0" themed display="flex" flexDirection="column" justifyContent="center">
        <BackgroundBanner height="60%" backgroundPosition="center" backgroundAttachment="fixed" backgroundImg={BackgroundImg} width="100%">
          <Diamond themed>
            <DiamondText>
              <StyledLink to="/diamond"><Title color="white">FineJewelry</Title></StyledLink>
              <Line />
              <StyledLink to="/diamond"><Title color="white">Watches</Title></StyledLink>
            </DiamondText>
          </Diamond>
        </BackgroundBanner>

      </Div>
      <Div gridArea="rotatingBanner3"  border="1px solid black"  backgroundColor="white">
        <RotatingBanner data={
          [
            {earring:{title:'Earring',description:'Earrings', img:earring}},
            {bracelet:{title:'Bracelet',description:'Bracelets',img:bracelet}},
            {necklace:{title:'Necklace',description:'Necklaces',img:necklace}},
            {fineRing:{title:'Fine Ring',description:'Fine Ring',img:fineRing}},
            {gentsWatch:{title:'Gents Watch',description:'Gents Watches',img:gentsWatch}},
            {ladiesWatch:{title:'Ladies Watch Watch',description:'Ladies Watch Watches',img:ladiesWatch}},

        ]} />
      </Div>
    </Div>
  )
}
FineJewelry.propTypes = {
}
export default FineJewelry;
