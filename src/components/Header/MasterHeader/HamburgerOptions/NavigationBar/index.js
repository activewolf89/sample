/**
*
* BottomNavigation
*
*/

import React from 'react';
// import styled from 'styled-components';

import styled,{css} from 'styled-components';
import PropTypes from 'prop-types';
//shared --
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import A from 'shared/A';
import HiddenA from 'shared/HiddenA';
import {H5} from 'shared/H';
import FontAwesome from 'react-fontawesome';



const NavigationBanner = (props) =>{ // eslint-disable-line react/prefer-stateless-function

  return (
    <Div display="flex" flexDirection="column">
    <NoMPUl childrenBorderBottom ="1px solid black" childrenPadding="10px 0px">
      <Div borderBottom="1px solid gray" display="flex" justifyContent="space-between" padding="0 10px">

      <H5 >Home</H5>
    </Div>
      {
        Object.keys(props.navigationObject).map((key)=>{
          return(
              <Div borderBottom="1px solid gray"
                color="black"
                backgroundColor="white"
                fontWeight="bold"
                key = {key}
                onClick={()=>{props.onNavigationClick(key)}}
                >
              <Div display="flex" justifyContent="space-between" padding="0 10px">
                <H5 >{key}</H5>
                  <FontAwesome name="caret-right" style={{fontSize:'1.5em'}} />
              </Div>
            </Div>
          )
        })
      }
    </NoMPUl>
  <NoMPUl>
    <Li>
      About Us
    </Li>
    <Li>
      Our Reviews
    </Li>
  </NoMPUl>
  </Div>
  );
}

NavigationBanner.propTypes = {
  navigationObject: PropTypes.object.isRequired,
  onNavigationClick: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default NavigationBanner;
