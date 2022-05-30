import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';
import Title from 'shared/Title';
import Line from 'shared/Line';
import StyledLink from 'shared/StyledLink';
//shared
import {HalfDiv,Circle,ShapeSection,Diamond,LargerDiamond,DiamondText,BackgroundBanner,BackgroundBannerLarge} from '../../CSS';
import RotatingBanner from 'shared/RotatingBanner';

import BackgroundImg from 'images/backgroundImg.jpg';

// -----
const Services = (props) =>{

  return (
    <Div  gridArea="firstZero">
      <BackgroundBanner position="relative" gridArea="sixthOne" border="1px solid black"  margin="0 0 50px 0" themed display="flex" flexDirection="column" justifyContent="center">
        <Div height="60%" backgroundPosition="center" backgroundAttachment="fixed" backgroundImg={BackgroundImg} width="100%">
          <Diamond themed>
            <DiamondText>
              <StyledLink to="/diamond"><Title color="white">Collections</Title></StyledLink>
              <Line />
              <StyledLink to="/diamond"><Title color="white">Services</Title></StyledLink>
            </DiamondText>
          </Diamond>
        </Div>

      </BackgroundBanner>
    </Div>
  )
}
Services.propTypes = {
}
export default Services;
