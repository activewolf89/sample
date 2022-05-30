import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';
//shared
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import StyledLink from 'shared/StyledLink';
import {H5} from 'shared/H';
import { CSSTransition } from 'react-transition-group';


require('../navigationDetail.css');

// -----
const LevelOne = (props) =>{
  return (

      <Div  onClick={()=>{ props.navigationDetailClick()}}>

        <CSSTransition
          in={props.isNavigationMobileClick}
          timeout={500}
          classNames="navigation"
          unmountOnExit

          onEnter = {() => {
            if(props.isHamburgerOpen){
              props.onHamburgerClick()
            }
          }}
        >
          <Div  position="absolute" top="100%" left="0" zIndex="1" backgroundColor="white" width="100vw"  pr>
            <NoMPUl borderBottom = "1px solid black">
              {props.navigationArray.map((object,key,array)=>{
                key = Object.keys(object)[0]
                return (
                  <Li key={key}>
                    <Div display="flex" justifyContent="center">
                      <StyledLink to={object[key].path} color="black">
                        <H5 capitalize noBold >
                          <Div highlighted = {object[key].path === props.history.location.pathname ? true: false} color="black">
                            {key}
                          </Div>
                        </H5>
                      </StyledLink>
                    </Div>
                  </Li>
                )
              })}
            </NoMPUl>

          </Div>
        </CSSTransition>

    </Div>
  )
}
LevelOne.propTypes = {
  isHamburgerOpen: PropTypes.bool.isRequired,
  navigationDetailClick: PropTypes.func.isRequired,
  navigationArray:  PropTypes.array.isRequired
}
export default LevelOne;
