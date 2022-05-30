import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';
//shared
import '../styles.css';
import TopHeader from './TopHeader';
import BottomHeader from './BottomHeader';
import styled from 'styled-components';

const NavigationDetail = (props) =>{

  return (
    <Div  textAlign='center' display='flex' flexDirection='column' alignItems='center' >
    <Div backgroundColor='white'>
    <TopHeader
    onContactClick = {props.onContactClick}
    onHamburgerClick = {props.onHamburgerClick}
    isHamburgerOpen = {props.isHamburgerOpen}
    />
    </Div>
    <Div Armoire>
    <BottomHeader
    history={props.history}
    onContactClick = {props.onContactClick}
    userProfile = {props.userProfile}
    onLogOut = {props.onLogOut}
    />
    </Div>
    </Div>
  )
}
NavigationDetail.propTypes = {
  isSearch: PropTypes.bool.isRequired,
  onSearchClick: PropTypes.func.isRequired,
  navigationArray: PropTypes.array.isRequired,
  isNavigationMobileClick: PropTypes.bool.isRequired,
  navigationDetailClick: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  onHamburgerClick: PropTypes.func.isRequired

}
export default NavigationDetail;
