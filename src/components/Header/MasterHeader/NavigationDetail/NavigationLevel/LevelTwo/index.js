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
const LevelTwo = (props) =>{
  return (
    <Div  onClick={()=>{props.navigationDetailClick()}}>

      <CSSTransition
        in={props.isNavigationMobileClick}
        timeout={500}
        classNames="navigation"
        onEnter = {() => {
          if(props.isHamburgerOpen){
            props.onHamburgerClick()
          }
        }}
        unmountOnExit

      >
        <Div position="absolute" top="100%" left="0px"  zIndex="1" backgroundColor="white"  width="100vw">

          <NoMPUl borderBottom = "1px solid black" >
            {
              Object.keys(props.navigationObject).map((key)=>{
                if(props.history.location.pathname.includes(key)){
                  return (

                    props.navigationObject[key].map((object,index)=>{
                      if(!object.socialMedia){
                        if(object.name.includes("Home")){

                          return (
                            <Li key={index}>
                              <Div display="flex" justifyContent="center">
                                <StyledLink to={object.destination} >
                                  <H5 capitalize  noBold>
                                    <Div highlighted = {object.destination === props.history.location.pathname ? true: false} color="black">
                                      {object.name}
                                    </Div>
                                  </H5>
                                </StyledLink>
                              </Div>
                            </Li>
                          )
                        } else {
                          return (
                            <Li key={index}>
                              <Div display="flex" justifyContent="center">
                                <StyledLink to={object.destination} >
                                  <H5 capitalize  noBold>
                                    <Div highlighted = { props.history.location.pathname.includes(object.destination)} color="black">
                                      {object.name}
                                    </Div>
                                  </H5>
                                </StyledLink>
                              </Div>
                            </Li>
                          )
                        }
                      } else {
                        return ('')
                      }
                    })
                  )
                } else {
                  return ('')
                }
              })

            }
          </NoMPUl>
        </Div>
      </CSSTransition>
  </Div>
  )
}
LevelTwo.propTypes = {
  isHamburgerOpen: PropTypes.bool.isRequired,
  navigationObject: PropTypes.object.isRequired,
  isNavigationMobileClick: PropTypes.bool.isRequired,
  navigationDetailClick: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
}
export default LevelTwo;
