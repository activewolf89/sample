import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';
//shared
import styled from 'styled-components'
import Contact from './Contact';
import ContactTab from './ContactTab';
import CheckList from './CheckList';
import Copyright from './Copyright';
import HoursTab from './HoursTab';
import SocialMedia from './SocialMedia';
import RotatingReviewBanner from 'components/RotatingReviewBanner';
import ContactButton from './ContactButton';
// -----
const ParentDiv = styled(Div)`
display: grid;
grid-column-gap: 10px;
width: 100%;
@media only screen and (min-width: 996px) {
  z-index: 10;
};
>Div {
  border-bottom: 1px solid white;
}
grid-row-gap: 10px;
grid-template-columns: repeat(5,1fr);
grid-template-areas:
"contact contact contact contact contact"
"reviews reviews reviews reviews reviews"
"col1 col1 col1 col1 col1"
"col2 col2 col2 col2 col2"
"col3 col3 col3 col3 col3"
"col4 col4 col4 col4 col4"
"col5 col5 col5 col5 col5"
"col6 col6 col6 col6 col6"
;

@media only screen and (min-width: 996px) {
  grid-template-columns: 1fr repeat(12,1fr) 1fr ;
  >div {
    :last-child {
      border-top: 1px solid white;
    }
  }
  >:not(:first-child) {
    border-bottom:0px solid white;
  }
  grid-template-areas:
  ". contact contact contact contact contact contact contact contact contact contact contact contact ."
  ". reviews reviews reviews reviews reviews reviews reviews reviews reviews reviews reviews reviews ."
  ". col1 col1 col1 col2 col2 col2  col3 col3 col3 col4 col4 col4 ."
  ". col5 col5 col5 col5 col5 col5 col5 col5 col5 col5 col5 col5 ."
  ". col6 col6 col6 col6 col6 col6 col6 col6 col6 col6 col6 col6 ."
  ;
};

`
const Footer = (props) =>{
  return (
    <Div>
      <ParentDiv Armoire   overflow="hidden">

        <Div gridArea="col1" >
          <Contact
            onContactDrop = {props.onFooterClick}
            onFooterClick = {props.onFooterClick}
            onContactClick = {props.onContactClick}
            isOn = {props.footerNavigationObject.contact}
          />
        </Div>
        <Div gridArea="col2" >
          <HoursTab
            onHourClick = {props.onFooterClick}
            isOn = {props.footerNavigationObject.hours}
          />
        </Div>
        <Div gridArea="col3" >
          <ContactTab
            onHourClick = {props.onFooterClick}
            isOn = {props.footerNavigationObject.hours}
          />
        </Div>
        <Div gridArea="col4" >
          <SocialMedia
            onContactDrop = {props.onFooterClick}
            isOn = {props.footerNavigationObject.designers}
          />
        </Div>

      </ParentDiv>
    </Div>

  )
}
Footer.propTypes = {
  onContactClick: PropTypes.func.isRequired,
  googleReviewObject: PropTypes.object.isRequired,
  yelpReviewObject: PropTypes.object.isRequired,
}
export default Footer;
