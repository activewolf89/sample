import React from 'react';
import Div from 'shared/Div';
import diamonds from 'images/TKimages/diamonds.jpg';
import bracelets from 'images/TKimages/bracelets.jpg';
import earrings from 'images/TKimages/earrings.jpg';
import fineRing from 'images/TKimages/fine-rings.jpg';
import engagement from 'images/TKimages/engagement.jpg';
import pendants from 'images/TKimages/pendants.jpg';
import watches from 'images/TKimages/watches.jpg';
import other from 'images/TKimages/other.jpg';
import weddingbands from 'images/TKimages/weddingbands.jpg';
import styled from 'styled-components';
import CheckBrowseCookie from 'containers/App/HelperFunctions/CheckBrowseCookie';
var StyledDiv = styled(Div)`

  background-position: center;
  @media only screen and (min-width: 667px) {
  background-attachment: fixed;
  }
`

// -----
var Randomize = function(){
var string = CheckBrowseCookie()
switch(string){
  case "engagement-rings":
  return engagement
  case "diamonds":
  return diamonds
  case "ladies-bands":
  return weddingbands
  case "mens-bands":
  return weddingbands
  case "necklaces":
  return pendants
  case "earrings":
  return earrings
  case "fine-rings":
  return fineRing
  case "bracelets":
  return bracelets
  case "other":
  return other
  default:
  return watches
}

}
const funcC0mp = (props) =>{
  return (
    <StyledDiv height='400px' backgroundRepeat='no-repeat' backgroundSize='cover' backgroundImg={Randomize()} >
    </StyledDiv>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
