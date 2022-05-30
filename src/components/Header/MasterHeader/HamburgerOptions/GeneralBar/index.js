import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';
//shared
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import {H5} from 'shared/H';
import StyledLink from 'shared/StyledLink';
import HamburgerOption from './HamburgerOption';

// -----
const GeneralBar = (props) =>{
  return (
    <NoMPUl childrenBorderBottom ="1px solid black" padding="0 10px" >
      <Li key="home" onClick={()=>{props.onHamburgerClick('closed')}}>
        <StyledLink to="/" >
          <Div color='black' padding="10px 0" display="flex" justifyContent="space-between" flexWrap="nowrap">
            <H5>
              Home
            </H5>
          </Div>
        </StyledLink>
      </Li>
      {props.navigationArray.map((object,index,array)=>{
        var key = Object.keys(object)[0]
        if("home" !== key && !object[key].hidden){

          return (
            <Li key={key} >
              <HamburgerOption onNavigationClick={props.onNavigationClick} object={object} />
            </Li>
          )
        } else {
          return ('')
        }

      })}
    </NoMPUl>
  )
}
GeneralBar.propTypes = {
  onHamburgerClick: PropTypes.func.isRequired,
  onNavigationClick: PropTypes.func.isRequired,
  navigationArray: PropTypes.array.isRequired
}
export default GeneralBar;
