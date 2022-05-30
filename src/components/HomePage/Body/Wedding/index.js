import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';
//shared
import {HalfDiv,Circle,ShapeSection,Diamond,LargerDiamond,DiamondText,BackgroundBanner,BackgroundBannerLarge} from '../../CSS';
import RotatingBanner from 'shared/RotatingBanner';
import Title from 'shared/Title';
import Line from 'shared/Line';
import StyledLink from 'shared/StyledLink';
import anniversaryRing from 'images/Anniversary-Ring.png';
import diamondBand from 'images/diamond.jpg';
import ladiesBand from 'images/ladiesBand.jpg';
import mensBand from 'images/mensBand.jpg';
import carved from 'images/carved.jpg';
import classic from 'images/classic.jpg';

import BackgroundImg from 'images/backgroundImg.jpg';

// -----
const Wedding = (props) =>{

  return (
    <Div  gridArea="firstZero">
      <Div position="relative"  border="1px solid black"  margin="0 0 50px 0" themed display="flex" flexDirection="column" justifyContent="center">
        <BackgroundBanner height="60%" backgroundPosition="center" backgroundAttachment="fixed" backgroundImg={BackgroundImg} width="100%">
          <Diamond themed>
            <DiamondText>
              <StyledLink to="/diamond"><Title color="white">GentsBands</Title></StyledLink>
              <Line />
              <StyledLink to="/diamond"><Title color="white">LadiesBands</Title></StyledLink>
            </DiamondText>
          </Diamond>
        </BackgroundBanner>

      </Div>
      <Div gridArea="rotatingBanner2"  border="1px solid black"  backgroundColor="white">
        <RotatingBanner  data={
          [
          {solitaire:{title:'Solitaire',description:'Knife Edge Solitaire Engagement Ring', img:anniversaryRing}},
          {halo:{title:'Round',description:'Round Diamonds',img:diamondBand}},
          {pave:{title:'Cushion',description:'Cushion Diamonds',img:ladiesBand}},
          {pave:{title:'Princess',description:'Princess Diamonds',img:classic}},
          {halo:{title:'Halo',description:'Halo Engagement Ring',img:mensBand}},
          {pave:{title:'Pave',description:'Pave Engagement Ring',img:carved}},

        ]} />
      </Div>
    </Div>
  )
}
Wedding.propTypes = {
}
export default Wedding;
