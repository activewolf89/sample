import React from 'react';
import Div from 'shared/Div';
import RedRibbon from 'images/redRibbonSvg.svg';
import StyledLink from 'shared/StyledLink';

// -----
const funcC0mp = (props) =>{
  return (
    <Div display='flex' flexWrap='nowrap' alignItems='center' onClick={()=>{(props.onHamburgerClick && props.onHamburgerClick('close')) && props.travelTo()}}>
      <StyledLink to={props.to ? props.to:'/'}>
        <Div themedAccent>
          <img src={RedRibbon} style={{width:'25px',height:'25px', marginRight:'5px'}} alt='ribbon for sale' />
          On Sale
        </Div>
      </StyledLink>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
