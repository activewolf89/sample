import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';
import styled,{css} from 'styled-components';

//shared
import Title from 'shared/Title';
import StyledLink from 'shared/StyledLink';
import Button from 'shared/Button';
import {H3,H4} from 'shared/H';
const FlexButton = styled(Button)`
height: 80px;
width: 33%;
:last-child {
  width: 33%;
}
:first-child {
  width: 100%;
}
  @media only screen and (min-width: 996px) {
    width: 14.28%;
    :first-child {
      width: 14.28%;

    }
    :last-child {
      width: 14.28%;

    }
  }
`
// -----
const ShopLink = (props) =>{
  return (
    <Div width="100%" >

      <Div display="flex">

        <FlexButton width="100%" height="100%" themed color="white" onClick={()=>{props.onCategoryChange('engagement')}}  active = {props.selectCategoryValue === "engagement"}>
          <H4>
            Engagement Rings
          </H4>
        </FlexButton>
        <FlexButton  width="100%" height="100%" themed color="white" onClick={()=>{props.onCategoryChange('diamond')}}  active = {props.selectCategoryValue === "diamond"}>
          <H4>
            Diamonds
          </H4>
        </FlexButton>
        <FlexButton  width="100%" height="100%" themed color="white" onClick={()=>{props.onCategoryChange('wedding_bands')}}  active = {props.selectCategoryValue === "wedding_bands"}>
          <H4>
            Wedding Bands
          </H4>
        </FlexButton>
        <FlexButton  width="100%" height="100%" themed color="white" onClick={()=>{props.onCategoryChange('fine_jewelry')}}  active = {props.selectCategoryValue === "fine_jewelry"}>
          <H4>
            Fine Jewelry
          </H4>
        </FlexButton>

        <FlexButton  width="100%" height="100%" themed color="white" onClick={()=>{props.onCategoryChange('services')}}  active = {props.selectCategoryValue === "services"}>
          <H4>
            Services
          </H4>
        </FlexButton>
        <FlexButton  width="100%" height="100%" themed color="white" onClick={()=>{props.onCategoryChange('designers')}}  active = {props.selectCategoryValue === "designers"}>
          <H4>
            Designers
          </H4>
        </FlexButton>
        <FlexButton  width="100%" height="100%" themed color="white" onClick={()=>{props.onCategoryChange('about')}}  active = {props.selectCategoryValue === "about"}>
          <H4>
            About
          </H4>
        </FlexButton>
      </Div>
    </Div>
  )
}
ShopLink.propTypes = {
  onCategoryChange: PropTypes.func.isRequired,
  selectCategoryValue: PropTypes.string.isRequired
}
export default ShopLink;
